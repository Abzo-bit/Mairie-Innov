import PageHeader from "../components/ui/PageHeader";

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Paramètres"
        subtitle="Configuration de la plateforme"
      />

      <div
        style={{
          display: "grid",
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
          <p style={{ color: "#64748B" }}>
            Gestion des informations du compte.
          </p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Notifications</h3>
          <p style={{ color: "#64748B" }}>
            Préférences de notification système.
          </p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Sécurité</h3>
          <p style={{ color: "#64748B" }}>
            Gestion des accès et mots de passe.
          </p>
        </div>
      </div>
    </div>
  );
}
