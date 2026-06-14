import {
  Plus,
  Download,
  Eye,
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
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard
          title="Total citoyens"
          value="12 458"
          trend="+12% ce mois"
          icon={UsersIcon}
        />

        <StatCard
          title="Comptes validés"
          value="11 203"
          trend="+8% ce mois"
          icon={UserCheck}
        />

        <StatCard
          title="Nouveaux inscrits"
          value="254"
          trend="+18% cette semaine"
          icon={UserPlus}
        />

        <StatCard
          title="Identités vérifiées"
          value="98%"
          trend="+2% ce mois"
          icon={ShieldCheck}
        />
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

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            style={{
              padding: "12px 18px",
              borderRadius: "14px",
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
              padding: "12px 18px",
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
            <Plus size={16} />
            Ajouter citoyen
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
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
            <tr style={{ background: "#F8FAFC" }}>
              <th style={{ padding: "18px", textAlign: "left" }}>Citoyen</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Téléphone</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Rôle</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                style={{
                  borderTop: "1px solid #F1F5F9",
                }}
              >
                <td style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "14px",
                        background: "#DBEAFE",
                        color: "#1E3A8A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {user.nom.charAt(0)}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        {user.nom}
                      </div>

                      <div
                        style={{
                          fontSize: "13px",
                          color: "#64748B",
                        }}
                      >
                        {user.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ padding: "18px" }}>
                  {user.email}
                </td>

                <td style={{ padding: "18px" }}>
                  {user.telephone}
                </td>

                <td style={{ padding: "18px" }}>
                  {user.role}
                </td>

                <td style={{ padding: "18px" }}>
                  <StatusBadge status={user.statut} />
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
      </div>
    </div>
  );
}
