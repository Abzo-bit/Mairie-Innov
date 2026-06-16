import PageHeader from "../components/ui/PageHeader";

export default function ProjectDetails() {
  return (
    <div>
      <PageHeader
        title="Détail du projet"
        subtitle="Suivi complet du projet d'investissement"
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

          <p><strong>Projet :</strong> Construction du marché central</p>
          <p><strong>Référence :</strong> PRJ-001</p>
          <p><strong>Entreprise :</strong> SEN BATIMENT</p>
          <p><strong>Budget :</strong> 150 000 000 FCFA</p>
          <p><strong>Date début :</strong> 01/02/2026</p>
          <p><strong>Date fin prévue :</strong> 31/12/2026</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "18px",
            padding: "24px",
          }}
        >
          <h3>État d'avancement</h3>

          <p><strong>Statut :</strong> En cours</p>
          <p><strong>Avancement :</strong> 65%</p>
          <p><strong>Montant consommé :</strong> 97 500 000 FCFA</p>
          <p><strong>Montant restant :</strong> 52 500 000 FCFA</p>
          <p><strong>Dernière mise à jour :</strong> 15/06/2026</p>
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
        <h3>Description</h3>

        <p>
          Projet de construction d'un marché moderne visant à améliorer
          les infrastructures commerciales de la commune et à renforcer
          les activités économiques locales.
        </p>
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
        <h3>Historique</h3>

        <ul>
          <li>01/02/2026 - Lancement du projet</li>
          <li>15/03/2026 - Validation du financement</li>
          <li>20/04/2026 - Début des travaux</li>
          <li>15/06/2026 - Point d'avancement à 65%</li>
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
          Mettre à jour l'avancement
        </button>

        <button
          style={{
            background: "#F59E0B",
            color: "#FFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Générer rapport
        </button>
      </div>
    </div>
  );
}
