// ─── PALETA ─────────────────────────────────────────────────────────────────
export const C = {
  bg: "#F8F7F4",
  card: "#FFFFFF",
  ink: "#1A1A18",
  muted: "#7A7A72",
  accent: "#D4500A",
  accentSoft: "#FDF0E8",
  blue: "#1B4F8A",
  blueSoft: "#EBF3FB",
  green: "#1A6E47",
  greenSoft: "#E8F5EE",
  border: "#EBEBEB",
  stripe: "#F3F3F0",
};

// ─── KPIs GERAIS ─────────────────────────────────────────────────────────────
export const kpis = [
  { label: "Idade média (autônomo)", value: "46 anos", sub: "40 anos CLT", icon: "👷" },
  { label: "Renda líquida (autônomo)", value: "R$ 10.100", sub: "R$ 2.436 CLT/mês", icon: "💰" },
  { label: "Tempo na profissão", value: "17 anos", sub: "média autônomos", icon: "🛣️" },
  { label: "Dias trabalhados/mês", value: "24 dias", sub: "12h por dia", icon: "📅" },
  { label: "Caminhão próprio quitado", value: "64%", sub: "36% financiado", icon: "🚚" },
  { label: "Possuem rastreador", value: "85%", sub: "83% têm seguro", icon: "📡" },
];

// ─── DEMOGRÁFICO ─────────────────────────────────────────────────────────────
export const idadeData = [
  { faixa: "Até 25", autonomo: 2, clt: 8 },
  { faixa: "26–35", autonomo: 17, clt: 28 },
  { faixa: "36–45", autonomo: 30, clt: 30 },
  { faixa: "46–55", autonomo: 28, clt: 20 },
  { faixa: "56–65", autonomo: 19, clt: 11 },
  { faixa: "66+", autonomo: 4, clt: 3 },
];

export const estadoCivilData = [
  { label: "Casado(a)", pct: 49, cor: "#1B4F8A" },
  { label: "Solteiro(a)", pct: 26, cor: "#D4500A" },
  { label: "União estável", pct: 12, cor: "#1A6E47" },
  { label: "Divorciado(a)", pct: 9, cor: "#8B5CF6" },
  { label: "Viúvo(a)", pct: 4, cor: "#94A3B8" },
];

export const escolaridadeData = [
  { label: "Ensino Médio Completo", pct: 72, cor: "#1B4F8A" },
  { label: "Ensino Fundamental", pct: 27, cor: "#D4500A" },
  { label: "Superior Completo", pct: 0.9, cor: "#1A6E47" },
  { label: "Analfabeto", pct: 0.2, cor: "#94A3B8" },
];

export const estadoData = [
  { uf: "SP", pct: 26 },
  { uf: "MG", pct: 13 },
  { uf: "SC", pct: 12 },
  { uf: "PR", pct: 11 },
  { uf: "RS", pct: 7.8 },
  { uf: "MT", pct: 4.2 },
  { uf: "GO", pct: 4.3 },
  { uf: "RJ", pct: 3.5 },
  { uf: "BA", pct: 2.9 },
  { uf: "Outros", pct: 11.3 },
];

// ─── PROFISSÃO & RENDA ───────────────────────────────────────────────────────
export const rendaData = [
  { faixa: "Até 2 SM", pct: 3 },
  { faixa: "2–4 SM", pct: 10 },
  { faixa: "4–6 SM", pct: 21 },
  { faixa: "6–8 SM", pct: 17 },
  { faixa: "8–10 SM", pct: 12 },
  { faixa: "10–12 SM", pct: 5 },
  { faixa: "12–14 SM", pct: 5 },
  { faixa: "14–16 SM", pct: 4 },
  { faixa: "16+ SM", pct: 1 },
  { faixa: "Não inf.", pct: 22 },
];

export const freteData = [
  { canal: "Direto c/ embarcador", pct: 66 },
  { canal: "Agenciador", pct: 60 },
  { canal: "App de frete", pct: 60 },
  { canal: "Indicação", pct: 45 },
];

export const tempoProfissaoData = [
  { label: "1–10 anos", pct: 32, cor: "#D4500A" },
  { label: "11–20 anos", pct: 38, cor: "#1B4F8A" },
  { label: "21–30 anos", pct: 21, cor: "#1A6E47" },
  { label: "30+ anos", pct: 9, cor: "#8B5CF6" },
];

export const salarioCLTData = [
  { mes: "Jan/23", salario: 2286 },
  { mes: "Mar/23", salario: 2288 },
  { mes: "Mai/23", salario: 2290 },
  { mes: "Jul/23", salario: 2341 },
  { mes: "Set/23", salario: 2350 },
  { mes: "Nov/23", salario: 2371 },
  { mes: "Jan/24", salario: 2435 },
  { mes: "Mar/24", salario: 2417 },
  { mes: "Mai/24", salario: 2440 },
  { mes: "Jun/24", salario: 2453 },
];

// ─── FROTA ───────────────────────────────────────────────────────────────────
export const froteStatusData = [
  { name: "Quitado", value: 64, fill: "#1A6E47" },
  { name: "Financiado", value: 36, fill: "#D4500A" },
];

export const idadeVeicData = [
  { faixa: "1–5 anos", pct: 31 },
  { faixa: "6–10 anos", pct: 28 },
  { faixa: "11–15 anos", pct: 21 },
  { faixa: "16–20 anos", pct: 9 },
  { faixa: "21+ anos", pct: 11 },
];

export const tipoCaminhaoData = [
  { tipo: "Cavalo Trucado", pct: 25, fill: "#1B4F8A" },
  { tipo: "Carreta 2/3 eixos", pct: 20, fill: "#D4500A" },
  { tipo: "Truck", pct: 15, fill: "#1A6E47" },
  { tipo: "Toco", pct: 14, fill: "#8B5CF6" },
  { tipo: "3/4", pct: 14, fill: "#F59E0B" },
  { tipo: "Outros", pct: 12, fill: "#94A3B8" },
];

export const implementoData = [
  { label: "Graneleiro", pct: 39 },
  { label: "Grade baixa", pct: 25 },
  { label: "Baú", pct: 15 },
  { label: "Frigorífico", pct: 11 },
  { label: "Container", pct: 5 },
  { label: "Tanque", pct: 3 },
];

// ─── SAÚDE & COMPORTAMENTO ───────────────────────────────────────────────────
export const saudeData = [
  { doenca: "Coluna", pct: 40 },
  { doenca: "Hipertensão", pct: 28 },
  { doenca: "Obesidade", pct: 23 },
  { doenca: "Depressão", pct: 21 },
  { doenca: "Diabetes", pct: 9 },
  { doenca: "Cardiovascular", pct: 8 },
];

export const comportamentoData = [
  { label: "Para em postos", pct: 91 },
  { label: "Para em PPD", pct: 48 },
  { label: "Para em restaurante", pct: 41 },
  { label: "3+ refeições/dia", pct: 70 },
  { label: "Vítima de roubo", pct: 54 },
  { label: "Usa rebite (histórico)", pct: 25 },
  { label: "Fumantes", pct: 35 },
  { label: "Têm alguma doença", pct: 47 },
];

// ─── PERSONAS ────────────────────────────────────────────────────────────────
export const personas = [
  {
    nome: "O Dono da Estrada",
    tipo: "Autônomo • Caminhão quitado",
    cor: "#1B4F8A",
    softCor: "#EBF3FB",
    idade: "46–55 anos",
    renda: "R$ 8k–14k/mês",
    veiculo: "Cavalo Trucado, 6–15 anos",
    dor: "Diesel, manutenção, roubos",
    canal: "WhatsApp, YouTube",
    argumento: "Durabilidade e economia operacional",
    icon: "🏆",
  },
  {
    nome: "O Profissional CLT",
    tipo: "Motorista contratado • Frota empresa",
    cor: "#D4500A",
    softCor: "#FDF0E8",
    idade: "30–45 anos",
    renda: "R$ 2,3k–3,5k/mês",
    veiculo: "Frota da empresa (até 5 anos)",
    dor: "Jornada excessiva, estabilidade",
    canal: "Instagram, TikTok, rádio",
    argumento: "Conforto, acessórios, parcelamento",
    icon: "⚡",
  },
  {
    nome: "O Novo na Estrada",
    tipo: "Autônomo jovem • Financiado",
    cor: "#1A6E47",
    softCor: "#E8F5EE",
    idade: "26–35 anos",
    renda: "R$ 4k–8k/mês",
    veiculo: "Financiado, 1–5 anos",
    dor: "Parcela do caminhão, frete escasso",
    canal: "YouTube, TikTok, apps de frete",
    argumento: "Preço justo, parcelas, compra online",
    icon: "🚀",
  },
];

export const SECTIONS = [
  "Visão Geral",
  "Demográfico",
  "Profissão & Renda",
  "Frota",
  "Saúde & Comportamento",
  "Personas",
];
