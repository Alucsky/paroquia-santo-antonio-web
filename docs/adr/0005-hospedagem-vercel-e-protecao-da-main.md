# ADR 0005 — Hospedagem na Vercel e proteção da `main`

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

O repositório é público e aberto a contribuições da paróquia e de voluntários. Nada pode ir ao ar sem revisão.

## Decisão

- Deploy contínuo na Vercel: `main` = produção; cada PR ganha um preview.
- `main` protegida: merge só por Pull Request, com CI verde (lint, typecheck, testes, build) e aprovação do code owner (`.github/CODEOWNERS`).
- Previews não são indexados (`robots.txt` com `Disallow` fora de produção).

## Consequências

- Toda mudança passa por revisão e por um preview navegável antes de ir ao ar.
- O mantenedor é o único aprovador até que a paróquia indique outra pessoa.
