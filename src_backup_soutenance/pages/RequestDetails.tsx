import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";

export default function RequestDetails() {
  return (
    <div>
      <PageHeader
        title="Détail de la demande"
        subtitle="Consultation complète du dossier administratif"
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
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Informations du citoyen</h3>

          <p><strong>Nom :</strong> Mamadou Diop</p>
          <p><strong>NCI :</strong> 1234567890123</p>
          <p><strong>Téléphone :</strong> +221 77 000 00 00</p>
          <p><strong>Email :</strong> mamadou@email.com</p>
          <p><strong>Adresse :</strong> Dakar Plateau</p>
        </div>

        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Informations de la demande</h3>

          <p><strong>Référence :</strong> DEM-001</p>
          <p><strong>Service :</strong> Acte de naissance</p>
          <p><strong>Date :</strong> 12/06/2026</p>
          <p><strong>Agent :</strong> Aminata Ndiaye</p>
          <p><strong>Priorité :</strong> Haute</p>

          <StatusBadge status="En cours" />
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#FFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3>Historique du traitement</h3>

        <ul>
          <li>12/06/2026 - Demande créée</li>
          <li>13/06/2026 - Pièces vérifiées</li>
          <li>14/06/2026 - Affectée à Aminata Ndiaye</li>
          <li>15/06/2026 - Traitement en cours</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#FFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3>Pièces jointes</h3>

        <div style={{ marginTop: "16px" }}>
          📄 copie-cni.pdf
        </div>

        <div style={{ marginTop: "12px" }}>
          📄 justificatif-domicile.pdf
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          style={{
            background: "#334155",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Assigner
        </button>

        <button
          style={{
            background: "#F97316",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Mettre en cours
        </button>

        <button
          style={{
            background: "#16A34A",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Valider
        </button>

        <button
          style={{
            background: "#DC2626",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Rejeter
        </button>
      </div>
    </div>
  );
}
