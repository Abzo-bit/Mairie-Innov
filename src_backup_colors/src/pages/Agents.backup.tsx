import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

import {
  Users,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Trophy,
} from "lucide-react";

const agents = [
  {
    id: "AGT-001",
    nom: "Aminata Ndiaye",
    service: "État Civil",
    dossiers: 142,
    performance: 94,
    statut: "Actif",
  },
  {
    id: "AGT-002",
    nom: "Moussa Diallo",
    service: "Urbanisme",
    dossiers: 87,
    performance: 91,
    statut: "Actif",
  },
  {
    id: "AGT-003",
    nom: "Khadija Sow",
    service: "Affaires Sociales",
    dossiers: 121,
    performance: 96,
    statut: "Actif",
  },
];

export default function Agents() {
  return (
    <div>
      <PageHeader
        title="Gestion des agents"
        subtitle="Suivi des performances et affectations"
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
          title="Agents"
          value="38"
          trend="+2%"
          icon={Users}
        />

        <StatCard
          title="Services"
          value="12"
          trend="+1"
          icon={Briefcase}
        />

        <StatCard
          title="Dossiers traités"
          value="2 845"
          trend="+14%"
          icon={CheckCircle2}
        />

        <StatCard
          title="Performance"
          value="94%"
          trend="+3%"
          icon={TrendingUp}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              background: "#FEF3C7",
              color: "#D97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Trophy size={28} />
          </div>

          <div>
            <h3 style={{ margin: 0 }}>
              Meilleur agent du mois
            </h3>

            <p
              style={{
                marginTop: "6px",
                color: "#64748B",
              }}
            >
              Khadija Sow • 96% de performance
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#FFF",
          border: "1px solid #E2E8F0",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <SearchInput placeholder="Rechercher un agent..." />
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
              <th style={{ padding: "18px", textAlign: "left" }}>
                Agent
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Service
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Dossiers
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Performance
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Statut
              </th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                style={{
                  borderTop: "1px solid #E2E8F0",
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
                        background: "#FFF7ED",
                        color: "#1E3A8A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {agent.nom.charAt(0)}
                    </div>

                    <div>
                      <div style={{ fontWeight: 600 }}>
                        {agent.nom}
                      </div>

                      <div
                        style={{
                          fontSize: "13px",
                          color: "#64748B",
                        }}
                      >
                        {agent.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ padding: "18px" }}>
                  {agent.service}
                </td>

                <td style={{ padding: "18px" }}>
                  {agent.dossiers}
                </td>

                <td style={{ padding: "18px", width: "240px" }}>
                  <div
                    style={{
                      height: "10px",
                      background: "#E2E8F0",
                      borderRadius: "999px",
                      overflow: "hidden",
                      marginBottom: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: `${agent.performance}%`,
                        height: "100%",
                        background: "#F97316",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {agent.performance}%
                  </span>
                </td>

                <td style={{ padding: "18px" }}>
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {agent.statut}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
