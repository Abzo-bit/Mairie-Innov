import {
  Eye,
  Download,
  UserCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SearchInput from "../ui/SearchInput";
import StatusBadge from "../ui/StatusBadge";

const requests = [
  {
    id: "DEM-001",
    citizen: "Mamadou Diop",
    document: "Acte de naissance",
    service: "État Civil",
    agent: "Aminata Ndiaye",
    status: "En cours",
    date: "12/06/2026",
  },
  {
    id: "DEM-002",
    citizen: "Fatou Ndiaye",
    document: "Acte de décès",
    service: "État Civil",
    agent: "Moussa Diallo",
    status: "Validée",
    date: "11/06/2026",
  },
  {
    id: "DEM-003",
    citizen: "Ousmane Fall",
    document: "Acte de mariage",
    service: "État Civil",
    agent: "Khadija Sow",
    status: "Rejetée",
    date: "10/06/2026",
  },
];
export default function RequestsTable() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #E5E7EB",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "24px",
          borderBottom: "1px solid #E5E7EB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "350px" }}>
          <SearchInput placeholder="Rechercher une demande..." />
        </div>

        <button
          style={{
            height: "44px",
            padding: "0 16px",
            borderRadius: "14px",
            border: "none",
            background: "#F97316",
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

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#F9FAFB" }}>
            <th style={{ padding: "18px", textAlign: "left" }}>Référence</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Citoyen</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Type de demande</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Service</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Agent</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "18px", textAlign: "left" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              style={{
                borderTop: "1px solid #F3F4F6",
              }}
            >
              <td style={{ padding: "18px", fontWeight: 600 }}>
                {request.id}
              </td>

              <td style={{ padding: "18px" }}>
                {request.citizen}
              </td>

              <td style={{ padding: "18px" }}>
                {request.document}
              </td>

              <td style={{ padding: "18px" }}>
                {request.service}
              </td>

              <td style={{ padding: "18px" }}>
                {request.agent}
              </td>

              <td style={{ padding: "18px" }}>
                <StatusBadge status={request.status} />
              </td>

              <td style={{ padding: "18px" }}>
                {request.date}
              </td>

              <td style={{ padding: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={() => navigate(`/admin/requests/${request.id}`)}
                    style={{
                      border: "1px solid #E5E7EB",
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <Eye size={15} />
                  </button>

                  <button
                    style={{
                      border: "none",
                      background: "#FFF7ED",
                      color: "#F97316",
                      borderRadius: "10px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <UserCheck size={15} />
                  </button>

                  <button
                    style={{
                      border: "none",
                      background: "#DCFCE7",
                      color: "#15803D",
                      borderRadius: "10px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <CheckCircle2 size={15} />
                  </button>

                  <button
                    style={{
                      border: "none",
                      background: "#FEE2E2",
                      color: "#DC2626",
                      borderRadius: "10px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <XCircle size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
