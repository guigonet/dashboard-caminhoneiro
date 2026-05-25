import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { C, idadeData, estadoCivilData, escolaridadeData, estadoData } from "../data/dados";
import { Card, CardTitle, CustomTooltip, BarraHorizontal, InfoBox } from "../components/ui";

export default function SecaoDemografico() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Faixa Etária */}
        <Card>
          <CardTitle>Faixa Etária — Autônomo vs. CLT</CardTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={idadeData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="faixa" tick={{ fontSize: 11, fill: C.muted }} />
              <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: C.muted }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="autonomo" name="Autônomo" fill={C.accent} radius={[4, 4, 0, 0]} />
              <Bar dataKey="clt" name="CLT" fill={C.blue} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Estado Civil */}
        <Card>
          <CardTitle>Estado Civil (Autônomos)</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 4 }}>
            {estadoCivilData.map((item, i) => (
              <BarraHorizontal key={i} {...item} />
            ))}
          </div>
          <InfoBox
            text="📍 77% têm filhos — argumento familiar tem alta ressonância"
            cor={C.blue}
            bg={C.blueSoft}
          />
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Escolaridade */}
        <Card>
          <CardTitle>Escolaridade</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {escolaridadeData.map((item, i) => (
              <BarraHorizontal key={i} {...item} height={10} />
            ))}
          </div>
          <InfoBox
            text="💡 Comunicação visual e objetiva. Vídeos curtos superam textos longos."
            cor={C.accent}
            bg={C.accentSoft}
          />
        </Card>

        {/* Estados */}
        <Card>
          <CardTitle>Top 10 Estados — Concentração CLT</CardTitle>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={estadoData} layout="vertical" margin={{ left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: C.muted }}
                tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="uf"
                tick={{ fontSize: 11, fill: C.ink }} width={40} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pct" fill={C.blue} radius={[0, 4, 4, 0]} name="%" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
