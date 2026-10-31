# ADR 0003 — i18n com next-i18next em pt, en e es

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

Dois Vizinhos recebe visitantes e há interesse em apresentar a paróquia e o padroeiro a quem não fala português.

## Decisão

`next-i18next` com o roteamento nativo do Next: `pt` (padrão, sem prefixo), `en` e `es`. Um namespace por página mais `common`. Português é a fonte da verdade, e os outros idiomas devem ter as mesmas chaves.

## Consequências

- Um teste de paridade impede chave faltando em algum idioma.
- O helper de servidor (`serverSideTranslations`) fica isolado em `src/lib/static-translations.ts` para não entrar no bundle do navegador.
- Nos testes, `next-i18next` aponta para `react-i18next` com uma instância real carregada de `public/locales/pt`, então as consultas casam com a copy de verdade, e não com a chave.
