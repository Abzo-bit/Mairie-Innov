import { Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "1100px",
          minHeight: "650px",
          background: "#FFFFFF",
          borderRadius: "28px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          boxShadow: "0 20px 40px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            background: "#FFF7ED",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "999px",
              background: "#FFF3E6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <Landmark
              size={72}
              color="#F97316"
            />
          </div>

          <h1
            style={{
              margin: 0,
              color: "#374151",
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            Bienvenue sur
            <br />
            TerangaSkills
          </h1>

          <p
            style={{
              marginTop: "24px",
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "420px",
            }}
          >
            La plateforme de gouvernance territoriale
            qui rapproche les citoyens de leur
            administration.
          </p>

          <div
            style={{
              marginTop: "50px",
              color: "#94A3B8",
              fontSize: "14px",
            }}
          >
            © 2026 TerangaSkills
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#111827",
                fontSize: "36px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Connexion
            </h2>

            <p
              style={{
                color: "#6B7280",
                marginBottom: "40px",
              }}
            >
              Accès réservé aux agents et administrateurs
            </p>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Adresse email
              </label>

              <input
                type="email"
                placeholder="nom@terangaskills.sn"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid #E2E8F0",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Mot de passe
              </label>

              <input
                type="password"
                placeholder="********"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid #E2E8F0",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "14px",
                background: "#F97316",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
