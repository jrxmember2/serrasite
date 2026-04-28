# Serratech Soluções Digitais Corporativas e Condominiais

Site institucional premium da Serratech, criado para posicionar a marca como parceira estratégica em transformação digital para empresas, escritórios, síndicos e condomínios. O projeto foi estruturado para produção, versionamento em GitHub e deploy em VPS com EasyPanel.

## Visão geral

- Visual premium com identidade tecnológica, seções comerciais, mockups de produto, portal do cliente e foco em conversão.
- Estrutura SPA com páginas para `Home`, `Sobre`, `Soluções`, `Âncora`, `App Síndico`, `Contato` e `Portal do Cliente`.
- Preparado para deploy via Docker com Nginx, incluindo fallback para rotas do React Router.
- SEO básico por página, `robots.txt`, `sitemap.xml`, `manifest` e metadados sociais.

## Tecnologias utilizadas

- React 18
- Vite 5
- React Router DOM
- CSS autoral responsivo com animações suaves e glassmorphism
- Docker + Nginx para produção

## Estrutura de pastas

```text
serrasite/
├─ public/
│  ├─ favicon.svg
│  ├─ og-cover.svg
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ site.webmanifest
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ Icon.jsx
│  │  ├─ PageHero.jsx
│  │  ├─ SectionHeading.jsx
│  │  └─ Seo.jsx
│  ├─ data/
│  │  └─ siteContent.js
│  ├─ pages/
│  │  ├─ AboutPage.jsx
│  │  ├─ AncoraPage.jsx
│  │  ├─ AppSindicoPage.jsx
│  │  ├─ ClientPortalPage.jsx
│  │  ├─ ContactPage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ NotFoundPage.jsx
│  │  └─ SolutionsPage.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ .dockerignore
├─ .env.example
├─ .gitignore
├─ Dockerfile
├─ nginx.conf
├─ package.json
└─ vite.config.js
```

## Variáveis de ambiente

Crie um arquivo `.env` a partir de `.env.example` quando quiser customizar links reais:

```bash
cp .env.example .env
```

Variáveis disponíveis:

- `VITE_SITE_URL`: domínio principal do site
- `VITE_CONTACT_EMAIL`: e-mail comercial exibido no site
- `VITE_WHATSAPP_URL`: link completo do WhatsApp
- `VITE_LINKEDIN_URL`: URL da página no LinkedIn
- `VITE_INSTAGRAM_URL`: URL da página no Instagram

## Como rodar localmente

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

O Vite abrirá o projeto na porta `5173` por padrão.

## Como gerar build de produção

```bash
npm run build
```

O resultado será gerado em `dist/`.

Para testar localmente o build:

```bash
npm run preview
```

O preview roda na porta `4173`.

## Docker para produção

O projeto já possui `Dockerfile` multi-stage:

1. Usa `node:22-alpine` para instalar dependências e gerar o build.
2. Usa `nginx:alpine` para servir os arquivos estáticos.
3. Expõe a porta `80`.

### Build da imagem

```bash
docker build -t serratech-site .
```

### Rodar localmente com Docker

```bash
docker run --rm -p 8080:80 serratech-site
```

Depois acesse `http://localhost:8080`.

## GitHub

### Criar e enviar o projeto para o GitHub

```bash
git init
git add .
git commit -m "primeira versão do site serratech"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Se o repositório já existir localmente, ignore o `git init` e apenas configure o `remote` se necessário.

## Deploy no EasyPanel

O projeto foi preparado para funcionar bem em deploy via repositório Git com `Dockerfile`.

### Porta interna da aplicação

- Porta interna para este projeto: `80`

### Domínios sugeridos

- `serratech.tec.br`
- `www.serratech.tec.br`
- `site.serratech.tec.br`

Atualize `VITE_SITE_URL` e `public/sitemap.xml` quando definir o domínio final.

## Tutorial passo a passo para publicar no EasyPanel

### Passo 1

Criar um repositório no GitHub.

### Passo 2

Subir o código para o GitHub com os comandos:

```bash
git init
git add .
git commit -m "primeira versão do site serratech"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

### Passo 3

Entrar no EasyPanel.

### Passo 4

Criar um novo projeto ou um novo serviço.

### Passo 5

Escolher a opção de deploy via GitHub ou repositório Git.

### Passo 6

Informar:

- URL do repositório
- Branch `main`
- Caminho do projeto, se o repositório tiver mais de uma aplicação
- `Dockerfile`, caso o EasyPanel peça o método de build

### Passo 7

Configurar a porta interna da aplicação.

- Como este projeto usa Nginx no container, a porta interna é `80`

### Passo 8

Configurar o domínio no EasyPanel.

Exemplos:

- `site.serratech.tec.br`
- `www.serratech.tec.br`
- `serratech.tec.br`

### Passo 9

Ativar SSL/HTTPS pelo EasyPanel.

- Normalmente isso é feito na configuração do domínio com Let's Encrypt
- Após ativar, valide o certificado e o redirecionamento para HTTPS

### Passo 10

Realizar o primeiro deploy.

### Passo 11

Testar:

- Home
- Sobre
- Produtos e soluções
- Âncora
- App Síndico
- Contato
- Portal do Cliente
- Responsividade no celular
- Menu mobile
- Formulários visuais

### Passo 12

Como atualizar o site depois:

1. Fazer alterações no código
2. Commitar
3. Enviar para o GitHub
4. No EasyPanel, aguardar o pull automático da nova versão ou acionar `Redeploy` manualmente

## Como configurar domínio

1. Adicione o domínio no serviço correspondente dentro do EasyPanel.
2. Aponte os registros DNS para a VPS conforme a documentação do seu provedor.
3. Após propagação, associe o domínio ao serviço.
4. Ative SSL e teste as versões com e sem `www`.

## Como configurar HTTPS/SSL

1. Abra a área do domínio dentro do EasyPanel.
2. Ative SSL automático.
3. Aguarde a emissão do certificado.
4. Teste acesso em `https://`.

## Como atualizar o site após novos commits

```bash
git add .
git commit -m "ajustes no site serratech"
git push origin main
```

Depois disso:

- Se o EasyPanel estiver com deploy automático por push, ele publicará a nova versão.
- Caso não esteja, faça o redeploy manual pelo painel.

## Erros comuns de deploy e como resolver

### 1. Build falha por dependências

- Confirme que `package-lock.json` foi enviado ao GitHub.
- Rode `npm install` localmente e teste `npm run build` antes do push.

### 2. Rotas do React não funcionam ao atualizar a página

- Verifique se o `nginx.conf` está usando `try_files $uri $uri/ /index.html;`
- Esse projeto já está configurado dessa forma.

### 3. Domínio abre sem HTTPS

- Confirme se o domínio já propagou.
- Reative o SSL no EasyPanel após a propagação.

### 4. Metadados e SEO ainda mostram domínio antigo

- Atualize `VITE_SITE_URL`
- Ajuste `public/sitemap.xml`
- Gere novo build e faça novo deploy

### 5. Links de contato ainda estão com placeholders

- Configure o `.env` com WhatsApp, e-mail e redes sociais reais
- Gere novo build após alterar as variáveis

## Observações de produção

- O site está pronto visualmente para integração futura com backend no formulário e no portal do cliente.
- O `Portal do Cliente` foi desenhado como interface demonstrativa, mas já organizado para futura autenticação e consumo de API.
- O projeto prioriza performance, deploy simples e manutenção clara.
