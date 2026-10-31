# ADR 0001 — Next.js Pages Router com geração estática

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

O site é institucional, com conteúdo que muda pouco, e precisa ser rápido no celular, barato de hospedar e fácil de manter. A estrutura deve seguir a base já usada pela equipe (Next.js com Pages Router, Chakra UI v3 e next-i18next).

## Opções

1. Next.js App Router com Server Components.
2. Next.js Pages Router com `getStaticProps` (SSG).
3. Gerador estático puro (Astro, Eleventy).

## Decisão

Opção 2. Todas as páginas usam `getStaticProps` e viram HTML no build. Sem `getServerSideProps`, API routes ou middleware.

## Consequências

- Hospedagem em CDN, sem custo de servidor e com tempo de resposta mínimo.
- Mudança de conteúdo exige novo build, que a Vercel dispara a cada merge.
- Mesmo padrão de pastas e de i18n dos outros projetos da equipe.
