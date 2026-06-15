import {
  FolderOpen,
  Search,
  CheckCircle2,
  Eye,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import SearchInput from "../../components/ui/SearchInput";

const documents = [
  {
    id: "DOC-001",
    type: "Carte Nationale d'Identité",
    proprietaire: "Mamadou Diop",
    statut: "Perdu",
    date: "12/06/2026",
  },
  {
    id: "DOC-002",
    type: "Passeport",
    proprietaire: "Fatou Ndiaye",
    statut: "Retrouvé",
    date: "11/06/2026",
  },
  {
    id: "DOC-003",
    type: "Permis de conduire",
    proprietaire: "Ousmane Fall",
    statut: "Perdu",
    date: "10/06/2026",
  },
];

export default function AgentLostDocuments() {
  return (
    <div>
      <PageHeader
        title="Documents perdus"
        subtitle="Gestion des déclarations de documents perdus et retrouvés"
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
          title="Déclarations"
          value="27"
          trend="+3 cette semaine"
          icon={FolderOpen}
        />

        <StatCard
          title="Documents perdus"
          value="18"
          trend="+2"
          icon={Search}
        />

        <StatCard
          title="Retrouvés"
          value="9"
          trend="+1"
          icon={CheckCircle2}
        />

        <StatCard
          title="Taux résolution"
          value="33%"
          trend="+4%"
          icon={CheckCircle2}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div style={{ width: "350px" }}>
            <SearchInput placeholder="Rechercher un document..." />
          </div>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#F8FAFC" }}>
              <th style={{ padding: "18px", textAlign: "left" }}>
                Référence
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Type
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Propriétaire
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Statut
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Date
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {documents.map((document) => (
              <tr
                key={document.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px", fontWeight: 600 }}>
                  {document.id}
                </td>

                <td style={{ padding: "18px" }}>
                  {document.type}
                </td>

                <td style={{ padding: "18px" }}>
                  {document.proprietaire}
                </td>

                <td style={{ padding: "18px" }}>
                  {document.statut}
                </td>

                <td style={{ padding: "18px" }}>
                  {document.date}
                </td>

                <td style={{ padding: "18px" }}>
                  <button
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      background: "#FFFFFF",
                      cursor: "pointer",
                    }}
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
