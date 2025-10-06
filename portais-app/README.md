## Portais App (Frontend)

Aplicação frontend do desafio YDUQS construída com Next.js 15 (App Router), React 19 e MUI. Integra com a `Portais API` em `http://localhost:4000`.

### Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI**: MUI v7 + Emotion
- **Formulários**: React Hook Form + Yup
- **Testes**: Jest + Testing Library; Cypress (E2E)

### Pré‑requisitos
- Node.js 18+
- Yarn (ou npm/pnpm/bun)
- API rodando em `http://localhost:4000` (ver `portais-api`)

### Instalação
```bash
yarn install
```

### Desenvolvimento
```bash
yarn dev
```
- App: `http://localhost:3000`

### Build e produção local
```bash
yarn build
yarn start
```

### Integração com a API
Atualmente as URLs estão definidas nos server actions:
- `actions/offers.ts` → `GET http://localhost:4000/offers`
- `actions/enroll.ts` → `POST http://localhost:4000/enroll`

Se desejar parametrizar por ambiente, você pode mover essas URLs para uma variável pública, por exemplo `NEXT_PUBLIC_API_URL`, e consumir via `process.env.NEXT_PUBLIC_API_URL`.

### Scripts
```bash
yarn dev          # desenvolvimento (Turbopack)
yarn build        # build (Turbopack)
yarn start        # produção
yarn lint         # eslint
yarn test         # unit (watchAll)
```

### Testes
- Unitários/integração (Jest + Testing Library):
```bash
yarn test
```
- E2E (Cypress):
```bash
# Caso use Cypress no projeto, execute
npx cypress open
# ou
npx cypress run
```

### Estrutura do projeto (resumo)
```
app/                # App Router
components/         # componentes UI
actions/            # server actions para chamadas à API
contexts/           # contextos de estado
utils/, types/      # utilitários e tipos
public/             # assets estáticos
```

### Configuração
- `next.config.ts` para opções do Next.
- Tema MUI em `theme.ts`.

### Dicas
- Garanta que a `Portais API` está rodando antes de usar o app (URLs hardcoded em `actions/`).
- Para ambientes distintos, extraia a base URL da API para variável de ambiente pública e evite hardcode.

