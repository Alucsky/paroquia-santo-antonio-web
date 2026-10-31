# PRD — Site da Paróquia Santo Antônio de Pádua (v2)

## Problema

O site anterior (plataforma multi-tenant de terceiros, servido dentro de um *frameset*) estava desatualizado: galerias paradas em 2017, poucas notícias recentes, páginas vazias, informações conflitantes (dois horários de secretaria, dois e-mails), layout antigo e experiência ruim no celular. O frameset também prejudicava o SEO, porque a URL não mudava e o conteúdo real ficava em outro domínio.

## Público

| Persona | Necessidade principal |
|---|---|
| Fiel da paróquia | Saber o horário da próxima missa, falar com a secretaria |
| Pais e padrinhos | Data do batismo e lista de documentos |
| Noivos | Prazos, horários e documentos do casamento |
| Visitante ou turista | Como chegar, horários, quem é o padroeiro |
| Liderança de pastoral | Divulgar o grupo e atrair participantes |
| Equipe da paróquia | Atualizar horários e textos sem depender de fornecedor |

A maioria acessa **pelo celular**.

## Objetivos

1. Responder "quando é a próxima missa?" em menos de 5 segundos após abrir o site.
2. Levar a pessoa ao WhatsApp da secretaria em no máximo um toque, a partir de qualquer página.
3. Permitir que a paróquia atualize conteúdo por Pull Request, sem servidor e sem painel pago.
4. Aparecer bem no Google para buscas como "missa Dois Vizinhos" e "paróquia Santo Antônio Dois Vizinhos".
5. Atender pt, en e es.

## Métricas

- Lighthouse mobile ≥ 90 em Performance, Acessibilidade, Boas práticas e SEO.
- Cliques em WhatsApp, telefone e "como chegar" (via analytics da Vercel, se ativado).
- Páginas indexadas no Search Console (3 idiomas × 8 rotas).

## Escopo

**Dentro**
- Início, Horários, Sacramentos, Santo Antônio, Comunidades, Pastorais, A Paróquia e Contato.
- Próximas celebrações calculadas no navegador a partir dos horários fixos.
- Checklists interativos de documentos (estado só na tela, não salvo).
- Busca e filtro de comunidades.
- i18n pt/en/es, SEO técnico, sitemap e robots.
- Conteúdo como código (TypeScript e JSON), com revisão por PR.

**Fora (por ora)**
- Notícias e galerias com histórico, agenda dinâmica e avisos semanais (hoje no Instagram).
- Formulário de contato com envio por servidor.
- Transmissão ao vivo e doações online.
- Painel administrativo ou CMS.

## Questões em aberto com a paróquia

1. E-mail oficial: `@outlook.com` (adotado) ou `@gmail.com`?
2. Horário da secretaria: foi adotada a versão da página "Secretaria Paroquial" (8h–11h45 / 13h15–17h30).
3. Coordenadores atuais das pastorais sem informação.
4. Fotos de capa das comunidades (as do site anterior estão quebradas).
