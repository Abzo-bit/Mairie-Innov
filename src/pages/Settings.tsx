import { User, Bell, Shield, Lock, Mail, Smartphone } from "lucide-react";

import PageHeader from "../components/ui/PageHeader";

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Paramètres"
        subtitle="Configuration et administration de la plateforme"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <User size={24} />
          <h2>1</h2>
          <span>Administrateur</span>
        </div>

        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <Bell size={24} />
          <h2>12</h2>
          <span>Notifications</span>
        </div>

        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <Shield size={24} />
          <h2>100%</h2>
          <span>Sécurité</span>
        </div>

        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <Lock size={24} />
          <h2>Actif</h2>
          <span>Authentification</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Profil Administrateur</h3>

          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Nom :</strong> Super Admin
            </p>

            <p>
              <strong>Email :</strong>
              admin@collectivite.sn
            </p>

            <p>
              <strong>Téléphone :</strong>
              +221 77 000 00 00
            </p>

            <p>
              <strong>Rôle :</strong>
              Administrateur Principal
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Préférences de notifications</h3>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <Mail size={18} />
              Email activé
            </div>

            <div>
              <Smartphone size={18} />
              SMS activé
            </div>

            <div>
              <Bell size={18} />
              Alertes système activées
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3>Sécurité du compte</h3>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            style={{
              background: "#2563EB",
              color: "#FFF",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Modifier le mot de passe
          </button>

          <button
            style={{
              background: "#16A34A",
              color: "#FFF",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Activer 2FA
          </button>
        </div>
      </div>
    </div>
  );
}
