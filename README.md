# Prospect PF — Landing Page

Landing page comercial do Prospect PF, sistema de captação automotiva desenvolvido pela SVS Soluções em Tecnologia.

## Executar localmente

Requisitos: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo servidor local.

## Validação e build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Integrações

O formulário está com resposta demonstrativa no navegador e deve ser conectado antes de receber leads em produção. Copie `.env.example` para `.env.local` e informe o endpoint. A camada de analytics também está preparada por variáveis, sem IDs fictícios.

## Deploy

Gere o build com `npm run build` e publique o artefato na infraestrutura compatível com Cloudflare Workers/Vinext ou pelo serviço Sites configurado no projeto.

## Conteúdo e compliance

A comunicação pública descreve benefícios comerciais, centralização, monitoramento e organização do fluxo. Não publique detalhes internos de automação, tratamento de bloqueios ou obtenção de dados. Revise a Política de Privacidade e os Termos de Uso com assessoria jurídica antes da operação comercial.
