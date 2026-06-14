import {
  AlertTriangle,
  Clock3,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import ComplaintsMap from "../components/maps/ComplaintsMap";

const complaints = [
  {
    id: "REC-001",
    title: "Route dégradée",
    location: "Dakar Plateau",
    status: "En attente",
    date: "12/06/2026",
  },
  {
    id: "REC-002",
    title: "Éclairage public défectueux",
    location: "Pikine",
    status: "En cours",
    date: "11/06/2026",
  },
  {
    id: "REC-003",
    title: "Dépôt sauvage d'ordures",
    location: "Guédiawaye",
    status: "Résolue",
    date: "10/06/2026",
  },
];

export default function Complaints() {
  return (
    <div>
      <PageHeader
        title="Réclamations citoyennes"
        subtitle="Suivi des incidents et demandes d'intervention"
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
          title="Total réclamations"
          value="542"
          trend="+8% ce mois"
          icon={AlertTriangle}
        />

        <StatCard
          title="En attente"
          value="91"
          trend="+2% cette semaine"
          icon={Clock3}
        />

        <StatCard
          title="Résolues"
          value="398"
          trend="+15% ce mois"
          icon={CheckCircle2}
        />

        <StatCard
          title="Zones critiques"
          value="12"
          trend="-4% ce mois"
          icon={MapPin}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F8FAFC",
              }}
            >
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
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                style={{
                  borderTop: "1px solid #E2E8F0",
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
                  {complaint.status}
                </td>

                <td style={{ padding: "18px" }}>
                  {complaint.date}
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
          border: "1px solid #E2E8F0",
          padding: "20px",
        }}
      >
        <h3
          style={{
            marginBottom: "16px",
          }}
        >
          Carte des réclamations
        </h3>

        <ComplaintsMap />
      </div>
    </div>
  );
}
