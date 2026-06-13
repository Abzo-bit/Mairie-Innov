import { Plus, Download, Eye } from "lucide-react";

import SearchInput from "../components/ui/SearchInput";
import StatusBadge from "../components/ui/StatusBadge";
import PageHeader from "../components/ui/PageHeader";

const users = [
  {
    id: "USR-001",
    nom: "Mamadou Diop",
    email: "mamadou.diop@mail.sn",
    telephone: "+221 77 123 45 67",
    role: "Citoyen",
    statut: "Validée",
  },
  {
    id: "USR-002",
    nom: "Fatou Ndiaye",
    email: "fatou.ndiaye@mail.sn",
    telephone: "+221 76 456 78 90",
    role: "Citoyen",
    statut: "En attente",
  },
  {
    id: "USR-003",
    nom: "Ousmane Fall",
    email: "ousmane.fall@mail.sn",
    telephone: "+221 78 111 22 33",
    role: "Citoyen",
    statut: "Validée",
  },
];

export default function Users() {
  return (
    <div>
      <PageHeader
        title="Gestion des citoyens"
        subtitle="Consultation et suivi des comptes citoyens"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "320px" }}>
          <SearchInput placeholder="Rechercher un citoyen..." />
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Download size={16} />
            Exporter
          </button>

          <button
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "none",
              background: "#1E293B",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Plus size={16} />
            Ajouter citoyen
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
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
            <tr style={{ background: "#F8FAFC" }}>
              <th style={{ padding: "16px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Nom</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Téléphone</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Rôle</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Statut</th>
              <th style={{ padding: "16px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                style={{
                  borderTop: "1px solid #E2E8F0",
                }}
              >
                <td style={{ padding: "16px" }}>{user.id}</td>
                <td style={{ padding: "16px" }}>{user.nom}</td>
                <td style={{ padding: "16px" }}>{user.email}</td>
                <td style={{ padding: "16px" }}>{user.telephone}</td>
                <td style={{ padding: "16px" }}>{user.role}</td>

                <td style={{ padding: "16px" }}>
                  <StatusBadge status={user.statut} />
                </td>

                <td style={{ padding: "16px" }}>
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Eye size={18} />
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
