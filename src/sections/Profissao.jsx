import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Cell, ResponsiveContainer,
} from "recharts";
import { C, rendaData, freteData, tempoProfissaoData } from "../data/dados";
import { Card, CardTitle, CustomTooltip, BarraHorizontal, InfoBox } from "../components/ui";

export default function SecaoProfissao() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Mini KPIs de jornada */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {[
          { v: "17 anos", l: "Tempo médio na profissão", bg: C.blueSoft, cor: C.blue },
          { v: "24 dias", l: "Trabalhados por mês", bg: C.accentSoft, cor: C.accent },
          { v: "12h/dia", l: "Horas em média", bg: C.blueSoft, cor: C.blue },
          { v: "R$39,50", l: "Por hora trabalhada", bg: C.accentSoft, cor: C.accent },
        ].map((item, i) => (
          <div key={i} style={{
            background: item.bg, borderRadius: 14,
            padding: "18px 20px", border: `1px solid ${C.border}`,
          }}>
            <div style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, color: item.cor,
            }}>{item.v}</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{item.l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
        {/* Renda por faixa */}
        <Card>
          <CardTitle>Renda Mensal Líquida — Autônomos (média R$ 10.100)</CardTitle>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={rendaData}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="faixa" tick={{ fontSize: 9.5, fill: C.muted }}
                angle={-30} textAnchor="end" height={46} />
              <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: C.muted }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pct" name="%" radius={[4, 4, 0, 0]}>
                {rendaData.map((entry, i) => (
                  <Cell key={i} fill={
                    i === 9 ? "#94A3B8" : i >= 5 ? C.green : C.accent
                  } />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Canais de frete */}
        <Card>
          <CardTitle>Canais de Captação de Frete</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
            {freteData.map((item, i) => (
              <BarraHorizontal
                key={i}
                label={item.canal}
                pct={item.pct}
                cor={`linear-gradient(90deg, ${C.accent}, ${C.blue})`}
                height={10}
              />
            ))}
          </div>
          <InfoBox
            text="📱 60% usam apps de frete — smartphone é canal estratégico"
            cor={C.green}
            bg={C.greenSoft}
          />
        </Card>
      </div>

      {/* Tempo de profissão */}
      <Card>
        <CardTitle>Tempo de Profissão (Autônomos) — média 17 anos</CardTitle>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {tempoProfissaoData.map((item, i) => (
            <div key={i} style={{
              flex: 1, minWidth: 120, textAlign: "center",
              padding: "16px 12px", background: C.stripe, borderRadius: 12,
            }}>
              <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 32, fontWeight: 700, color: item.cor,
              }}>{item.pct}%</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
