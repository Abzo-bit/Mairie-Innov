import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

import {
  Users,
  Briefcase,
  CheckCircle2,
  TrendingUp,
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
        subtitle="Administration des agents municipaux"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            background: "#F97316",
            color: "#FFFFFF",
            border: "none",
            padding: "12px 18px",
            borderRadius: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + Nouvel agent
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
        <StatCard title="Agents" value="38" trend="+2%" icon={Users} />
        <StatCard title="Services" value="12" trend="+1" icon={Briefcase} />
        <StatCard title="Dossiers" value="2 845" trend="+14%" icon={CheckCircle2} />
        <StatCard title="Performance" value="94%" trend="+3%" icon={TrendingUp} />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
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
            <tr style={{ background: "#F9FAFB" }}>
              <th style={{ padding: "18px", textAlign: "left" }}>Agent</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Service</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Dossiers</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Performance</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px" }}>
                  <strong>{agent.nom}</strong>
                  <br />
                  <span
                    style={{
                      color: "#6B7280",
                      fontSize: "13px",
                    }}
                  >
                    {agent.id}
                  </span>
                </td>

                <td style={{ padding: "18px" }}>{agent.service}</td>

                <td style={{ padding: "18px" }}>{agent.dossiers}</td>

                <td style={{ padding: "18px" }}>
                  {agent.performance}%
                </td>

                <td style={{ padding: "18px" }}>
                  <span
                    style={{
                      background: "#FFF7ED",
                      color: "#F97316",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {agent.statut}
                  </span>
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
                        background: "#FFF7ED",
                        color: "#F97316",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Modifier
                    </button>

                    <button
                      style={{
                        background: "#F3F4F6",
                        color: "#374151",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "8px",
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
