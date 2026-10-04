# Andamento do projeto Serratech

Atualizado em 04/10/2026. Este documento registra o estado do projeto para a próxima retomada.

## Entrega concluída

O site foi redesenhado com inspiração visual na Vandslab, mantendo animações com GSAP e adotando tipografia em grande escala, identidade Serratech e telas reais do SindÂncora.

- Serratech apresentada como fábrica de software e desenvolvedora do ÂncoraHUB.
- SindÂncora disponível para síndicos; ÂncorADV para advogados identificado como **em breve**, sem promessa de data ou funcionalidades já disponíveis.
- Administradoras são **parceiras**. Manter esse posicionamento em qualquer alteração futura.
- Discurso comercial centrado em melhorar o fluxo de trabalho, proteger informações e ganhar tempo para clientes e novos negócios.
- Qualidade e experiência orientam a escolha do software. A experiência da equipe contempla data centers, operações críticas de varejo com picos de demanda como Black Friday, desenvolvimento em multinacionais e validação externa de cibersegurança.
- Infraestrutura apresentada com Hetzner, AWS e Oracle, em Helsinki, Nuremberg, Ohio e São Paulo, com interconexão, espelhamento e política rigorosa de backup.

A visualização de incidente regional é uma **simulação ilustrativa**. Não consulta a infraestrutura real nem informa disponibilidade ou prazo de recuperação. Não inventar SLA, RPO/RTO, frequência de backup, retenção, certificações ou garantia absoluta de perda zero.

## Versionamento da entrega

- Commit de implementação: `5468c6bf034cab36e2c9c8565723a63abd36f12e`.
- Pull request integrado: [GitHub #11](https://github.com/jrxmember2/serrasite/pull/11).
- Commit de merge do redesign: `9efba2d0b89ed118e56c994f9abb8c7cb9f7c974`.
- Branch de trabalho do redesign: `redesign/serratech-ancorahub`.
- Branch atual: `main`.
- O merge foi confirmado na `main` do [GitHub](https://github.com/jrxmember2/serrasite) e do [GitLab](https://gitlab.com/juniorcordeiroamorim/serrasite).

O usuário autorizou commit, push e merge ao terminar o trabalho. O redesign foi integrado e sincronizado nos dois destinos configurados para push no remoto `origin`.

## O que está funcionando

- Home, páginas da Serratech, soluções e fábrica de software com o novo posicionamento.
- `/ancora` apresenta o ÂncoraHUB; `/ancoradv` apresenta o futuro produto; `/app-sindico` apresenta o SindÂncora.
- Galeria com cinco telas reais, troca por abas, navegação por teclado e ampliação em diálogo.
- Menu mobile com animação, controle de foco, fechamento por Escape e conteúdo de fundo inativo enquanto aberto.
- Acesso ao produto encaminhado ao login oficial do SindÂncora, sem autenticação simulada.
- Contato com interesse preenchido a partir do link de origem e mensagem preparada para revisão e envio pelo aplicativo de e-mail do cliente.
- Fontes locais com licenças OFL e capturas otimizadas em WebP.
- Metadados, imagem social e sitemap atualizados. Documentos legais mantêm suas URLs.
- Pré-renderização das rotas e tratamento da hidratação quando o HTML recebido não corresponde à URL atual.

## Validação realizada

- `npm.cmd run build` aprovado, incluindo 12 páginas pré-renderizadas e nove URLs no sitemap.
- Revisão de 12 rotas no navegador, incluindo os documentos legais e a página não encontrada.
- Responsividade verificada em 320, 390, 768, 1440 e 1920 px, sem rolagem horizontal nas páginas testadas.
- Galeria, diálogo, contato, simulação de infraestrutura e menu testados.
- Navegação por teclado, movimento reduzido e leitura das páginas principais sem JavaScript verificados.
- Nenhum erro de JavaScript ou recurso local ausente detectado na revisão final.
- Nenhuma violação detectada pelo axe nos critérios WCAG 2 A/AA e 2.1 AA testados. Isso registra o resultado dos testes automatizados realizados, sem substituir uma auditoria completa.
- Verificação de whitespace dos arquivos preparados para commit aprovada.

O relatório local está em `.tmp/qa/verification.json`. Ferramentas e capturas auxiliares em `.tmp/qa/` são ignoradas pelo Git e podem não existir em outro checkout.

## Pontos para a próxima retomada

1. Se o contato precisar enviar diretamente pelo site, integrar um serviço de recebimento. Hoje ele prepara um e-mail; não afirma que houve envio automático.
2. Confirmar o deploy no ambiente público se solicitado. Commit, push e merge foram concluídos, mas a publicação efetiva em `https://serratech.tec.br/` não foi verificada nesta entrega.
3. Configurar ou revisar os links comerciais pelo ambiente de deploy. WhatsApp e redes sociais só aparecem com links válidos configurados.
4. Ao lançar o ÂncorADV, atualizar o status e o conteúdo com informações reais aprovadas pela empresa.

## Arquivos e materiais

- `src/studio.css`: identidade visual nova, aplicada sobre os estilos existentes.
- `src/components/InfrastructureSection.jsx`: mapa e simulação ilustrativa de redirecionamento.
- `src/components/ExpertiseSection.jsx`: experiência da equipe.
- `src/data/siteContent.js`: posicionamento, navegação, produtos e conteúdo da fábrica.
- `src/data/seo.js`: metadados e rotas pré-renderizadas.
- `public/media/products/`: cinco capturas WebP usadas no site.
- `public/fonts/` e `src/fonts.css`: fontes locais e licenças.
- `public/og-cover.png`: imagem de compartilhamento social.

Os originais enviados em `public/imgs/`, a pasta `.agents/` e `skills-lock.json` já estavam sem rastreamento antes do trabalho e foram preservados. Não apagar ou incluir esses materiais indiscriminadamente em commits futuros. As versões otimizadas utilizadas no site estão versionadas.

Para executar: `npm.cmd run dev`. Para gerar produção: `npm.cmd run build`. Para visualizar o build: `npm.cmd run preview` (porta 4173).
