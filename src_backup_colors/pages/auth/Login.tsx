import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const loginAsAdmin = () => {
    navigate("/admin/dashboard");
  };

  const loginAsAgent = () => {
    navigate("/agent/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F1F5F9",
      }}
    >
      <div
        style={{
          width: "980px",
          height: "600px",
          background: "#FFFFFF",
          borderRadius: "24px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          boxShadow: "0 20px 40px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            background: "#0F172A",
            color: "#FFFFFF",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              <ShieldCheck />
              <strong>Teranga Admin</strong>
            </div>

            <h1
              style={{
                fontSize: "42px",
                lineHeight: 1.2,
              }}
            >
              Administration numérique des collectivités
            </h1>

            <p
              style={{
                marginTop: "20px",
                color: "#CBD5E1",
              }}
            >
              Gestion centralisée des demandes citoyennes,
              réclamations, documents administratifs et services municipaux.
            </p>
          </div>

          <div
            style={{
              color: "#94A3B8",
            }}
          >
            © 2026 Teranga Admin
          </div>
        </div>

        <div
          style={{
            padding: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "30px",
            }}
          >
            Connexion
          </h2>

          <input
            placeholder="Adresse email"
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #CBD5E1",
              marginBottom: "14px",
            }}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #CBD5E1",
              marginBottom: "24px",
            }}
          />

          <button
            onClick={loginAsAdmin}
            style={{
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: "#2563EB",
              color: "#FFFFFF",
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: "12px",
            }}
          >
            Connexion Admin
          </button>

          <button
            onClick={loginAsAgent}
            style={{
              padding: "14px",
              border: "1px solid #CBD5E1",
              borderRadius: "12px",
              background: "#FFFFFF",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Connexion Agent
          </button>
        </div>
      </div>
    </div>
  );
}
