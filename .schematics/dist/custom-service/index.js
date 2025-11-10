"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customService = customService;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function customService(options) {
    return (tree, context) => {
        const targetPath = `src/app/core/services/${options.name}`;
        context.logger.info(`📦 Gerando Service '${options.name}' em '${targetPath}'`);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.applyTemplates)({
                ...options,
                ...core_1.strings
            }),
            (0, schematics_1.move)(targetPath)
        ]);
        return (0, schematics_1.mergeWith)(templateSource)(tree, context);
    };
}
