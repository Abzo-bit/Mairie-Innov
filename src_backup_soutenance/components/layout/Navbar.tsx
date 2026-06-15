import {
  Search,
  Bell,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      style={{
        height: "84px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            color: "#94A3B8",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Administration numérique
        </p>

        <h2
          style={{
            margin: 0,
            marginTop: "4px",
            color: "#0F172A",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Tableau de bord
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "340px",
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "18px",
            padding: "12px 16px",
          }}
        >
          <Search
            size={18}
            color="#64748B"
          />

          <input
            placeholder="Rechercher..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              background: "transparent",
              color: "#0F172A",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            background: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bell size={18} />
        </button>

        <button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            background: "#FFFFFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Settings size={18} />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            border: "1px solid #E2E8F0",
            borderRadius: "18px",
            padding: "8px 14px",
            cursor: "pointer",
            background: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "16px",
              background: "#F97316",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            AD
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              Abzo Dieng
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "#64748B",
              }}
            >
              Super Administrateur
            </div>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}
