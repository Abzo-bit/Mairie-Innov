import {
  FileText,
  Clock3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import PageCard from "../../components/ui/PageCard";

export default function AgentDashboard() {
  return (
    <div>
      <PageHeader
        title="Espace Agent"
        subtitle="Suivi de vos activités et dossiers"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        <StatCard
          title="Mes dossiers"
          value="32"
          trend="+4 aujourd'hui"
          icon={FileText}
        />

        <StatCard
          title="En attente"
          value="8"
          trend="2 urgents"
          icon={Clock3}
        />

        <StatCard
          title="Traités"
          value="24"
          trend="+6 aujourd'hui"
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
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
        }}
      >
        <PageCard
          title="Mes tâches du jour"
          subtitle="Dossiers à traiter"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>ACT-2026-00125 - Acte de naissance</div>
            <div>RES-2026-00084 - Certificat de résidence</div>
            <div>MAR-2026-00018 - Acte de mariage</div>
            <div>DEC-2026-00007 - Acte de décès</div>
          </div>
        </PageCard>

        <PageCard
          title="Activité récente"
          subtitle="Dernières actions"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>09:15 - Dossier validé</div>
            <div>10:20 - Dossier rejeté</div>
            <div>11:05 - Réclamation consultée</div>
            <div>11:40 - Document généré</div>
          </div>
        </PageCard>
      </div>
    </div>
  );
}
