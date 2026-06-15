import {
  Building2,
  Users,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";

const departments = [
  {
    name: "État Civil",
    description: "Actes de naissance, mariage et décès",
    agents: 8,
    dossiers: 542,
    responsable: "Aminata Ndiaye",
  },
  {
    name: "Urbanisme",
    description: "Permis de construire et aménagement",
    agents: 6,
    dossiers: 231,
    responsable: "Moussa Diallo",
  },
  {
    name: "Affaires Sociales",
    description: "Aides sociales et accompagnement",
    agents: 10,
    dossiers: 412,
    responsable: "Khadija Sow",
  },
  {
    name: "Voirie",
    description: "Routes, éclairage public et assainissement",
    agents: 5,
    dossiers: 168,
    responsable: "Ousmane Fall",
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
          value="100%"
          trend="Stable"
          icon={CheckCircle2}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {departments.map((department) => (
          <div
            key={department.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              {department.name}
            </h3>

            <p
              style={{
                color: "#64748B",
                marginBottom: "20px",
              }}
            >
              {department.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Agents</span>
              <strong>{department.agents}</strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Dossiers</span>
              <strong>{department.dossiers}</strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span>Responsable</span>
              <strong>{department.responsable}</strong>
            </div>

            <div
              style={{
                background: "#DCFCE7",
                color: "#15803D",
                padding: "8px 14px",
                borderRadius: "999px",
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Service actif
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
