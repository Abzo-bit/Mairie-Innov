import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";

export default function ComplaintDetails() {
  return (
    <div>
      <PageHeader
        title="Détail de la réclamation"
        subtitle="Suivi complet du dossier de réclamation"
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
          <p><strong>Téléphone :</strong> +221 77 000 00 00</p>
          <p><strong>NCI :</strong> 1234567890123</p>
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
          <h3>Informations de la réclamation</h3>

          <p><strong>Référence :</strong> REC-001</p>
          <p><strong>Catégorie :</strong> Voirie</p>
          <p><strong>Localisation :</strong> Dakar Plateau</p>
          <p><strong>Date :</strong> 12/06/2026</p>
          <p><strong>Agent :</strong> Moussa Diallo</p>

          <StatusBadge status="En attente" />
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
        <h3>Description</h3>

        <p>
          Plusieurs nids-de-poule rendent la circulation difficile
          sur l’avenue principale du quartier.
        </p>
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
        <h3>Historique de traitement</h3>

        <ul>
          <li>12/06/2026 - Réclamation créée</li>
          <li>13/06/2026 - Vérification effectuée</li>
          <li>14/06/2026 - Affectée à Moussa Diallo</li>
          <li>15/06/2026 - En attente d'intervention</li>
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
        <h3>Photo jointe</h3>

        <div
          style={{
            marginTop: "16px",
            height: "250px",
            background: "#F8FAFC",
            border: "2px dashed #CBD5E1",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748B",
          }}
        >
          Aperçu de la photo de la réclamation
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
          En cours
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
          Résolue
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
