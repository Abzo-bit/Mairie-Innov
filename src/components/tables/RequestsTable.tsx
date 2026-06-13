import { Link } from "react-router-dom";

const requests = [
  {
    id: "DEM-001",
    citizen: "Mamadou Diop",
    service: "Acte de naissance",
    status: "En cours",
    date: "12/06/2026",
  },
  {
    id: "DEM-002",
    citizen: "Fatou Ndiaye",
    service: "Certificat de résidence",
    status: "Validée",
    date: "11/06/2026",
  },
  {
    id: "DEM-003",
    citizen: "Ousmane Fall",
    service: "Acte de mariage",
    status: "Rejetée",
    date: "10/06/2026",
  },
  {
    id: "DEM-004",
    citizen: "Awa Sarr",
    service: "Certificat de vie",
    status: "En attente",
    date: "09/06/2026",
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Validée":
      return {
        background: "#DCFCE7",
        color: "#15803D",
      };

    case "En cours":
      return {
        background: "#DBEAFE",
        color: "#1D4ED8",
      };

    case "Rejetée":
      return {
        background: "#FEE2E2",
        color: "#DC2626",
      };

    case "En attente":
      return {
        background: "#FEF3C7",
        color: "#D97706",
      };

    default:
      return {
        background: "#E2E8F0",
        color: "#475569",
      };
  }
};

export default function RequestsTable() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
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
            <th style={{ padding: "16px", textAlign: "left" }}>
              Référence
            </th>

            <th style={{ padding: "16px", textAlign: "left" }}>
              Citoyen
            </th>

            <th style={{ padding: "16px", textAlign: "left" }}>
              Service
            </th>

            <th style={{ padding: "16px", textAlign: "left" }}>
              Statut
            </th>

            <th style={{ padding: "16px", textAlign: "left" }}>
              Date
            </th>

            <th style={{ padding: "16px", textAlign: "left" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              style={{
                borderTop: "1px solid #E2E8F0",
              }}
            >
              <td style={{ padding: "16px" }}>
                {request.id}
              </td>

              <td style={{ padding: "16px" }}>
                {request.citizen}
              </td>

              <td style={{ padding: "16px" }}>
                {request.service}
              </td>

              <td style={{ padding: "16px" }}>
                <span
                  style={{
                    ...getStatusStyle(request.status),
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {request.status}
                </span>
              </td>

              <td style={{ padding: "16px" }}>
                {request.date}
              </td>

              <td style={{ padding: "16px" }}>
                <Link
                  to={`/requests/${request.id}`}
                  style={{
                    color: "#2563EB",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Voir
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
