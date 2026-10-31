# Paróquia Santo Antônio de Pádua — proposta de novo site

[![CI](https://github.com/Alucsky/paroquia-santo-antonio-web/actions/workflows/ci.yml/badge.svg)](https://github.com/Alucsky/paroquia-santo-antonio-web/actions/workflows/ci.yml)
[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-a63d29.svg)](LICENSE)

Proposta de uma nova versão do site da **Paróquia Santo Antônio de Pádua**, em Dois Vizinhos (PR): horários de missa, sacramentos, comunidades, pastorais e a história do padroeiro. Feito para abrir rápido em qualquer celular, em **português, inglês e espanhol**.

> **Este não é o site oficial da paróquia.** É um projeto independente e voluntário, feito a partir das informações públicas do site atual e das redes da paróquia. A ideia é que a paróquia possa adotá-lo e mantê-lo. Até lá, horários e contatos oficiais são os divulgados pela própria paróquia.

É um projeto **open source**: a paróquia, ou qualquer voluntário, pode atualizar horários, textos e fotos sem mexer em código complicado.

---

## Sumário

- [Visão geral](#visão-geral)
- [Stack](#stack)
- [Começando](#começando)
- [Scripts](#scripts)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Atualizando o conteúdo](#atualizando-o-conteúdo)
- [Idiomas](#idiomas)
- [SEO](#seo)
- [Deploy na Vercel](#deploy-na-vercel)
- [Qualidade](#qualidade)
- [Contribuindo](#contribuindo)
- [Documentação](#documentação)
- [Créditos das imagens](#créditos-das-imagens)
- [Licença](#licença)

## Visão geral

| Página | Rota | O que tem |
|---|---|---|
| Início | `/` | Hero, próximas celebrações (calculadas na hora), atalhos, padroeiro, missas da semana, comunidades, galeria e "como chegar" |
| Horários | `/horarios` | Missas semanais, celebrações mensais, atendimento da secretaria e dos padres |
| Sacramentos | `/sacramentos` | Batismo e matrimônio com checklist de documentos; demais sacramentos |
| Santo Antônio | `/santo-antonio` | Vida do padroeiro em linha do tempo, leitura da pintura, devoções e oração |
| Comunidades | `/comunidades` | As 22 comunidades e bairros, com busca, filtro e a história de cada padroeiro |
| Pastorais | `/pastorais` | 20 pastorais e movimentos agrupados por área |
| A Paróquia | `/paroquia` | História, Igreja Matriz, secretaria e diocese |
| Contato | `/contato` | WhatsApp, telefone, e-mail, redes sociais e horários |

O site é **100% estático**: todas as páginas são geradas no build (SSG). Não há API, banco de dados nem formulário com servidor. O contato acontece por links diretos de WhatsApp, telefone e e-mail.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) com **Pages Router** e `getStaticProps` |
| UI | [Chakra UI v3](https://chakra-ui.com) com tema e recipes próprios em `src/styles/` |
| Tipografia | Fraunces (títulos) e Manrope (texto) via `next/font` |
| Ícones | [`react-icons/lu`](https://react-icons.github.io/react-icons/icons/lu/) |
| i18n | `next-i18next` (pt, en, es) |
| Testes | Vitest + Testing Library sobre `jsdom` |
| Lint e formatação | [Biome](https://biomejs.dev) |
| Hooks | Husky (`pre-commit` → lint, `pre-push` → testes + build) |
| Hospedagem | Vercel |

## Começando

**Requisitos:** Node.js 24 (veja `.nvmrc`) e npm.

```bash
git clone https://github.com/Alucsky/paroquia-santo-antonio-web.git
cd paroquia-santo-antonio-web
npm install
npm run dev
```

O site sobe em `http://localhost:3000`. As versões em inglês e espanhol ficam em `/en` e `/es`.

Variáveis de ambiente são opcionais (veja `.env.example`):

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em canonical, Open Graph, sitemap e robots. Sem ela: domínio de produção da Vercel, ou `http://localhost:3000` em desenvolvimento |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Código de verificação do Google Search Console |

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Ambiente de desenvolvimento (gera sitemap e robots antes) |
| `npm run build` | Build de produção (gera sitemap e robots antes) |
| `npm start` | Serve o build de produção |
| `npm run lint` | Biome: lint e formatação de `src/` |
| `npm run format` | Corrige o que o Biome souber corrigir |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Testes com cobertura (mínimo de 80%) |
| `npm run test:watch` | Testes em modo observação |

## Estrutura de pastas

```
public/
  images/               fotos da Matriz, da vida paroquial, marca e pintura do padroeiro
  locales/{pt,en,es}/   textos do site, um arquivo por página
scripts/
  generate-seo-files.mjs  gera sitemap.xml e robots.txt no build
src/
  pages/                rotas (arquivo = página)
  layouts/              layout do site (header, rodapé, barra de atalhos no celular)
  components/
    ui/                 kit base do Chakra (gerado pela CLI, fora do lint)
    layout/             header, menu, rodapé, seletor de idioma
    shared/             SEO, títulos de seção, hero de página, animação de entrada
    home/ saint/ schedule/ sacraments/ communities/
  content/              dados estáticos: contatos, horários, comunidades, pastorais, fotos
  hooks/                useNow, useReveal
  lib/                  fontes, idiomas, URL do site, traduções no build
  styles/               tema, paleta, recipes e CSS global
  utils/                cálculo das próximas celebrações, links de contato, normalização de texto
  test/                 setup, render com providers e specs das páginas
docs/                   PRD, HLD, ADRs, convenções e guia de conteúdo
```

Arquivos em **kebab-case**. Imports por alias (`@/components/*`, `@/content/*` etc.), sem `@/*` genérico. Detalhes em [docs/conventions/web.md](docs/conventions/web.md).

## Atualizando o conteúdo

O conteúdo que muda com frequência foi separado do código. O guia completo, passo a passo e pensado para quem não é programador, está em **[docs/guia-de-conteudo.md](docs/guia-de-conteudo.md)**.

| Quero mudar… | Onde |
|---|---|
| Horários de missa e celebrações | `src/content/celebrations.ts` |
| Telefone, WhatsApp, e-mail, endereço, redes | `src/content/parish.ts` |
| Horário da secretaria e dos padres | `src/content/parish.ts` (`officeHours`) |
| Documentos do batismo e do casamento | `public/locales/<idioma>/sacraments.json` |
| Comunidades | `src/content/communities.ts` + `public/locales/<idioma>/communities.json` |
| Pastorais | `src/content/ministries.ts` + `public/locales/<idioma>/ministries.json` |
| Fotos da galeria | `public/images/` + `src/content/gallery.ts` |
| Qualquer texto do site | `public/locales/<idioma>/<página>.json` |

## Idiomas

- Português (`pt`) é o idioma padrão e a fonte da verdade.
- Inglês (`en`) e espanhol (`es`) ficam nas pastas irmãs, com **as mesmas chaves**.
- Um teste (`src/test/locales.spec.ts`) falha se alguma chave existir em um idioma e faltar em outro, ou se algum texto estiver vazio.

## SEO

- Metatags por página: título, descrição, canonical, `hreflang` para os três idiomas, Open Graph e Twitter Card.
- Dados estruturados `schema.org/Church` na página inicial (endereço, telefone, coordenadas e redes).
- `sitemap.xml` com alternates de idioma e `robots.txt`, gerados no build por `scripts/generate-seo-files.mjs`. Em previews da Vercel o `robots.txt` bloqueia a indexação, e só a produção é indexada.
- Páginas de erro com `noindex`.
- Imagens otimizadas em AVIF/WebP pelo `next/image`, fontes self-hosted e HTML pré-renderizado.

Depois do primeiro deploy, cadastre o domínio no [Google Search Console](https://search.google.com/search-console), envie `https://<domínio>/sitemap.xml` e, se quiser, coloque o código de verificação em `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

## Deploy na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório `Alucsky/paroquia-santo-antonio-web`. A Vercel detecta o Next.js sozinha. O `vercel.json` só limita os deploys à `main`.
2. Sem configuração, canonical, sitemap e robots usam o domínio de produção da Vercel (`*.vercel.app`). Só defina `NEXT_PUBLIC_SITE_URL` em **Settings → Environment Variables** quando houver um domínio próprio.
3. Em **Settings → Git**, deixe **Production Branch = `main`**. Só a `main` gera deploy: branches e PRs não geram preview ([ADR 0006](docs/adr/0006-deploy-somente-da-main.md)). Para revisar um PR, rode a branch localmente.
4. Se a paróquia adotar o site, em **Settings → Domains** adicione o domínio dela e crie no registrador os registros que a Vercel mostrar (em geral `A 76.76.21.21` no domínio raiz e `CNAME cname.vercel-dns.com` no `www`).

## Qualidade

| Barreira | Quando | O que roda |
|---|---|---|
| `pre-commit` | a cada commit | `npm run lint` |
| `pre-push` | a cada push | `npm test && npm run build` |
| GitHub Actions | em todo PR e push na `main` | lint, typecheck, testes e build |
| Proteção da `main` | merge de PR | CI verde + aprovação do mantenedor |

Os testes consultam o DOM por papel acessível (`getByRole`) e por `data-testid`, com traduções reais carregadas de `public/locales/pt`. Veja [docs/conventions/web-testing.md](docs/conventions/web-testing.md).

## Contribuindo

Contribuições são bem-vindas, desde correção de horário até melhoria de design. Leia o **[CONTRIBUTING.md](CONTRIBUTING.md)**. Em resumo: crie uma branch, abra um Pull Request para a `main` e aguarde a revisão. Nenhuma mudança entra no ar sem aprovação.

## Documentação

| Documento | Conteúdo |
|---|---|
| [docs/product/prd.md](docs/product/prd.md) | PRD: problema, público, objetivos, escopo |
| [docs/architecture/hld.md](docs/architecture/hld.md) | HLD: arquitetura, fluxo de dados e decisões de stack |
| [docs/adr/](docs/adr/) | Decisões de arquitetura (ADRs) |
| [docs/conventions/](docs/conventions/) | Convenções de código e de testes |
| [docs/guia-de-conteudo.md](docs/guia-de-conteudo.md) | Como a paróquia atualiza o site |
| [docs/research/site-v1-inventario.md](docs/research/site-v1-inventario.md) | Levantamento do site atual da paróquia |

## Créditos das imagens

- **Fotos da Igreja Matriz e da vida paroquial:** acervo da Paróquia Santo Antônio de Pádua, publicado originalmente no site atual da paróquia.
- **Pintura do padroeiro:** Francisco de Zurbarán, *Aparição do Menino Jesus a Santo Antônio de Pádua*, c. 1627–1630, acervo do MASP (São Paulo). Domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Francisco_de_Zurbar%C3%A1n_-_Sto_Antonio_de_Padua.jpg).
- **Brasão diocesano:** Diocese de Palmas – Francisco Beltrão.

As imagens pertencem a seus titulares e **não** estão cobertas pela licença MIT do código.

## Licença

Código sob licença [MIT](LICENSE). Desenvolvido por [Samuel Molinari](https://www.linkedin.com/in/samuel-molinari/).
