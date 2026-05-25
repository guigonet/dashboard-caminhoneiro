import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, BarChart, Bar, ResponsiveContainer,
} from "recharts";
import { C, kpis, salarioCLTData, estadoData } from "../data/dados";
import { KpiCard, Card, CardTitle, CustomTooltip } from "../components/ui";

export default function SecaoVisaoGeral() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {kpis.map((k, i) => <KpiCard key={i} {...k} />)}
      </div>

      {/* Gráficos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card>
          <CardTitle>Evolução Salarial CLT (jan/23 – jun/24)</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={salarioCLTData}>
              <defs>
                <linearGradient id="salGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.blue} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="mes" tick={{ fontSize: 10, fill: C.muted }} />
              <YAxis domain={[2200, 2500]} tick={{ fontSize: 10, fill: C.muted }}
                tickFormatter={(v) => `R$${v}`} />
              <Tooltip content={<CustomTooltip />}
                formatter={(v) => [`R$ ${v}`, "Salário médio"]} />
              <Area type="monotone" dataKey="salario" stroke={C.blue}
                strokeWidth={2.5} fill="url(#salGrad)"
                dot={{ r: 3, fill: C.blue }} />
            </AreaChart>
          </ResponsiveContainer>
          <p style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>
            +6,3% no período · Acima da média geral do mercado
          </p>
        </Card>

        <Card>
          <CardTitle>Concentração por Estado (CLT admissões)</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={estadoData} layout="vertical" margin={{ left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: C.muted }}
                tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="uf"
                tick={{ fontSize: 11, fill: C.ink }} width={40} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pct" fill={C.accent} radius={[0, 4, 4, 0]} name="%" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Números de destaque */}
      <div style={{
        background: C.accentSoft, border: `1px solid #F0D0B8`,
        borderRadius: 16, padding: "20px 28px",
      }}>
        <div style={{ display: "flex", gap: 0, flexWrap: "wrap", justifyContent: "space-around" }}>
          {[
            ["98–99%", "Homens"],
            ["72%", "Ensino Médio completo"],
            ["47%", "Têm alguma doença"],
            ["91%", "Param em postos"],
            ["54%", "Vítima de roubo"],
            ["50%", "Cogitam sair da profissão"],
          ].map(([v, l], i) => (
            <div key={i} style={{ textAlign: "center", padding: "8px 16px" }}>
              <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 28, fontWeight: 700, color: C.accent,
              }}>{v}</div>
              <div style={{ fontSize: 12, color: C.ink, fontWeight: 500, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
