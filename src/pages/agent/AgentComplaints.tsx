import {
  AlertTriangle,
  Clock3,
  CheckCircle2,
  Eye,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import SearchInput from "../../components/ui/SearchInput";

const complaints = [
  {
    id: "REC-001",
    titre: "Route dégradée",
    localisation: "Dakar Plateau",
    statut: "En attente",
    date: "12/06/2026",
  },
  {
    id: "REC-002",
    titre: "Éclairage public défectueux",
    localisation: "Pikine",
    statut: "En cours",
    date: "11/06/2026",
  },
  {
    id: "REC-003",
    titre: "Dépôt sauvage d'ordures",
    localisation: "Guédiawaye",
    statut: "Traitée",
    date: "10/06/2026",
  },
];

export default function AgentComplaints() {
  return (
    <div>
      <PageHeader
        title="Réclamations affectées"
        subtitle="Réclamations dont vous assurez le traitement"
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
          title="Réclamations"
          value="18"
          trend="+3 cette semaine"
          icon={AlertTriangle}
        />

        <StatCard
          title="En attente"
          value="5"
          trend="+1"
          icon={Clock3}
        />

        <StatCard
          title="En cours"
          value="7"
          trend="Stable"
          icon={AlertTriangle}
        />

        <StatCard
          title="Traitées"
          value="6"
          trend="+2"
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
            <SearchInput placeholder="Rechercher une réclamation..." />
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
                Réclamation
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Localisation
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
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px", fontWeight: 600 }}>
                  {complaint.id}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.titre}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.localisation}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.statut}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.date}
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
