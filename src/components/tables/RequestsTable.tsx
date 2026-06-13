import { Link } from "react-router-dom";
import { Eye, Filter } from "lucide-react";

import StatusBadge from "../ui/StatusBadge";
import SearchInput from "../ui/SearchInput";

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
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #E2E8F0",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "320px",
          }}
        >
          <SearchInput placeholder="Rechercher une demande..." />
        </div>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #E2E8F0",
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "10px 14px",
            cursor: "pointer",
          }}
        >
          <Filter size={16} />
          Filtres
        </button>
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
                <StatusBadge
                  status={request.status}
                />
              </td>

              <td style={{ padding: "16px" }}>
                {request.date}
              </td>

              <td style={{ padding: "16px" }}>
                <Link
                  to={`/requests/${request.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#2563EB",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  <Eye size={16} />
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
