# Convenções — código

## Stack

Next.js 15 (Pages Router, SSG) · React 19 · TypeScript estrito · Chakra UI v3 · next-i18next · react-icons (`lu`) · Biome · Vitest.

## Pastas e nomes

- Arquivos em **kebab-case**, inclusive componentes (`community-card.tsx`) e hooks (`use-now.ts`). As exceções são os arquivos especiais do Next (`_app.tsx`, `_document.tsx`, `404.tsx`, `500.tsx`).
- Identificadores em **inglês**, por extenso, sem abreviação. Componentes em `PascalCase`, hooks `useX`.
- Código 100% em inglês: arquivos, pastas, identificadores, chaves de tradução, `data-testid` e nomes de imagens. Português só nos textos de `public/locales/pt/` e nos nomes próprios de `src/content/`.
- URLs públicas continuam em português. A página tem nome em inglês (`src/pages/schedule.tsx`), e `src/content/routes.json` liga a página ao caminho público (`/horarios`) com um *rewrite*. O caminho interno (`/schedule`) redireciona para o público. No código, use `routes.schedule` e nunca escreva o caminho à mão (veja o ADR 0007).
- Componentes com regra de página vão em `src/components/<contexto>/`. Os reutilizáveis vão em `src/components/shared/`.
- `src/components/ui/` é o kit gerado pelo Chakra: não editar à mão e não colocar `data-testid`.

## Imports

Sempre por alias, nunca por caminho relativo longo:

`@/pages/*` · `@/components/*` · `@/content/*` · `@/hooks/*` · `@/layouts/*` · `@/lib/*` · `@/styles/*` · `@/test/*` · `@/utils/*`

Não existe `@/*` genérico.

## Páginas

```tsx
export default function ExamplePage() {
  const { t } = useTranslation("example");
  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")} />
    </>
  );
}

export const getStaticProps = withTranslations(["example"]);
```

- Toda página tem `Seo` e `getStaticProps` via `withTranslations`.
- `withTranslations` vem de `@/lib/static-translations` (servidor). Utilitários de idioma usados no cliente vêm de `@/lib/i18n`.
- Nada de `getServerSideProps`, API routes, middleware ou `fetch` (veja o ADR 0002).

## Estilo

- **Nunca valor cru** de cor: use os tokens semânticos (`brand.*`, `accent.*`, `ink.*`, `paper.*`, `line.*`).
- Escalas que faltarem (spacing, sizes, radii) entram em `src/styles/theme.ts`; depois rode `npx chakra typegen src/styles/system.ts`.
- Não declarar `breakpoints` no tema. Mobile first: `base` primeiro, depois `sm`, `md`, `lg`.
- Animação respeita `prefers-reduced-motion` (já tratado em `global.css`).
- Animação de entrada por `Reveal`. Sem bibliotecas de animação.

## Texto

- Todo texto visível passa por `t(...)` e existe em `pt`, `en` e `es`.
- Nomes próprios (comunidades, famílias, endereços) ficam em `src/content/` e não são traduzidos.

## Acessibilidade

- Landmarks (`header`, `nav` com `aria-label`, `main`, `footer`) e skip link.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Ícones decorativos com `aria-hidden`. Botões só com ícone levam `aria-label`.
- Toda imagem informativa tem `alt` traduzido. Imagens decorativas usam `alt=""`.
- Alvos de toque com no mínimo 40px.

## Tipagem e lint

- Sem `any` (Biome com `noExplicitAny: "error"`).
- Sem comentários no código.
- `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` precisam passar.
