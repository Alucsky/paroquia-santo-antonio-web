# ADR 0002 — Sem backend: contato por links diretos

- **Status:** Aceito
- **Data:** 2026-10-31

## Contexto

O site anterior tinha formulário de contato com reCAPTCHA. Manter um backend (envio de e-mail, antispam, segredos) aumenta custo e manutenção para uma paróquia, e a secretaria já atende principalmente pelo WhatsApp.

## Opções

1. Formulário com serviço externo (Formspree, Resend).
2. Formulário com API própria.
3. Sem formulário: links `wa.me`, `tel:`, `mailto:`, Google Maps e Waze.

## Decisão

Opção 3. Os botões de WhatsApp levam mensagens pré-preenchidas por assunto (batismo, casamento, pastorais).

## Consequências

- Zero segredos e zero dependências de rede em tempo de execução.
- Atendimento continua no canal que a secretaria já usa.
- Se um formulário for necessário no futuro, ele exige um novo ADR.
