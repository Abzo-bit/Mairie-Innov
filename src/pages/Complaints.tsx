import { Link } from "react-router-dom";
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
    status: "Traitée",
    date: "10/06/2026",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "En attente":
      return "#F59E0B";

    case "En cours":
      return "#2563EB";

    case "Traitée":
      return "#16A34A";

    default:
      return "#64748B";
  }
};

export default function Complaints() {
  return (
    <div>
      <h1
        style={{
          marginBottom: "24px",
        }}
      >
        Réclamations citoyennes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  marginBottom: "8px",
                }}
              >
                {complaint.title}
              </h3>

              <p>
                📍 {complaint.location}
              </p>

              <p>
                📅 {complaint.date}
              </p>

              <span
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: getStatusColor(
                    complaint.status
                  ),
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {complaint.status}
              </span>

              <div
                style={{
                  marginTop: "16px",
                }}
              >
                <Link
                  to={`/complaints/${complaint.id}`}
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        <ComplaintsMap />
      </div>
    </div>
  );
}
