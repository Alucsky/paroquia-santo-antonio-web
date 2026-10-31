# ADR 0006 — Deploy somente da `main`

- **Status:** Aceito
- **Data:** 2026-10-31
- **Substitui em parte:** [ADR 0005](0005-hospedagem-vercel-e-protecao-da-main.md), no item "cada PR ganha um preview"

## Contexto

O repositório é público e aceita PRs de forks. Um preview por branch ou PR consome build e banda na Vercel sem necessidade enquanto o projeto tem um único mantenedor.

## Decisão

- `vercel.json` desliga deploys automáticos para todas as branches (`"**": false`) e liga só para a `main` (`"main": true`). Quando uma branch casa com mais de uma regra, vale a que permite o deploy.
- A revisão de PRs acontece pelo CI do GitHub e rodando o site localmente (`npm run build && npm start`).
- A proteção da `main` do ADR 0005 continua igual.

## Consequências

- Só a `main` gera deploy, que é a produção.
- PRs não têm mais link navegável na Vercel. Para revisar visualmente, é preciso rodar a branch localmente.
- Se voltar a ser útil, basta trocar `"**": false` por `true` em um novo ADR.
