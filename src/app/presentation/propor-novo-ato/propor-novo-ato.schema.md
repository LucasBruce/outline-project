.
├── angular.json
├── cpv-ato-delegacao.md
├── package.json
├── package-lock.json
├── propor-novo-ato.schema.md
├── README.md
├── src
│   ├── app
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   ├── app.ts
│   │   ├── core
│   │   │   ├── domain
│   │   │   │   ├── data
│   │   │   │   │   ├── mock
│   │   │   │   │   │   └── api-service.mock.ts
│   │   │   │   │   └── propor-novo-ato
│   │   │   │   │       ├── alterar-ato-existente.data.ts
│   │   │   │   │       └── propor-novo-ato.data.ts
│   │   │   │   ├── interfaces---------------------------------------(abstrações)
│   │   │   │   │   ├── api
│   │   │   │   │   │   ├── api.interface.ts
│   │   │   │   │   │   └── api.token.ts
│   │   │   │   │   └── propor-novo-ato
│   │   │   │   │       ├── alterar-ato-existente.interface.ts
│   │   │   │   │       └── alterar-ato-existente.token.ts
│   │   │   │   └── models-------------------------------------------(DTO)
│   │   │   │       └── propor-novo-ato
│   │   │   │           ├── alterar-ato-existente.model.ts
│   │   │   │           └── propor-novo-ato.model.ts
│   │   │   └── services
│   │   │       └── propor-novo-ato
│   │   │           ├── alterar-ato-existente.service.spec.ts
│   │   │           ├── alterar-ato-existente.service.ts
│   │   │           ├── propor-novo-ato.service.spec.ts
│   │   │           └── propor-novo-ato.service.ts
│   │   ├── middleware
│   │   │   ├── api
│   │   │   │   ├── api.service.spec.ts
│   │   │   │   └── api.service.ts
│   │   │   ├── guards
│   │   │   └── interceptors
│   │   ├── presentation
│   │   │   └── propor-novo-ato
│   │   │       ├── components
│   │   │       │   ├── alterar-ato-existente-stepper.component.spec.ts
│   │   │       │   ├── alterar-ato-existente-stepper.component.ts
│   │   │       │   ├── informacoes-norteadores.component.spec.ts
│   │   │       │   ├── informacoes-norteadores.component.ts
│   │   │       │   ├── observacoes.component.spec.ts
│   │   │       │   ├── observacoes.component.ts
│   │   │       │   ├── propor-novo-ato-card.component.spec.ts
│   │   │       │   ├── propor-novo-ato-card.component.ts
│   │   │       │   ├── propostas-salvas-card.component.spec.ts
│   │   │       │   ├── propostas-salvas-card.component.ts
│   │   │       │   ├── propostas-salvas.component.spec.ts
│   │   │       │   ├── propostas-salvas.component.ts
│   │   │       │   ├── regras-alcada.component.spec.ts
│   │   │       │   └── regras-alcada.component.ts
│   │   │       └── pages
│   │   │           ├── alterar-ato-existente
│   │   │           │   ├── alterar-ato-existente.component.spec.ts
│   │   │           │   └── alterar-ato-existente.component.ts
│   │   │           └── propor-novo-ato
│   │   │               ├── propor-novo-ato.spec.ts
│   │   │               └── propor-novo-ato.ts
│   │   └── shared
│   │       ├── components
│   │       │   ├── confirmacao-modal
│   │       │   │   ├── confirmacao-modal.component.spec.ts
│   │       │   │   └── confirmacao-modal.component.ts
│   │       │   └── inline-message
│   │       │       ├── inline-message.component.spec.ts
│   │       │       └── inline-message.component.ts
│   │       ├── directives
│   │       ├── pipes
│   │       └── utils
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

32 directories, 55 files
