# Convenções — testes

## Malha

Vitest + Testing Library (`react`, `jest-dom`, `user-event`) sobre `jsdom`. Config em `vitest.config.ts`, setup em `src/test/setup.ts`.

| Script | O que roda |
|---|---|
| `npm test` | `vitest run --coverage` (mínimo de 80% em linhas, statements, funções e branches) |
| `npm run test:watch` | modo observação, sem cobertura |

## Onde o spec mora

- **Co-locado** ao lado do arquivo: `community-card.tsx` → `community-card.spec.tsx`.
- **Páginas são a exceção:** `src/test/pages/<rota>.render.spec.tsx`. Um `.spec.tsx` dentro de `src/pages/` viraria rota.

## Render

Use `renderWithProviders` (`@/test/render-with-providers`). Ele monta o Chakra e uma instância **real** do i18next com as traduções de `public/locales/<locale>`, e configura o roteador simulado (`pathname`, `locale`).

```tsx
renderWithProviders(<CommunityDirectory />, { locale: "pt", pathname: "/comunidades" });
```

## Consultar o DOM

| # | Consulta | Quando |
|---|---|---|
| 1 | `getByRole` (com `name`) | sempre que o elemento tem papel: botão, link, heading, campo, navegação |
| 2 | `getByTestId` | quando não há papel ou ele não distingue (cards repetidos) |
| 3 | `getByLabelText` | campo que `getByRole` não alcança |
| ✗ | `getByText` e variantes | não usar. Ancore no papel ou no test id e asserte com `toHaveTextContent` |

`data-testid` em kebab-case, com o prefixo igual ao nome do componente: `community-card-name`, `document-checklist-baptism-progress`.

## Nome dos testes

Padrão `should (not) be able to …`, em inglês.

## Mocks

- Só fronteiras de plataforma: `next/router` (já mockado no setup via `@/test/router-state`).
- `next-i18next` aponta para `react-i18next` por alias no Vitest. Não mockar traduções.
- `IntersectionObserver`, `ResizeObserver` e `matchMedia` são stubs globais do setup.
- Datas: `vi.useFakeTimers({ toFake: ["Date"] })` + `vi.setSystemTime(...)`. O fuso dos testes é UTC, e o cálculo de celebrações converte para `America/Sao_Paulo`.

## Barreiras

| Onde | O que roda |
|---|---|
| `pre-commit` | `npm run lint` |
| `pre-push` | `npm test && npm run build` |
| GitHub Actions | lint, typecheck, testes, build |
