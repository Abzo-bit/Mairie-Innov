export default function AgentNavbar() {
  return (
    <header
      style={{
        height: "78px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            color: "#94A3B8",
            fontSize: "13px",
          }}
        >
          Bienvenue
        </p>

        <h2
          style={{
            margin: 0,
            color: "#0F172A",
          }}
        >
          Espace Agent
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "14px",
            background: "#2563EB",
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          A
        </div>

        <div>
          <div style={{ fontWeight: 700 }}>
            Agent
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#64748B",
            }}
          >
            Service Administratif
          </div>
        </div>
      </div>
    </header>
  );
}
