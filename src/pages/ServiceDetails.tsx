import PageHeader from "../components/ui/PageHeader";

export default function ServiceDetails() {
  return (
    <div>
      <PageHeader
        title="Détail du service"
        subtitle="Consultation complète du service municipal"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "24px",
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
          <h3>Informations générales</h3>

          <p><strong>Nom :</strong> État Civil</p>
          <p><strong>Responsable :</strong> Aminata Ndiaye</p>
          <p><strong>Agents :</strong> 8</p>
          <p><strong>Statut :</strong> Actif</p>
          <p><strong>Date création :</strong> 01/01/2026</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "18px",
            padding: "24px",
          }}
        >
          <h3>Statistiques</h3>

          <p><strong>Dossiers :</strong> 542</p>
          <p><strong>Validés :</strong> 501</p>
          <p><strong>En cours :</strong> 31</p>
          <p><strong>Rejetés :</strong> 10</p>
          <p><strong>Taux de validation :</strong> 92%</p>
        </div>
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
        <h3>Agents affectés</h3>

        <ul>
          <li>Aminata Ndiaye</li>
          <li>Moussa Diallo</li>
          <li>Fatou Ndiaye</li>
          <li>Ousmane Fall</li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          style={{
            background: "#2563EB",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Modifier
        </button>

        <button
          style={{
            background: "#16A34A",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Ajouter un agent
        </button>

        <button
          style={{
            background: "#DC2626",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Désactiver
        </button>
      </div>
    </div>
  );
}
