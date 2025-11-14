# OutlineProject

contexto: cpv-ato-delegacao

shared/components/confirmacao-modal.component
shared/components/inline-message.component

1.funcionalidade - propor-novo-ato:

    - (page) propor-novo-ato.component
    - components/propor-novo-ato-card.component
    - components/propostas-salvas-card.component
    - components/propostas-salvas.component

    - (page) alterar-ato-existente.component
    - components/alterar-ato-existente-stepper.component
    - components/informacoes-norteadores.component
    - components/observacoes.component
    - components/regras-alcada.component
    - components/proposta-criada-enviada.component

2.funcionalidade - acompanhar-votacao

3.funcionalidade - consultar-ato

    - components/propor-novo-ato-card.component
    - components/propostas-salvas-card.component
    - components/propostas-salvas.component

    npm run ng g component core/services/propor-novo-ato/propor-novo-ato.service
    npm run ng g component core/services/propor-novo-ato/alterar-ato-existente.service



# npm i xlsx - Consegue ler e criar relatorios xls nos 3 formatos (xls, xlsx e csv) - reportar isso para o Herbert
# npm run ng g service api.service
# npm run ng g component api.component
# npm run ng g pipe api.pipe
# tree -I "node_modules|dist|www|coverage|.vscode|.angular|public|consultar-ato|acompanhar-votacao" -L 7 > propor-novo-ato.schema.md
# tree -fi -I "node_modules|dist|www|coverage|.vscode|.angular|public|consultar-ato|acompanhar-votacao" -L 7 > propor-novo-ato.path.md

# Gerar Dir
# tree -L 7 -I "node_modules|assets|dist|.git|coverage|*.json|public|app.config.ts|app.html|app.routes.ts|app.scss|app.spec.ts|app.ts|environment.ts|index.html|main.ts|manifest.webmanifest|styles.scss|*.md" > outline-project-dir.md  

# Gerar Apenas Arquivos
# tree -if --noreport -I "node_modules|assets|dist|.git|coverage|*.json|public|app.config.ts|app.html|app.routes.ts|app.css|app.spec.ts|app.ts|environment.ts|index.html|main.ts|manifest.webmanifest|styles.scss" | grep -E '\.[^/]+$' > outline-project-files.md

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
