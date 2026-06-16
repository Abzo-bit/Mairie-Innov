import PageHeader from "../components/ui/PageHeader";

export default function AgentDetails() {
  return (
    <div>
      <PageHeader
        title="Détail de l'agent"
        subtitle="Consultation complète du profil agent"
      />

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
            border: "1px solid #E5E7EB",
            borderRadius: "18px",
            padding: "24px",
          }}
        >
          <h3>Informations personnelles</h3>

          <p>
            <strong>Nom :</strong> Aminata Ndiaye
          </p>
          <p>
            <strong>Matricule :</strong> AGT-001
          </p>
          <p>
            <strong>Téléphone :</strong> +221 77 555 44 33
          </p>
          <p>
            <strong>Email :</strong> aminata.ndiaye@mairie.sn
          </p>
          <p>
            <strong>Adresse :</strong> Dakar Plateau
          </p>
          <p>
            <strong>Statut :</strong> Actif
          </p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "18px",
            padding: "24px",
          }}
        >
          <h3>Informations professionnelles</h3>

          <p>
            <strong>Service :</strong> État Civil
          </p>
          <p>
            <strong>Fonction :</strong> Agent instructeur
          </p>
          <p>
            <strong>Date d'affectation :</strong> 10/01/2025
          </p>
          <p>
            <strong>Dossiers traités :</strong> 142
          </p>
          <p>
            <strong>Performance :</strong> 94%
          </p>
          <p>
            <strong>Temps moyen :</strong> 2.1 jours
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          padding: "24px",
        }}
      >
        <h3>Historique d'activité</h3>

        <ul>
          <li>15/06/2026 - Validation dossier DEM-001</li>
          <li>14/06/2026 - Affectation dossier DEM-014</li>
          <li>13/06/2026 - Vérification pièces DEM-021</li>
          <li>12/06/2026 - Validation dossier DEM-008</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          padding: "24px",
        }}
      >
        <h3>Dossiers récents</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>Référence</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Type</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Statut</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px" }}>DEM-001</td>
              <td style={{ padding: "12px" }}>Acte de naissance</td>
              <td style={{ padding: "12px" }}>15/06/2026</td>
              <td style={{ padding: "12px" }}>Validée</td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>DEM-014</td>
              <td style={{ padding: "12px" }}>Acte de décès</td>
              <td style={{ padding: "12px" }}>14/06/2026</td>
              <td style={{ padding: "12px" }}>En cours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          style={{
            background: "#F97316",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Modifier
        </button>

        <button
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Permissions
        </button>

        <button
          style={{
            background: "#DC2626",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Désactiver
        </button>
      </div>
    </div>
  );
}
