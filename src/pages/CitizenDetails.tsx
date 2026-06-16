import PageHeader from "../components/ui/PageHeader";

export default function CitizenDetails() {
  return (
    <div>
      <PageHeader
        title="Détail du citoyen"
        subtitle="Consultation complète du profil citoyen"
      />

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h3>Informations générales</h3>

        <p><strong>Nom :</strong> Mamadou Diop</p>
        <p><strong>NCI :</strong> 1234567890123</p>
        <p><strong>Téléphone :</strong> +221 77 123 45 67</p>
        <p><strong>Adresse :</strong> Dakar Plateau</p>
        <p><strong>Date inscription :</strong> 12/01/2026</p>
        <p><strong>Statut :</strong> Compte validé</p>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h3>Historique des demandes</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px" }}>Référence</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Type</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Date</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Statut</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px" }}>DEM-001</td>
              <td style={{ padding: "12px" }}>Acte de naissance</td>
              <td style={{ padding: "12px" }}>12/06/2026</td>
              <td style={{ padding: "12px" }}>Validée</td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>REC-003</td>
              <td style={{ padding: "12px" }}>Réclamation</td>
              <td style={{ padding: "12px" }}>05/06/2026</td>
              <td style={{ padding: "12px" }}>Résolue</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          style={{
            background: "#F59E0B",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Bloquer
        </button>

        <button
          style={{
            background: "#16A34A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Débloquer
        </button>

        <button
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Réinitialiser mot de passe
        </button>
      </div>
    </div>
  );
}
