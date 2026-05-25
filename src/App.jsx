import { useState } from "react";
import { C, SECTIONS } from "./data/dados";
import { Tag } from "./components/ui";
import SecaoVisaoGeral from "./sections/VisaoGeral";
import SecaoDemografico from "./sections/Demografico";
import SecaoProfissao from "./sections/Profissao";
import SecaoFrota from "./sections/Frota";
import SecaoSaude from "./sections/Saude";
import SecaoPersonas from "./sections/Personas";

const SECTION_COMPONENTS = [
  <SecaoVisaoGeral />,
  <SecaoDemografico />,
  <SecaoProfissao />,
  <SecaoFrota />,
  <SecaoSaude />,
  <SecaoPersonas />,
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <div style={{
        background: C.card, borderBottom: `1px solid ${C.border}`,
        padding: "16px 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", position: "sticky", top: 0,
        zIndex: 100, boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 38, height: 38, background: C.accent, borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
          }}>🚚</div>
          <div>
            <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: C.ink }}>
              Perfil do Caminhoneiro Brasileiro
            </div>
            <div style={{ fontSize: 11, color: C.muted }}>Dashboard de Marketing · CNTA 2024 + ANTT 2024</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <Tag text="n = 1.006 autônomos" color={C.accent} bg={C.accentSoft} />
          <Tag text="814k registros CLT" color={C.blue} bg={C.blueSoft} />
        </div>
      </div>

      <div style={{
        background: C.card, borderBottom: `1px solid ${C.border}`,
        padding: "0 32px", display: "flex", gap: 0, overflowX: "auto",
      }}>
        {SECTIONS.map((s, i) => (
          <button key={i} onClick={() => setActiveSection(i)} style={{
            padding: "12px 20px", border: "none", background: "transparent",
            cursor: "pointer", fontSize: 13, fontFamily: "'Satoshi', sans-serif",
            fontWeight: activeSection === i ? 700 : 500,
            color: activeSection === i ? C.accent : C.muted,
            borderBottom: activeSection === i ? `2px solid ${C.accent}` : "2px solid transparent",
            transition: "all 0.2s", whiteSpace: "nowrap",
          }}>{s}</button>
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        {SECTION_COMPONENTS[activeSection]}
      </div>

      <div style={{
        borderTop: `1px solid ${C.border}`, padding: "14px 32px",
        background: C.card, textAlign: "center",
      }}>
        <span style={{ fontSize: 11, color: C.muted }}>
          Fontes: CNTA — Pesquisa Nacional Realidade do Transportador Autônomo de Cargas 2024 · ANTT — Boletim Perfil do Caminhoneiro 2024 (RAIS/CAGED)
        </span>
      </div>
    </div>
  );
}
