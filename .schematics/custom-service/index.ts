import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { strings, normalize } from '@angular-devkit/core';
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
  name: string;
  feature: string;
  path?: string;
}

/**
 * Adiciona import e provider no componente feature.
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

  const importChange = insertImport(
    sourceFile,
    componentPath,
    serviceName,
    serviceImportPath
  ) as InsertChange;

  let updatedSource = sourceText.replace(
    /providers\s*:\s*\[([^\]]*)\]/,
    (match, p1) => {
      const existing = p1.trim();
      if (existing.length === 0) return `providers: [${serviceName}]`;
      if (existing.includes(serviceName)) return match;
      return `providers: [${existing}, ${serviceName}]`;
    }
  );

  if (importChange && importChange.toAdd && !sourceText.includes(importChange.toAdd.trim())) {
    updatedSource =
      updatedSource.slice(0, importChange.pos) +
      importChange.toAdd +
      updatedSource.slice(importChange.pos);
  }

  host.overwrite(componentPath, updatedSource);
}

/**
 * Verifica se um diretório está realmente vazio (sem subpastas ou arquivos, exceto .gitkeep)
 */
function isDirectoryEmpty(tree: Tree, dirPath: string): boolean {
  const normalizedDir = normalize(dirPath).replace(/\/$/, '');
  let hasContent = false;

  tree.visit((filePath) => {
    if (!filePath.startsWith(normalizedDir + '/')) return;

    const relative = filePath.slice(normalizedDir.length + 1);
    if (relative.length === 0) return;
    if (relative === '.gitkeep') return;

    hasContent = true;
  });

  return !hasContent;
}

/**
 * Remove arquivos .gitkeep de diretórios que tenham arquivos reais
 */
function cleanGitkeepFromNonEmptyDirs(tree: Tree, context: SchematicContext) {
  const gitkeepPaths: string[] = [];

  // Localiza todos os .gitkeep
  tree.visit((filePath) => {
    if (filePath.endsWith('.gitkeep')) {
      gitkeepPaths.push(filePath);
    }
  });

  // Remove se o diretório não estiver vazio
  gitkeepPaths.forEach((gitkeepPath) => {
    const dirPath = path.dirname(gitkeepPath);
    if (!isDirectoryEmpty(tree, dirPath)) {
      tree.delete(gitkeepPath);
      context.logger.info(`🧹 Removido .gitkeep de '${dirPath}' (diretório contém arquivos).`);
    }
  });
}

/**
 * Schematic principal
 */
export function customService(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const dasherized = strings.dasherize(options.name);
    const classified = strings.classify(options.name);
    const featureDasherized = strings.dasherize(options.feature);

    const featureDir = `src/app/presentation/${featureDasherized}`;
    const featureFile = `${featureDir}/${featureDasherized}.feature.ts`;

    const coreBase = `src/app/core/${featureDasherized}`;
    const paths = {
      interfaces: `${coreBase}/interfaces`,
      models: `${coreBase}/models`,
      services: `${coreBase}/services`,
      tokens: `${coreBase}/tokens`,
    };

    const serviceFile = `${paths.services}/${dasherized}.service.ts`;
    const serviceName = strings.classify(`${options.name}Service`);

    const relativeImportPath = path
      .relative(featureDir, serviceFile)
      .replace(/\\/g, '/')
      .replace(/\.ts$/, '');

    context.logger.info(`📦 Gerando arquivos para '${options.name}' em '${coreBase}'...`);

    // Template base
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
        name: dasherized,
        className: classified,
      }),
      move(coreBase),
    ]);

    // Regra que move os arquivos e cria .gitkeep apenas se necessário
    const relocateFilesRule: Rule = (host: Tree) => {
      const baseFiles = [
        { ext: '.service.ts', target: paths.services },
        { ext: '.spec.ts', target: paths.services }, // spec junto do service
        { ext: '.interface.ts', target: paths.interfaces },
        { ext: '.token.ts', target: paths.tokens },
        { ext: '.model.ts', target: paths.models },
      ];

      baseFiles.forEach(({ ext, target }) => {
        const filename = `${dasherized}${ext}`;
        const srcPath = `${coreBase}/${filename}`;
        const destPath = `${target}/${filename}`;

        if (host.exists(srcPath)) {
          const content = host.read(srcPath);
          if (content) {
            host.create(destPath, content);
            host.delete(srcPath);
          }
        }
      });

      // Cria .gitkeep apenas em diretórios realmente vazios
      Object.values(paths).forEach((dir) => {
        const normalized = normalize(dir);
        if (isDirectoryEmpty(host, normalized)) {
          const gitkeepPath = `${normalized}/.gitkeep`;
          if (!host.exists(gitkeepPath)) {
            host.create(gitkeepPath, '');
            context.logger.info(`🪶 Criado .gitkeep em '${normalized}' (diretório vazio)`);
          }
        }
      });

      return host;
    };

    // Atualiza a feature
    const updateFeatureRule: Rule = (host: Tree) => {
      if (!host.exists(featureFile)) {
        context.logger.warn(`⚠️ Feature '${featureFile}' não encontrada, pulando injeção.`);
        return host;
      }

      addProviderToComponent(host, featureFile, serviceName, relativeImportPath);
      context.logger.info(`✅ '${serviceName}' importado e adicionado aos providers.`);
      return host;
    };

    // Limpa .gitkeep desnecessários após tudo
    const finalCleanupRule: Rule = (host: Tree) => {
      cleanGitkeepFromNonEmptyDirs(host, context);
      return host;
    };

    return chain([
      mergeWith(templateSource),
      relocateFilesRule,
      updateFeatureRule,
      finalCleanupRule,
    ]);
  };
}
