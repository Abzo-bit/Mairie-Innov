import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";

const agents = [
  {
    id: "AGT-001",
    nom: "Aminata Ndiaye",
    service: "État Civil",
    dossiers: 142,
    performance: "94%",
  },
  {
    id: "AGT-002",
    nom: "Moussa Diallo",
    service: "Urbanisme",
    dossiers: 87,
    performance: "91%",
  },
  {
    id: "AGT-003",
    nom: "Khadija Sow",
    service: "Affaires Sociales",
    dossiers: 121,
    performance: "96%",
  },
];

export default function Agents() {
  return (
    <div>
      <PageHeader
        title="Gestion des agents"
        subtitle="Suivi des performances et affectations"
      />

      <div
        style={{
          background: "#FFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <SearchInput placeholder="Rechercher un agent..." />
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#F8FAFC" }}>
              <th style={{ padding: "16px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Nom</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Service</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Dossiers</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Performance</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                style={{
                  borderTop: "1px solid #E2E8F0",
                }}
              >
                <td style={{ padding: "16px" }}>{agent.id}</td>
                <td style={{ padding: "16px" }}>{agent.nom}</td>
                <td style={{ padding: "16px" }}>{agent.service}</td>
                <td style={{ padding: "16px" }}>{agent.dossiers}</td>
                <td style={{ padding: "16px" }}>{agent.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
