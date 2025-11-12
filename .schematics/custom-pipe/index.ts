import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  applyTemplates,
  move,
  mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

interface Schema {
  name: string;
  path?: string;
}

export function customPipe(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const targetPath = `src/app/shared/pipes/${options.name}`;
    context.logger.info(`📦 Gerando Pipe '${options.name}' em '${targetPath}'`);

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings
      }),
      move(targetPath)
    ]);

    return mergeWith(templateSource)(tree, context);
  };
}
