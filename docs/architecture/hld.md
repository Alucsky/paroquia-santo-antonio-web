# HLD — Arquitetura do site

## Visão geral

```
            build (Vercel)                                   navegador
┌──────────────────────────────────────────┐        ┌─────────────────────────────┐
│ scripts/generate-seo-files.mjs           │        │ HTML pré-renderizado        │
│   └─ sitemap.xml, robots.txt             │        │ + hidratação React          │
│ next build                               │ ─────► │   ├─ próximas celebrações   │
│   ├─ src/content/*.ts   (dados)          │  CDN   │   │   (Intl, fuso SP)        │
│   ├─ public/locales/*   (textos)         │        │   ├─ busca de comunidades    │
│   └─ getStaticProps × {pt,en,es}         │        │   ├─ checklists              │
│       → 8 rotas × 3 idiomas (SSG)        │        │   └─ animações de entrada    │
└──────────────────────────────────────────┘        └─────────────────────────────┘
                                                            │
                                     links diretos ─────────┴──► WhatsApp · tel: · mailto: · Maps · Waze
```

Não existe backend. Toda informação vem de arquivos versionados no repositório e vira HTML estático no build. O que é dinâmico no navegador (data atual, filtros, checklist) não depende de rede.

## Componentes

| Camada | Pasta | Responsabilidade |
|---|---|---|
| Rotas | `src/pages/` | Uma página por arquivo, cada uma com `getStaticProps = withTranslations([...])` |
| Layout | `src/layouts/site-layout.tsx` | Skip link, header fixo, `main`, rodapé, barra de atalhos no mobile |
| Seções | `src/components/<contexto>/` | Blocos visuais por página (`home`, `saint`, `schedule`, `sacraments`, `communities`) |
| Compartilhados | `src/components/shared/` | `Seo`, `PageHero`, `SectionHeading`, `Reveal`, `InfoCard`, `Marquee`, `VisitSection` |
| Kit base | `src/components/ui/` | `Provider` e color mode do Chakra (gerados, fora do lint) |
| Conteúdo | `src/content/` | Dados tipados: paróquia, celebrações, comunidades, pastorais, galeria, navegação |
| Textos | `public/locales/{pt,en,es}/` | Um namespace por página + `common` |
| Regras | `src/utils/` | Recorrência das celebrações, links de contato, normalização de busca |
| Design system | `src/styles/` | Paletas `terracotta`, `gold` e `umber`, tokens semânticos (`brand`, `accent`, `ink`, `paper`, `line`), recipe de botão, keyframes |

## Fluxo de i18n

1. `getStaticProps` chama `serverSideTranslations(locale, ["common", <página>])` (em `src/lib/static-translations.ts`, que só roda no servidor).
2. `appWithTranslation` injeta a instância no React.
3. Componentes usam `useTranslation("<namespace>")`.
4. O roteamento por idioma é o nativo do Next (`/`, `/en`, `/es`).

## Próximas celebrações

`getUpcomingCelebrations(now, celebrations)` percorre até 45 dias a partir da data atual **no fuso `America/Sao_Paulo`**, aplica as recorrências (`weekly`, `monthly-day`, `monthly-nth-weekday`) e devolve as próximas ocorrências em ordem. O componente só calcula depois de montar no cliente (`useNow`), o que evita divergência de hidratação.

## Decisões

Ver [ADRs](../adr/).

## Riscos

| Risco | Mitigação |
|---|---|
| Horário desatualizado no site | Guia de conteúdo + aviso de que feriados alteram horários + link para o Instagram |
| Tradução esquecida | Teste de paridade de chaves entre idiomas |
| Mudança quebrar o layout no celular | Revisão obrigatória por PR + CI + conferência local da branch |
| Fotos antigas em baixa resolução | Hero com foto de 1400px; galeria em grid com recorte controlado |
