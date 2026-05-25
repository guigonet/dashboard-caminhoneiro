import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { C, saudeData, comportamentoData } from "../data/dados";
import { Card, CardTitle, CustomTooltip } from "../components/ui";

export default function SecaoSaude() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Doenças */}
        <Card>
          <CardTitle>Doenças Mais Relatadas (dos 47% que têm alguma)</CardTitle>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={saudeData} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: C.muted }}
                tickFormatter={(v) => `${v}%`} domain={[0, 50]} />
              <YAxis type="category" dataKey="doenca"
                tick={{ fontSize: 11, fill: C.ink }} width={95} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pct" name="%" fill={C.accent} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>
            31% tomam medicamento regular · 35% são fumantes
          </p>
        </Card>

        {/* Comportamento */}
        <Card>
          <CardTitle>Indicadores de Comportamento</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {comportamentoData.map((item, i) => {
              const cor = item.pct >= 70 ? C.green : item.pct >= 40 ? C.accent : C.blue;
              return (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 12.5, color: C.ink }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: cor }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 7, background: C.border, borderRadius: 3 }}>
                    <div style={{
                      height: 7, width: `${item.pct}%`,
                      background: cor, borderRadius: 3,
                      transition: "width 0.8s ease",
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Insights */}
      <div style={{ background: C.stripe, borderRadius: 16, padding: "20px 24px" }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: C.muted,
          textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16,
        }}>
          Insights de Saúde para Marketing
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { icon: "🪑", title: "Dor de coluna (40%)", desc: "Ergonomia e conforto na cabine são argumentos reais, não estéticos." },
            { icon: "❤️", title: "Hipertensão (28%)", desc: "Estresse financeiro e jornada pesada geram conexão emocional." },
            { icon: "🛡️", title: "Segurança (54% roubados)", desc: "Produtos e serviços de proteção têm apelo imediato e urgente." },
          ].map((item, i) => (
            <div key={i} style={{
              background: C.card, borderRadius: 12,
              padding: "14px 16px", border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
