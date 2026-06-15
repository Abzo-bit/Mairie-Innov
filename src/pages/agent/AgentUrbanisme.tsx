import {
  FileText,
  Clock3,
  CheckCircle2,
  Eye,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import SearchInput from "../../components/ui/SearchInput";

const requests = [
  {
    id: "DEM-001",
    citoyen: "Mamadou Diop",
    service: "Acte de naissance",
    statut: "En attente",
    date: "12/06/2026",
  },
  {
    id: "DEM-002",
    citoyen: "Fatou Ndiaye",
    service: "Certificat de résidence",
    statut: "En cours",
    date: "11/06/2026",
  },
  {
    id: "DEM-003",
    citoyen: "Ousmane Fall",
    service: "Acte de mariage",
    statut: "Traitée",
    date: "10/06/2026",
  },
];

export default function AgentRequests() {
  return (
    <div>
      <PageHeader
        title="Mes demandes"
        subtitle="Demandes administratives qui vous sont affectées"
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
          title="Demandes"
          value="32"
          trend="+4 aujourd'hui"
          icon={FileText}
        />

        <StatCard
          title="En attente"
          value="8"
          trend="+2"
          icon={Clock3}
        />

        <StatCard
          title="Traitées"
          value="24"
          trend="+6"
          icon={CheckCircle2}
        />

        <StatCard
          title="Performance"
          value="94%"
          trend="+3%"
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
            <SearchInput placeholder="Rechercher une demande..." />
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
                Citoyen
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Service
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
            {requests.map((request) => (
              <tr
                key={request.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px", fontWeight: 600 }}>
                  {request.id}
                </td>

                <td style={{ padding: "18px" }}>
                  {request.citoyen}
                </td>

                <td style={{ padding: "18px" }}>
                  {request.service}
                </td>

                <td style={{ padding: "18px" }}>
                  {request.statut}
                </td>

                <td style={{ padding: "18px" }}>
                  {request.date}
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
