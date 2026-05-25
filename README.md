# Dashboard — Perfil do Caminhoneiro Brasileiro

Dashboard de marketing com dados consolidados das pesquisas CNTA 2024 e ANTT 2024.

## Instalação

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Estrutura

```
src/
├── data/dados.js          ← Todos os dados e paleta
├── components/ui.jsx      ← Componentes reutilizáveis
└── sections/
    ├── VisaoGeral.jsx
    ├── Demografico.jsx
    ├── Profissao.jsx
    ├── Frota.jsx
    ├── Saude.jsx
    └── Personas.jsx
```

## Como expandir com o Claude Code

```bash
npm install -g @anthropic/claude-code
claude
```

Sugestões: aba Roadline, filtro por região, potencial de mercado por UF.

## Fontes

- CNTA: cnta.org.br/dados-estatisticas
- ANTT: gov.br/antt/pt-br/assuntos/cargas/dadostrc
