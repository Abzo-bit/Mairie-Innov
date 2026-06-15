import {
  FolderOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
  Eye,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import SearchInput from "../components/ui/SearchInput";

const documents = [
  {
    id: "DOC-001",
    type: "Carte Nationale d'Identité",
    citoyen: "Mamadou Diop",
    date: "12/06/2026",
    statut: "Perdu",
  },
  {
    id: "DOC-002",
    type: "Passeport",
    citoyen: "Fatou Ndiaye",
    date: "11/06/2026",
    statut: "Retrouvé",
  },
  {
    id: "DOC-003",
    type: "Permis de conduire",
    citoyen: "Ousmane Fall",
    date: "09/06/2026",
    statut: "Perdu",
  },
];

export default function LostDocuments() {
  return (
    <div>
      <PageHeader
        title="Documents perdus"
        subtitle="Gestion des déclarations de perte et des documents retrouvés"
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
          value="124"
          trend="+6%"
          icon={FolderOpen}
        />

        <StatCard
          title="Perdus"
          value="87"
          trend="+3%"
          icon={AlertTriangle}
        />

        <StatCard
          title="Retrouvés"
          value="37"
          trend="+9%"
          icon={CheckCircle2}
        />

        <StatCard
          title="Traitement"
          value="94%"
          trend="+2%"
          icon={Search}
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
              <th style={{ padding: "18px", textAlign: "left" }}>Référence</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Document</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Citoyen</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px" }}>{doc.id}</td>
                <td style={{ padding: "18px" }}>{doc.type}</td>
                <td style={{ padding: "18px" }}>{doc.citoyen}</td>
                <td style={{ padding: "18px" }}>{doc.date}</td>

                <td style={{ padding: "18px" }}>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                      background:
                        doc.statut === "Retrouvé"
                          ? "#DCFCE7"
                          : "#FEF3C7",
                      color:
                        doc.statut === "Retrouvé"
                          ? "#15803D"
                          : "#B45309",
                    }}
                  >
                    {doc.statut}
                  </span>
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
