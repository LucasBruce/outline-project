.
└── src
    └── app
        ├── core
        │   ├── api
        │   │   ├── interfaces
        │   │   │   ├── acompanhar-votacao
        │   │   │   │   ├── acompanhar-votacao.interface.ts
        │   │   │   │   └── acompanhar-votacao.token.ts
        │   │   │   ├── api
        │   │   │   │   ├── api.interface.ts
        │   │   │   │   └── api.token.ts
        │   │   │   ├── consultar-ato
        │   │   │   │   ├── consultar-ato.interface.ts
        │   │   │   │   └── consultar-ato.token.ts
        │   │   │   └── propor-novo-ato
        │   │   │       ├── alterar-ato-existente.interface.ts
        │   │   │       └── alterar-ato-existente.token.ts
        │   │   ├── models
        │   │   │   ├── acompanhar-votacao
        │   │   │   │   └── acompanhar-votacao.model.ts
        │   │   │   ├── consultar-ato
        │   │   │   │   └── consultar-ato.model.ts
        │   │   │   └── propor-novo-ato
        │   │   │       ├── alterar-ato-existente.model.ts
        │   │   │       └── propor-novo-ato.model.ts
        │   │   ├── services
        │   │   │   ├── api.service.spec.ts
        │   │   │   └── api.service.ts
        │   │   └── tokens
        │   ├── consultar-ato
        │   └── propor-novo-ato
        │       ├── models
        │       │   ├── alterar-ato-existente.model.ts
        │       │   └── propor-novo-ato.model.ts
        │       ├── reports
        │       └── services
        │           ├── propor-novo-ato.service.spec.ts
        │           └── propor-novo-ato.service.ts
        ├── middleware
        │   ├── guards
        │   └── interceptors
        ├── pages
        │   └── user
        ├── presentation
        │   ├── consultar-ato
        │   └── propor-novo-ato
        │       ├── components
        │       │   ├── alterar-ato-existente-stepper
        │       │   │   ├── alterar-ato-existente-stepper.component.spec.ts
        │       │   │   └── alterar-ato-existente-stepper.component.ts
        │       │   ├── informacoes-norteadores
        │       │   │   ├── informacoes-norteadores.component.spec.ts
        │       │   │   └── informacoes-norteadores.component.ts
        │       │   ├── observacoes
        │       │   │   ├── observacoes.component.spec.ts
        │       │   │   └── observacoes.component.ts
        │       │   ├── propor-novo-ato-card
        │       │   │   ├── propor-novo-ato-card.component.spec.ts
        │       │   │   └── propor-novo-ato-card.component.ts
        │       │   ├── propostas-salvas
        │       │   │   ├── propostas-salvas.component.spec.ts
        │       │   │   └── propostas-salvas.component.ts
        │       │   ├── propostas-salvas-card
        │       │   │   ├── propostas-salvas-card.component.spec.ts
        │       │   │   └── propostas-salvas-card.component.ts
        │       │   └── regras-alcada
        │       │       ├── regras-alcada.component.spec.ts
        │       │       └── regras-alcada.component.ts
        │       ├── pages
        │       │   ├── alterar-ato-existente
        │       │   │   ├── alterar-ato-existente.component.spec.ts
        │       │   │   └── alterar-ato-existente.component.ts
        │       │   ├── propor-ato.spec.ts
        │       │   ├── propor-ato.ts
        │       │   └── propor-novo-ato
        │       │       ├── propor-novo-ato.component.spec.ts
        │       │       └── propor-novo-ato.component.ts
        │       ├── propor-novo-ato.module.ts
        │       └── propor-novo-ato.routes.ts
        └── shared
            ├── components
            │   ├── confirmacao-modal
            │   │   ├── confirmacao-modal.component.spec.ts
            │   │   └── confirmacao-modal.component.ts
            │   └── inline-message
            │       ├── inline-message.component.spec.ts
            │       └── inline-message.component.ts
            ├── constants
            │   ├── messages.ts
            │   └── paths.ts
            ├── directives
            └── pipes

47 directories, 46 files
