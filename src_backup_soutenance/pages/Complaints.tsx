import {
  AlertTriangle,
  Clock3,
  CheckCircle2,
  MapPin,
  Eye,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import SearchInput from "../components/ui/SearchInput";
import ComplaintsMap from "../components/maps/ComplaintsMap";

const complaints = [
  {
    id: "REC-001",
    title: "Route dégradée",
    location: "Dakar Plateau",
    priority: "Haute",
    assignedAgent: "Aminata Ndiaye",
    status: "En attente",
    date: "12/06/2026",
  },
  {
    id: "REC-002",
    title: "Éclairage public défectueux",
    location: "Pikine",
    priority: "Moyenne",
    assignedAgent: "Moussa Diallo",
    status: "En cours",
    date: "11/06/2026",
  },
  {
    id: "REC-003",
    title: "Dépôt sauvage d'ordures",
    location: "Guédiawaye",
    priority: "Faible",
    assignedAgent: "Khadija Sow",
    status: "Résolue",
    date: "10/06/2026",
  },
];

export default function Complaints() {
  return (
    <div>
      <PageHeader
        title="Réclamations citoyennes"
        subtitle="Suivi des incidents et interventions"
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
          value="542"
          trend="+8%"
          icon={AlertTriangle}
        />

        <StatCard
          title="En attente"
          value="91"
          trend="+2%"
          icon={Clock3}
        />

        <StatCard
          title="Résolues"
          value="398"
          trend="+15%"
          icon={CheckCircle2}
        />

        <StatCard
          title="Zones critiques"
          value="12"
          trend="-4%"
          icon={MapPin}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <SearchInput placeholder="Rechercher une réclamation..." />
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F9FAFB",
              }}
            >
              <th style={{ padding: "18px", textAlign: "left" }}>
                Référence
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Sujet
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Localisation
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Priorité
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Agent affecté
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Statut
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Actions
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
                <td style={{ padding: "18px" }}>
                  {complaint.id}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.title}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.location}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.priority}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.assignedAgent}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.status}
                </td>

                <td style={{ padding: "18px" }}>
                  <button
                    style={{
                      border: "1px solid #E5E7EB",
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "8px",
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

      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E5E7EB",
          padding: "20px",
        }}
      >
        <h3>Carte des réclamations</h3>

        <ComplaintsMap />
      </div>
    </div>
  );
}
