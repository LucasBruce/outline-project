import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { strings } from '@angular-devkit/core';
import {
  SchematicContext,
  applyTemplates,
  apply,
  Rule,
  Tree,
  url,
  move,
  chain,
  mergeWith,
} from '@angular-devkit/schematics';
import * as path from 'path';

interface Schema {
  name: string;   // nome do service
  feature: string; // nome da feature alvo
  path?: string;
}

/**
 * Adiciona import e provider em um componente feature existente.
 */
function addProviderToComponent(
  host: Tree,
  componentPath: string,
  serviceName: string,
  serviceImportPath: string
) {
  const buffer = host.read(componentPath);
  if (!buffer) throw new Error(`Arquivo ${componentPath} não encontrado.`);

  const sourceText = buffer.toString('utf-8');
  const sourceFile = ts.createSourceFile(
    componentPath,
    sourceText,
    ts.ScriptTarget.Latest,
    true
  );

  // 1️⃣ Gera o trecho do import do service
  const importChange = insertImport(
    sourceFile,
    componentPath,
    serviceName,
    serviceImportPath
  ) as InsertChange;

  // 2️⃣ Atualiza o array providers do @Component
  let updatedSource = sourceText.replace(
    /providers\s*:\s*\[([^\]]*)\]/,
    (match, p1) => {
      const existing = p1.trim();
      if (existing.length === 0) return `providers: [${serviceName}]`;
      if (existing.includes(serviceName)) return match; // já existe
      return `providers: [${existing}, ${serviceName}]`;
    }
  );

  // 3️⃣ Adiciona o import no topo do arquivo (evitando duplicação)
  if (importChange && importChange.toAdd && !sourceText.includes(importChange.toAdd.trim())) {
    updatedSource =
      updatedSource.slice(0, importChange.pos) +
      importChange.toAdd + updatedSource.slice(importChange.pos);
  }

  // 4️⃣ Sobrescreve o arquivo atualizado
  host.overwrite(componentPath, updatedSource);
}

/**
 * Schematic principal
 * Gera um service e atualiza a feature especificada.
 */
export function customService(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const serviceDir = `src/app/core/services/${strings.dasherize(options.name)}`;
    const serviceFile = `${serviceDir}/${strings.dasherize(options.name)}.service.ts`;

    const featureDir = `src/app/presentation/${strings.dasherize(options.feature)}`;
    const featureFile = `${featureDir}/${strings.dasherize(options.feature)}.feature.ts`;

    const serviceName = strings.classify(`${options.name}Service`);

    // 🔥 Calcula o caminho relativo real
    const relativeImportPath = path
      .relative(featureDir, serviceFile)
      .replace(/\\/g, '/')
      .replace(/\.ts$/, '');

    context.logger.info(`📦 Gerando service '${options.name}'...`);
    context.logger.info(`🎯 Feature alvo: '${options.feature}'`);
    context.logger.info(`📄 Caminho de import: ${relativeImportPath}`);

    // Cria o arquivo do service
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
      }),
      move(serviceDir),
    ]);

    // Atualiza o componente feature
    const updateFeatureRule: Rule = (host: Tree) => {
      if (!host.exists(featureFile)) {
        context.logger.warn(`⚠️ Componente '${featureFile}' não encontrado.`);
        return host;
      }

      addProviderToComponent(host, featureFile, serviceName, relativeImportPath);
      context.logger.info(`✅ '${serviceName}' importado e adicionado aos providers da feature.`);
      return host;
    };

    return chain([mergeWith(templateSource), updateFeatureRule]);
  };
}
