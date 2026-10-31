# Como contribuir

Obrigado por querer ajudar o site da Paróquia Santo Antônio de Pádua!

## Fluxo

1. Faça um fork (ou, se tiver acesso, crie uma branch a partir da `main`).
2. Nomeie a branch pelo tipo da mudança: `content/horarios-natal`, `feat/pagina-avisos`, `fix/menu-mobile`.
3. Faça a mudança e rode localmente:
   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```
4. Abra um Pull Request para a `main` preenchendo o template.
5. O CI precisa passar e o mantenedor precisa aprovar. **Ninguém faz merge direto na `main`.**

## Commits

Mensagens em inglês, no formato [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(schedule): add Christmas mass times
fix(header): close mobile menu on navigation
content(communities): update Vila Canarinho families
```

## Regras rápidas

- **Sem comentários no código.** Nomes claros fazem esse papel.
- **Sem `any`.** Use `unknown` e estreite o tipo.
- **Sem valor cru de cor ou espaçamento.** Use os tokens do tema (`brand.solid`, `ink.muted`, `paper.subtle`…).
- **Texto visível sempre por tradução** (`t("...")`), nunca escrito direto no componente, e sempre nos três idiomas.
- **Mobile first:** confira toda mudança visual a 375px de largura.
- **Testes:** consulte o DOM por `getByRole` ou `getByTestId`, nunca por texto solto.

Detalhes em [docs/conventions/](docs/conventions/).

## Só quer mudar um horário ou um texto?

Siga o [guia de conteúdo](docs/guia-de-conteudo.md). Dá para editar direto pelo GitHub, no navegador, sem instalar nada.
