## Portais API

API do desafio YDUQS construída com NestJS, Prisma e PostgreSQL. Exposta na porta 4000 e documentada via Swagger em `/api` (ambiente não‑produção).

### Stack

- **Runtime**: Node.js + NestJS
- **Banco de dados**: PostgreSQL (Docker)
- **ORM**: Prisma
- **Logger**: `nestjs-pino`
- **Docs**: Swagger (`@nestjs/swagger` + `swagger-ui-express`)

### Pré‑requisitos

- Node.js 18+ e Yarn
- Docker e Docker Compose

### Configuração de ambiente

Crie um arquivo `.env` na raiz de `portais-api` (usado pelo `docker-compose.dev.yaml`). Exemplo:

```env
# PostgreSQL
POSTGRES_USER=portais
POSTGRES_PASSWORD=portais
POSTGRES_DB=portais

# pgAdmin (opcional)
PGADMIN_DEFAULT_EMAIL=admin@local
PGADMIN_DEFAULT_PASSWORD=admin

# Prisma
DATABASE_URL=postgresql://portais:portais@localhost:5432/portais?schema=public

# Node
NODE_ENV=development
LOG_LEVEL=debug
```

### Instalação

```bash
yarn install
```

### Subindo infraestrutura local (DB)

```bash
docker compose -f docker-compose.dev.yaml up -d
```

- PostgreSQL: `localhost:5432`
- pgAdmin: `http://localhost:5050`

### Banco de dados (Prisma)

Após subir o banco e definir `DATABASE_URL`, execute:

```bash
yarn prisma:generate --schema ./prisma       # gera o client
yarn prisma:migrate:dev --schema ./prisma    # aplica migrações de desenvolvimento
# opcional
yarn prisma:seed           # popula dados de exemplo (se implementado)
```

### Executando a API

```bash
# modo desenvolvimento (watch)
yarn start:dev

# modo produção (build + run)
yarn build && yarn start:prod
```

- API: `http://localhost:4000`
- Swagger (não‑produção): `http://localhost:4000/api`

### Scripts disponíveis

```bash
yarn start           # inicia
yarn start:dev       # inicia com watch
yarn start:prod      # roda dist/main
yarn build           # compila TS
yarn lint            # eslint
yarn test            # unit
yarn test:e2e        # e2e
yarn test:cov        # cobertura

# Prisma
yarn prisma:generate
yarn prisma:migrate:dev
yarn prisma:db:pull
yarn prisma:reset
yarn prisma:seed
```

### Estrutura do projeto (resumo)

```
src/
  main.ts            # bootstrap + Swagger (não‑produção)
  app.module.ts      # módulos e logger (pino)
  offers/            # ofertas (módulo, controller, service)
  enroll/            # matrícula/inscrição (módulo)
prisma/
  schema.prisma      # datasource e generator
docker-compose.dev.yaml
```

### Testes

```bash
yarn test            # unitários
yarn test:e2e        # end‑to‑end
yarn test:cov        # cobertura
```

### Health check rápido

Com a API rodando:

```bash
curl -i http://localhost:4000
```

Endpoints e modelos estão documentados no Swagger em `http://localhost:4000/api` (ambiente não‑produção).

### Observações

- Em produção, o Swagger é desabilitado (`NODE_ENV === 'production'`).
- O nível de log pode ser ajustado via `LOG_LEVEL`.

### Licença

UNLICENSED
