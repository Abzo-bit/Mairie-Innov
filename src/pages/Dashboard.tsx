import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import RequestsChart from "../components/charts/RequestsChart";

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Tableau de bord"
        subtitle="Vue globale de la plateforme administrative"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard
          title="Demandes totales"
          value="1 245"
          trend="+12% ce mois"
          icon="📄"
        />

        <StatCard
          title="Demandes en cours"
          value="321"
          trend="+4% cette semaine"
          icon="⏳"
        />

        <StatCard
          title="Demandes traitées"
          value="875"
          trend="+18% ce mois"
          icon="✅"
        />

        <StatCard
          title="Réclamations ouvertes"
          value="49"
          trend="-7% cette semaine"
          icon="📢"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Évolution des activités
          </h3>

          <RequestsChart />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h3>Dossiers prioritaires</h3>

            <ul style={{ marginTop: "16px" }}>
              <li>Acte de naissance - Mamadou Diop</li>
              <li>Réclamation voirie - Dakar Plateau</li>
              <li>Certificat de résidence - Fatou Ndiaye</li>
            </ul>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h3>Activité récente</h3>

            <ul style={{ marginTop: "16px" }}>
              <li>✓ Acte de naissance validé</li>
              <li>✓ Réclamation affectée</li>
              <li>✓ Certificat de résidence délivré</li>
              <li>✓ Document retrouvé signalé</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
