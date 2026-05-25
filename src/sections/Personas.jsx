import { C, personas } from "../data/dados";
import { Card, CardTitle } from "../components/ui";

export default function SecaoPersonas() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Cards de persona */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        {personas.map((p, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
          >
            {/* Header colorido */}
            <div style={{ background: p.cor, padding: "20px 22px" }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{p.icon}</div>
              <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 18, fontWeight: 700, color: "#fff",
              }}>{p.nome}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 2 }}>
                {p.tipo}
              </div>
            </div>

            {/* Dados */}
            <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { k: "Idade", v: p.idade },
                { k: "Renda", v: p.renda },
                { k: "Veículo", v: p.veiculo },
                { k: "Maior dor", v: p.dor },
                { k: "Canal", v: p.canal },
              ].map((item, j) => (
                <div key={j} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 8 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: p.cor,
                    textTransform: "uppercase", letterSpacing: "0.07em",
                  }}>{item.k}</div>
                  <div style={{ fontSize: 13, color: C.ink, marginTop: 2 }}>{item.v}</div>
                </div>
              ))}

              {/* Argumento */}
              <div style={{
                background: p.softCor, borderRadius: 10,
                padding: "10px 12px", marginTop: 4,
              }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: p.cor,
                  textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3,
                }}>Argumento de venda</div>
                <div style={{ fontSize: 12, color: C.ink }}>{p.argumento}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Canais por persona */}
      <Card>
        <CardTitle>Canais Prioritários por Persona</CardTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { persona: "Dono da Estrada", canais: ["WhatsApp", "YouTube", "Indicação", "PDV em postos"], cor: C.blue },
            { persona: "Profissional CLT", canais: ["Instagram", "TikTok", "Rádio", "PDV em postos"], cor: C.accent },
            { persona: "Novo na Estrada", canais: ["YouTube", "TikTok", "Apps de frete", "WhatsApp"], cor: C.green },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 700, color: item.cor, marginBottom: 10 }}>
                {item.persona}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {item.canais.map((c, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: item.cor, flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 13, color: C.ink }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
