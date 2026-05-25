import { C } from "../data/dados";

export function KpiCard({ label, value, sub, icon }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s, transform 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: C.ink,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: C.accent,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 12, color: C.muted }}>{sub}</div>
    </div>
  );
}

export function SectionTitle({ title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 4,
            height: 28,
            background: C.accent,
            borderRadius: 2,
          }}
        />
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: C.ink,
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {sub && (
        <p
          style={{
            margin: "4px 0 0 14px",
            fontSize: 13,
            color: C.muted,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Tag({ text, color, bg }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.05em",
        color,
        background: bg,
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}

export function CardTitle({ children }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 600,
        color: C.muted,
        marginBottom: 16,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
      }}
    >
      {children}
    </div>
  );
}

export function BarraHorizontal({ label, pct, cor, height = 8, showValue = true }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <span style={{ fontSize: 13, color: C.ink }}>{label}</span>
        {showValue && (
          <span style={{ fontSize: 13, fontWeight: 700, color: cor }}>{pct}%</span>
        )}
      </div>
      <div
        style={{
          height,
          background: C.border,
          borderRadius: height / 2,
        }}
      >
        <div
          style={{
            height,
            width: `${Math.max(pct, 0.5)}%`,
            background: cor,
            borderRadius: height / 2,
            transition: "width 0.8s ease",
          }}
        />
      </div>
    </div>
  );
}

export function InfoBox({ text, cor, bg }) {
  return (
    <div
      style={{
        marginTop: 14,
        padding: "10px 14px",
        background: bg,
        borderRadius: 10,
      }}
    >
      <span style={{ fontSize: 12, color: cor }}>{text}</span>
    </div>
  );
}

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 10,
          padding: "10px 14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
        }}
      >
        {label && (
          <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
            {label}
          </div>
        )}
        {payload.map((p, i) => (
          <div
            key={i}
            style={{ fontSize: 13, fontWeight: 600, color: p.color || C.ink }}
          >
            {p.name ? `${p.name}: ` : ""}
            {p.value}
            {typeof p.value === "number" && p.value <= 100 ? "%" : ""}
          </div>
        ))}
      </div>
    );
  }
  return null;
};
