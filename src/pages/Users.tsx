import {
  Download,
  Eye,
  Lock,
  Unlock,
  Users as UsersIcon,
  UserCheck,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

import SearchInput from "../components/ui/SearchInput";
import StatusBadge from "../components/ui/StatusBadge";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";

const users = [
  {
    id: "USR-001",
    nom: "Mamadou Diop",
    nci: "1234567890123",
    telephone: "+221 77 123 45 67",
    statut: "Validée",
  },
  {
    id: "USR-002",
    nom: "Fatou Ndiaye",
    nci: "2345678901234",
    telephone: "+221 76 456 78 90",
    statut: "En attente",
  },
  {
    id: "USR-003",
    nom: "Ousmane Fall",
    nci: "3456789012345",
    telephone: "+221 78 111 22 33",
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
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard title="Total citoyens" value="12 458" trend="+12%" icon={UsersIcon} />
        <StatCard title="Comptes validés" value="11 203" trend="+8%" icon={UserCheck} />
        <StatCard title="Nouveaux inscrits" value="254" trend="+18%" icon={UserPlus} />
        <StatCard title="Identités vérifiées" value="98%" trend="+2%" icon={ShieldCheck} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "350px" }}>
          <SearchInput placeholder="Rechercher un citoyen..." />
        </div>

        <button
          style={{
            padding: "12px 18px",
            borderRadius: "14px",
            border: "1px solid #E5E7EB",
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
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
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
            <tr style={{ background: "#F9FAFB" }}>
              <th style={{ padding: "18px", textAlign: "left" }}>Citoyen</th>
              <th style={{ padding: "18px", textAlign: "left" }}>NCI</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Téléphone</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderTop: "1px solid #F1F5F9" }}>
                <td style={{ padding: "18px" }}>
                  <strong>{user.nom}</strong>
                  <br />
                  <span style={{ color: "#6B7280", fontSize: "13px" }}>
                    {user.id}
                  </span>
                </td>

                <td style={{ padding: "18px" }}>{user.nci}</td>

                <td style={{ padding: "18px" }}>{user.telephone}</td>

                <td style={{ padding: "18px" }}>
                  <StatusBadge status={user.statut} />
                </td>

                <td style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                  >
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
                      <Lock size={16} />
                    </button>

                    <button
                      style={{
                        border: "none",
                        background: "#F3F4F6",
                        color: "#374151",
                        borderRadius: "10px",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <Unlock size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
