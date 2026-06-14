import { Eye, Filter, Download } from "lucide-react";

import SearchInput from "../ui/SearchInput";
import StatusBadge from "../ui/StatusBadge";

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
        borderRadius: "24px",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "24px",
          borderBottom: "1px solid #E2E8F0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ width: "340px" }}>
          <SearchInput placeholder="Rechercher une demande..." />
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            style={{
              height: "44px",
              padding: "0 16px",
              borderRadius: "14px",
              border: "1px solid #E2E8F0",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Filter size={16} />
            Filtres
          </button>

          <button
            style={{
              height: "44px",
              padding: "0 16px",
              borderRadius: "14px",
              border: "none",
              background: "#1E3A8A",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            <Download size={16} />
            Exporter
          </button>
        </div>
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
            <th style={{ padding: "18px", textAlign: "left" }}>Référence</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Citoyen</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Service</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              style={{
                borderTop: "1px solid #F1F5F9",
              }}
            >
              <td style={{ padding: "18px", fontWeight: 600 }}>
                {request.id}
              </td>

              <td style={{ padding: "18px" }}>
                {request.citizen}
              </td>

              <td style={{ padding: "18px" }}>
                {request.service}
              </td>

              <td style={{ padding: "18px" }}>
                <StatusBadge status={request.status} />
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
                    border: "1px solid #E2E8F0",
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

      <div
        style={{
          padding: "18px 24px",
          borderTop: "1px solid #E2E8F0",
          display: "flex",
          justifyContent: "space-between",
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        <span>Affichage de 1 à 4 sur 1245 demandes</span>

        <span>Page 1 sur 312</span>
      </div>
    </div>
  );
}
