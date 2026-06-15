import {
  Building2,
  Users,
  FolderOpen,
  CheckCircle2,
  Pencil,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

const departments = [
  {
    id: "DEP-001",
    name: "État Civil",
    responsable: "Aminata Ndiaye",
    agents: 8,
    dossiers: 542,
    status: "Actif",
  },
  {
    id: "DEP-002",
    name: "Urbanisme",
    responsable: "Moussa Diallo",
    agents: 6,
    dossiers: 231,
    status: "Actif",
  },
  {
    id: "DEP-003",
    name: "Affaires Sociales",
    responsable: "Khadija Sow",
    agents: 10,
    dossiers: 412,
    status: "Actif",
  },
  {
    id: "DEP-004",
    name: "Voirie",
    responsable: "Ousmane Fall",
    agents: 5,
    dossiers: 168,
    status: "Inactif",
  },
];

export default function Departments() {
  return (
    <div>
      <PageHeader
        title="Gestion des départements"
        subtitle="Organisation des services administratifs"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px",
        }}
      >
        <button
          style={{
            background: "#F97316",
            color: "#FFFFFF",
            border: "none",
            padding: "12px 18px",
            borderRadius: "14px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          + Nouveau département
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard
          title="Départements"
          value="4"
          trend="+1"
          icon={Building2}
        />

        <StatCard
          title="Agents"
          value="29"
          trend="+2%"
          icon={Users}
        />

        <StatCard
          title="Dossiers"
          value="1 353"
          trend="+11%"
          icon={FolderOpen}
        />

        <StatCard
          title="Services actifs"
          value="75%"
          trend="Stable"
          icon={CheckCircle2}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <SearchInput placeholder="Rechercher un département..." />
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
                Département
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Responsable
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Agents
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Dossiers
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
            {departments.map((department) => (
              <tr
                key={department.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px" }}>
                  <div style={{ fontWeight: 600 }}>
                    {department.name}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    {department.id}
                  </div>
                </td>

                <td style={{ padding: "18px" }}>
                  {department.responsable}
                </td>

                <td style={{ padding: "18px" }}>
                  {department.agents}
                </td>

                <td style={{ padding: "18px" }}>
                  {department.dossiers}
                </td>

                <td style={{ padding: "18px" }}>
                  <span
                    style={{
                      background:
                        department.status === "Actif"
                          ? "#DCFCE7"
                          : "#FEE2E2",
                      color:
                        department.status === "Actif"
                          ? "#15803D"
                          : "#DC2626",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {department.status}
                  </span>
                </td>

                <td style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{
                        border: "none",
                        background: "#FFF7ED",
                        color: "#F97316",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Pencil size={14} />
                      Modifier
                    </button>

                    <button
                      style={{
                        border: "none",
                        background: "#F3F4F6",
                        color: "#374151",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Désactiver
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
