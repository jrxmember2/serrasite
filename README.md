# Serratech Site

Base inicial do Projeto 1 em Next.js (App Router) com Tailwind, Framer Motion e Prisma/SQLite.

## Rodando local

```bash
cp .env.example .env
npm install
npx prisma generate
npm run build
npm run start
```

## Deploy com Docker

```bash
cp .env.example .env
docker compose up -d --build
```

## Easypanel

Use o `Dockerfile` incluído no projeto.

Variáveis importantes:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_HOTSITE_URL`
- `DATABASE_URL`
- `UPLOAD_DIR`

Volumes persistentes:

- `/app/data`
- `/app/public/uploads`

## Observação

Este pacote entrega a home institucional pronta, estrutura de páginas, Prisma configurado e base para admin/blog. O CRUD completo do painel e o editor TipTap ainda estão como placeholders para a próxima etapa.
