import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { C, froteStatusData, idadeVeicData, tipoCaminhaoData, implementoData } from "../data/dados";
import { Card, CardTitle, CustomTooltip } from "../components/ui";

export default function SecaoFrota() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Mini KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { v: "11 anos", l: "Idade média do veículo", cor: C.accent, bg: C.accentSoft },
          { v: "R$ 215 mil", l: "Valor médio para nova troca", cor: C.blue, bg: C.blueSoft },
          { v: "89%", l: "Diesel: impacto alto ou muito alto", cor: C.green, bg: C.greenSoft },
        ].map((item, i) => (
          <div key={i} style={{
            background: item.bg, borderRadius: 14,
            padding: "20px 22px", border: `1px solid ${C.border}`,
          }}>
            <div style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 28, fontWeight: 700, color: item.cor,
            }}>{item.v}</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{item.l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Situação do veículo */}
        <Card>
          <CardTitle>Situação do Veículo</CardTitle>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32 }}>
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={froteStatusData} cx="50%" cy="50%"
                  innerRadius={45} outerRadius={70}
                  dataKey="value" paddingAngle={3}>
                  {froteStatusData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`${v}%`, ""]} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {froteStatusData.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: item.fill }} />
                  <span style={{ fontSize: 13, color: C.ink }}>{item.name}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: item.fill, marginLeft: 4 }}>
                    {item.value}%
                  </span>
                </div>
              ))}
              <div style={{
                marginTop: 6, fontSize: 12, color: C.muted,
                borderTop: `1px solid ${C.border}`, paddingTop: 10,
                lineHeight: 1.6,
              }}>
                85% têm rastreador<br />83% têm seguro
              </div>
            </div>
          </div>
        </Card>

        {/* Idade do veículo */}
        <Card>
          <CardTitle>Idade do Veículo</CardTitle>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={idadeVeicData}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="faixa" tick={{ fontSize: 10.5, fill: C.muted }} />
              <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: C.muted }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pct" name="%" radius={[4, 4, 0, 0]}>
                {idadeVeicData.map((_, i) => (
                  <Cell key={i} fill={i < 2 ? C.green : i === 2 ? C.accent : "#94A3B8"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>
            59% da frota tem até 10 anos de uso
          </p>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Tipos de caminhão */}
        <Card>
          <CardTitle>Tipos de Caminhão</CardTitle>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie
                data={tipoCaminhaoData} cx="50%" cy="50%"
                outerRadius={80} dataKey="pct"
                label={({ tipo, pct }) => `${tipo.split(" ")[0]} ${pct}%`}
                labelLine={true}
              >
                {tipoCaminhaoData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(v, n, p) => [`${v}%`, p.payload.tipo]} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Implementos */}
        <Card>
          <CardTitle>Implementos Mais Usados</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            {implementoData.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 90, fontSize: 12, color: C.muted, textAlign: "right", flexShrink: 0 }}>
                  {item.label}
                </div>
                <div style={{ flex: 1, height: 10, background: C.border, borderRadius: 4 }}>
                  <div style={{
                    height: 10, width: `${item.pct}%`,
                    background: `linear-gradient(90deg, ${C.blue}, ${C.accent})`,
                    borderRadius: 4,
                  }} />
                </div>
                <div style={{ width: 34, fontSize: 12, fontWeight: 700, color: C.ink }}>
                  {item.pct}%
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
