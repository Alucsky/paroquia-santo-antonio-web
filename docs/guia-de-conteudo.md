# Guia de conteúdo

Este guia é para quem cuida do site na paróquia e **não precisa saber programar**. Tudo pode ser feito pelo navegador, direto no GitHub.

## Como editar um arquivo pelo GitHub

1. Abra o repositório no GitHub e navegue até o arquivo (os caminhos estão abaixo).
2. Clique no ícone de lápis (**Edit this file**).
3. Faça a mudança com cuidado: mantenha aspas, vírgulas e chaves no lugar.
4. Desça até **Commit changes**, escolha **Create a new branch… and start a pull request** e confirme.
5. Aguarde a aprovação. Depois do merge, o site atualiza sozinho em poucos minutos.

> Errou alguma vírgula? Sem problema: o CI acusa o erro no Pull Request e nada vai ao ar quebrado.

## Horários de missa

Arquivo: `src/content/celebrations.ts`

Cada celebração tem um `id`, o tipo de repetição e o horário:

```ts
{
  id: "health-mass",
  kind: "mass",
  recurrence: { type: "weekly", weekday: 3 },
  time: "19:00",
},
```

| Repetição | Exemplo | Significa |
|---|---|---|
| `{ type: "weekly", weekday: 0 }` | domingo | toda semana. `weekday`: 0 = domingo, 1 = segunda … 6 = sábado |
| `{ type: "monthly-day", day: 13 }` | dia 13 | todo mês, no mesmo dia |
| `{ type: "monthly-nth-weekday", nth: 1, weekday: 5 }` | 1ª sexta | todo mês, na enésima ocorrência do dia da semana |

- **Mudar só o horário:** altere `time` (formato 24h, `"HH:MM"`).
- **Nova celebração:** copie um bloco, dê um `id` novo e crie o título nos três arquivos `public/locales/{pt,en,es}/common.json`, dentro de `celebrations`:
  ```json
  "nova-celebracao": { "title": "Missa das Famílias" }
  ```

O bloco "Próximas celebrações" da página inicial é calculado sozinho a partir desta lista, no fuso de Brasília.

## Contatos, endereço e redes

Arquivo: `src/content/parish.ts`

Telefone, WhatsApp, WhatsApp da catequese, e-mail, Instagram, YouTube e endereço ficam no objeto `parish`. Os horários da secretaria e dos padres ficam em `officeHours`.

## Textos das páginas

Pasta: `public/locales/pt/` (português), com as traduções em `en/` e `es/`.

| Arquivo | Página |
|---|---|
| `common.json` | Menu, rodapé, títulos das celebrações, textos repetidos |
| `home.json` | Página inicial |
| `schedule.json` | Horários |
| `sacraments.json` | Sacramentos (inclusive as listas de documentos) |
| `saint.json` | Santo Antônio |
| `communities.json` | Comunidades (padroeiro e história de cada uma) |
| `ministries.json` | Pastorais |
| `parish.json` | A Paróquia |
| `contact.json` | Contato |

Altere só o texto **depois** dos dois-pontos, entre aspas. Nunca mude o nome da chave (o texto antes dos dois-pontos).

**Sempre que mudar um texto em português, atualize também o inglês e o espanhol.** Se não souber traduzir, abra o PR mesmo assim e avise na descrição: alguém ajuda.

## Documentos do batismo e do casamento

Arquivo: `public/locales/<idioma>/sacraments.json`, nas listas `baptism.documents` e `marriage.documents`. Cada linha é um item do checklist.

## Comunidades

1. Em `src/content/communities.ts`, adicione ou edite a comunidade (nome, tipo `community` ou `neighborhood`, ano de chegada do padroeiro e famílias).
2. Em `public/locales/<idioma>/communities.json`, dentro de `items`, use o mesmo `slug` com `patron` (nome do padroeiro) e `charism` (texto curto).

## Pastorais

1. Em `src/content/ministries.ts`, adicione o `slug` e o grupo (`liturgy`, `formation`, `family`, `charity` ou `movements`).
2. Em `public/locales/<idioma>/ministries.json`, dentro de `items`, crie `title` e `description` com o mesmo `slug`.

## Fotos

1. Coloque a imagem em `public/images/vida-paroquial/` (JPG, no mínimo 1024px de largura, de preferência na horizontal).
2. Em `src/content/gallery.ts`, troque ou adicione o item com `src`, `width` e `height` reais da foto.
3. Escreva a legenda em `public/locales/<idioma>/home.json`, em `gallery.items`.

O site converte e comprime as fotos sozinho. Prefira fotos com boa luz, e só publique fotos de pessoas que autorizaram o uso.

## Dúvidas

Abra uma *issue* no GitHub descrevendo o que precisa mudar, que alguém da equipe faz por você.
