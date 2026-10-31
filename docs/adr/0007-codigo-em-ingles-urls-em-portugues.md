# ADR 0007 — Código em inglês, URLs em português

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

Parte do código usava nomes em português: arquivos de página (`horarios.tsx`), pastas e arquivos de imagem (`igreja/fachada-banner-1.jpg`), âncoras e caminhos escritos à mão. Isso misturava idiomas no código e dificultava contribuições de quem não fala português. Ao mesmo tempo, o público do site é brasileiro, e as URLs que ele compartilha devem continuar em português.

## Decisão

- Todo o código fica em inglês: arquivos, pastas, identificadores, chaves de tradução, `data-testid` e nomes de imagens.
- Português fica só nos textos (`public/locales/pt/`) e nos nomes próprios (`src/content/`).
- As páginas têm nome em inglês (`src/pages/schedule.tsx`). `src/content/routes.json` liga cada página ao caminho público em português (`/horarios`).
- O `next.config.ts` lê esse arquivo e:
  - serve a página no caminho público com um *rewrite*;
  - redireciona o caminho interno (`/schedule`) para o público com redirect permanente, para não haver conteúdo duplicado.
- O sitemap é gerado a partir do mesmo arquivo.
- No código, links usam `routes.<chave>`, e as âncoras dos sacramentos usam `sacramentAnchors` (`src/content/routes.ts`).

## Consequências

- As URLs públicas não mudam: links antigos e SEO continuam valendo.
- Uma página nova precisa de uma entrada em `routes.json`. O teste `src/test/routing.spec.ts` garante que toda entrada aponta para uma página que existe.
- Os componentes obtêm o caminho público com `usePublicPath()`, que traduz `router.pathname` (o nome interno da página) pelo `routes.json`. Assim o HTML gerado no build já sai com canonical, hreflang e links certos.
