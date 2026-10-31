# ADR 0004 — Design system sobre Chakra UI v3 com tokens semânticos

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

O visual precisa transmitir tradição e acolhimento, mas com acabamento moderno e editorial, e precisa ser fácil de manter por voluntários.

## Decisão

- Paletas próprias: `terracotta` (o telhado da Matriz e o brasão), `gold` (detalhes litúrgicos) e `umber` (o hábito franciscano).
- Tokens semânticos (`brand`, `accent`, `ink`, `paper`, `line`) usados nos componentes; nunca cor crua.
- Tipografia: Fraunces (serifada, títulos) + Manrope (texto).
- Breakpoints padrão do Chakra, mobile first (`base` → `sm` → `md` → `lg`).
- Tema claro fixo.

## Consequências

- Trocar a cor da marca é mudar um único lugar (`src/styles/theme.ts`).
- Modo escuro, se desejado no futuro, exige definir `_dark` para cada token semântico, em um novo ADR.
