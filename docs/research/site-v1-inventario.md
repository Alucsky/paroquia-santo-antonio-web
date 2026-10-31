# Inventário de Conteúdo — Site v1 da Paróquia Santo Antônio de Pádua

> Levantamento feito em 31/10/2026 via Playwright (Chromium) para servir de base ao PRD do v2.
> Os dados brutos do levantamento (JSON por página, screenshots e acervo de fotos) ficaram fora do repositório. As imagens selecionadas estão em `public/images/`.

## 1. Dados técnicos do v1

| Item | Valor |
|---|---|
| Domínio público | `www.paroquiasantoantoniodv.com.br` (só um `<frameset>` apontando pro site real) |
| Site real | `https://paroquias.marvirtual.com.br/santoantoniodv` |
| Plataforma | Multi-tenant "Grupo Mar Virtual" — PHP + Bootstrap 3, charset ISO-8859-1 (gera mojibake: `SÃ¡bado`) |
| Páginas rastreadas | 433 (0 erros HTTP) |
| Imagens referenciadas | ~9.700 (8.528 de galerias, 1.144 de notícias, 22 de comunidades, 2 banners, 4 logos) |
| Problemas notáveis | 1.255 imagens referenciadas dão 404 no próprio servidor (quebradas no v1); Frameset (SEO ruim, URL não muda), sem HTTPS consistente, compartilhamento via Google+ (morto), datas `1899-12-30` em 2 itens, embed de vídeo quebrado (URL de Shorts dentro de `/embed/`), páginas vazias ("Em breve…", "Nenhum registro") |

## 2. Identidade / Contato

- **Nome:** Paróquia Santo Antônio de Pádua — Dois Vizinhos/PR
- **Diocese:** Palmas e Francisco Beltrão (Regional Sul II – CNBB)
- **Endereço:** Rua Prudente de Morais, 628 – Centro – Cx. Postal 38 – CEP 85660-000 – Dois Vizinhos/PR
- **Fone:** (46) 3536-1108
- **WhatsApp secretaria:** (46) 98814-8964
- **WhatsApp catequese:** (46) 99903-5168
- **E-mail:** ⚠️ divergente — rodapé `santoantoniodoisvizinhos@gmail.com`, página Contato `santoantoniodoisvizinhos@outlook.com` (confirmar com a paróquia)
- **Instagram:** [@paroquiasantoantoniodv](https://www.instagram.com/paroquiasantoantoniodv)
- **YouTube:** [canal](https://www.youtube.com/channel/UC-Whqe7Y0n4gli3GKBmQqeA)
- **Mapa:** embed Google Maps, coord. aprox. `-25.7437, -53.0579`
- **Visual v1:** cinza-ardósia (`#454856` aprox.) + off-white, logo traço preto da igreja com Santo Antônio, brasão diocesano vermelho/dourado, Roboto.

## 3. Mapa de navegação (v1)

```
Topo:  Atendimento · Horários · Avisos            [brasão]
Menu:  Home
       A Paróquia ▸ Padroeiro · História · Secretaria Paroquial · Comunidades e Bairros · Downloads
       Pastorais e Movimentos ▸ 20 itens (ver §6)
       Documentos ▸ Matrimônio · Batizado
       Imprensa ▸ Notícias · Fotos · Vídeos
       Agenda (PDF)  ·  Contato
Home:  carrossel (2 banners 1400×500) · 6 últimas notícias · sidebar de links externos
Rodapé: logo, fone, endereço, e-mail
```

**Links externos da sidebar:** Bíblia Online (bibliacatolica.com.br), Cúria Diocesana (curiadiocesana.com.br), Canção Nova, Portal da Música Católica, Vídeos (YouTube), Liturgia Diária (CNBB), Santo do Dia (Canção Nova), RCC Brasil, Missa ao Vivo (redireciona p/ Horários — não há stream).

## 4. Páginas institucionais (conteúdo)

### Horários de Missa (Igreja Matriz)
- **Quarta:** Missa da Saúde, 19h
- **Domingo:** 8h30 e 19h
- **1ª sexta do mês:** Missa do Sagrado Coração de Jesus, 15h
- **Todo dia 13:** Adoração ao Santíssimo o dia todo, a partir de 8h30

### Atendimento / Secretaria  ⚠️ duas versões conflitantes
| | Página "Atendimento" | Página "Secretaria Paroquial" |
|---|---|---|
| Secretaria (seg–sex) | 7h30–12h / 13h30–17h30 | 8h–11h45 / 13h15–17h30 |
| Padres (quarta) | 8h–11h / 14h–17h | 9h–11h / 14h–17h |

### Batizado
- Todo **4º sábado do mês, 9h**
- Docs: registro de nascimento; livro de encontros de preparação; dízimo atualizado de pais e padrinhos; comprovante de participação dos padrinhos; certidão de casamento religioso de pais e/ou padrinhos.
- Pais/padrinhos de outra paróquia: autorização do padre.

### Matrimônio
- Celebrações: **sábado 17h e 20h**. Legitimação: **quarta 19h**. Outros horários: falar com os padres.
- Docs: certidão de batismo e crisma; dízimo atualizado dos noivos; catequese matrimonial; declaração do civil; RG/CPF dos noivos; comprovante de residência dos noivos; nome de 2 casais de testemunhas + comprovante de residência; RG/CPF dos padrinhos; comprovante de casamento religioso dos padrinhos.
- Dar os nomes com **60 dias de antecedência**.

### Padroeiro / História
- Mesmo texto nas duas páginas (duplicado). Santo Antônio (Lisboa → Pádua), devotos chegam em 1956, capela elevada a paróquia em **1959** (Praça Ademar da Costa Machado, hoje Praça Ari Jaime Muller). Texto menciona "53 anos" (desatualizado).
- Fonte: livro *História dos 40 anos da Paróquia Santo Antônio de Pádua*, Valdir Luiz Pagnoncelli.
- v2: separar Padroeiro (vida do santo) de História (linha do tempo da paróquia) e calcular idade dinamicamente.

### Avisos — vazio ("Em breve…")
### Downloads — vazio
### Agenda — só link pra PDF (`assets/agendapdfs/agenda.pdf`)
### Vídeos — 3 embeds YouTube: "RAJOV começa hoje" (`knH6zv_duwU`), "Trezena de Santo Antônio" (Short `KBWvv_Ha3Qg`, embed quebrado), "Trezena 2025" (`cdA_j2onfUM`)
### Contato — form (nome, cidade, telefone, e-mail, mensagem + reCAPTCHA v2) + mapa

## 5. Comunidades e Bairros (22)

Cada uma tem foto de capa + 3 campos: ano de chegada do padroeiro, famílias que acolheram, carisma do padroeiro. Abas por comunidade (notícias, galerias, agenda, downloads) estão todas vazias.

Comunidades: São José do Canoas · Santa Terezinha · São Judas Tadeu (Jacutinga) · Linha Benetti · Linha Ibiaçá · São Luiz · Volta Grande · Flor da Serra (sem texto) · São Cristóvão · Santa Cruz · São Brás · São Francisco do Bandeira · São Miguel do Canoas · Santa Luzia do Bandeira · Piracema · São Pedro do Bandeira · Vila Canarinho
Bairros: São Francisco de Assis · Margarida Galvan · da Luz · Jardim da Colina · Vitória


## 6. Pastorais e Movimentos (20 no menu; 21 links)

| Com texto | Sem conteúdo (só cabeçalho "Coordenação e Colaboradores") |
|---|---|
| Adolescentes e Jovens (RAJOV – Giovani Lima; Opção de Vida – Adenilson M. da Silva) | Capelinha |
| Apostolado da Oração | Coroinhas |
| Cantos | Grupos de Família |
| Catequese | Legião de Maria |
| Conselho de Pastoral | MAC's |
| Liturgia | Movimento Lareirista |
| Movimento Cursilhista | |
| Pastoral Carcerária | |
| Pastoral da Criança | |
| Pastoral do Dízimo | |
| Pastoral do Idoso | |
| Pastoral Familiar | |
| Renovação Carismática | |
| Retiro/Encontro de Adolescentes e Jovens | |

Textos longos são genéricos (copiados de documentos da CNBB). v2: resumir + destacar coordenação, dia/horário de encontro e contato.

## 7. Notícias (88)

- Período: **2020-03 → 2026-03** (só 3 em 2026, 2 em 2023). 10 sem corpo, 1.050 fotos internas.
- Campos: título, subtítulo, data, corpo, fonte (Pascom etc.), capa (`dest_ID.jpg`), fotos (`p_ID.jpg`, 600px).
- Mais recentes: *Ministros em Estudos*, *Pascom*, *Trezena de Santo Antônio 2026* (07/03/2026).

## 8. Galerias de Fotos (107)

- Período: **2012 → 2017** (nenhuma depois disso). 6 vazias. 8.299 fotos, máx. 600px (originais `g_*.jpg` não existem mais no servidor).
- Temas recorrentes: Trezena/Festa do Padroeiro, Domingo de Ramos, Cursilho, Curso Bíblico, Formação Litúrgica, Catequese.

## 9. Imagens selecionadas (`public/images/`, 23 arquivos, 6.5 MB)

| Pasta | Arquivos | Obs |
|---|---|---|
| `marca/` | logo, logo-alt, logo-alt2, brasao-diocese | PNG ~385px — **vetorizar** |
| `igreja/` | fachada-banner-1/2 (1400×500), interior-nave, interior-altar, altar-celebracao (1024px), fachada-festa, fachada-grupo, imagens-santos | Fachada = melhor hero |
| `vida-paroquial/` | batismo, crisma, coral, coral-altar, ministros, padres-festa-padroeiro, infancia-missionaria, nossa-senhora, advento (1024px), festa-comunidade, voluntarios-festa, missa-lotada (600px) | Seções de sacramentos, pastorais, comunidade |

Acervo completo (~8 mil fotos de 600px) não foi incorporado. Capas das 22 comunidades dão 404 no servidor.

Lacunas → produzir fotos novas ou ilustrações (identificar como "imagem ilustrativa" quando não forem fotos reais): hero em alta resolução, interior da Matriz, Santo Antônio (arte), ícones de sacramentos, fundos de seção.

## 10. Inconsistências a confirmar com a paróquia

1. E-mail oficial (gmail vs outlook).
2. Horário da secretaria e dos padres (duas versões).
3. Idade da paróquia (texto diz 53 anos; fundada 1959 → 67 anos em 2026).
4. Existe transmissão ao vivo? (link "Missa ao vivo" cai em Horários.)
5. Coordenadores atuais das pastorais vazias.
6. Agenda: manter PDF ou virar calendário no site?

## 11. Ideias pro v2 (pré-PRD)

- Next.js App Router + i18n (pt-BR padrão; en/es/it?) — SSG/ISR, SEO real, sem frameset.
- Home: hero da Matriz, card "Próximas missas" (calculado a partir dos horários), avisos, últimas notícias, CTA sacramentos, Instagram.
- Sacramentos como seção própria (Batismo, Matrimônio, + Crisma/Eucaristia/Confissão se a paróquia passar dados) com checklist de documentos.
- Comunidades com mapa e filtro (rural × bairro).
- Galerias/notícias migradas como arquivo histórico.
- Contato: WhatsApp direto + form; rodapé com redes.
- Conteúdo em CMS ou MDX/JSON pra paróquia conseguir atualizar.
