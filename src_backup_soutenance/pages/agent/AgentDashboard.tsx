import {
  FileText,
  Clock3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import PageCard from "../../components/ui/PageCard";
import StatusBadge from "../../components/common/StatusBadge";
import TimelineItem from "../../components/common/TimelineItem";

export default function AgentDashboard() {
  return (
    <div>
      <PageHeader
        title="Espace Agent"
        subtitle="Gestion de vos dossiers et tâches"
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
          title="Urgents"
          value="8"
          trend="Priorité haute"
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
          marginBottom: "24px",
        }}
      >
        <PageCard
          title="Mes dossiers affectés"
          subtitle="Dossiers à traiter aujourd'hui"
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px" }}>Réf</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Type</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Citoyen</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Statut</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>ACT-00125</td>
                <td style={{ padding: "12px" }}>Naissance</td>
                <td style={{ padding: "12px" }}>Mamadou Diop</td>
                <td style={{ padding: "12px" }}>
                  <StatusBadge status="En attente" />
                </td>
              </tr>

              <tr>
                <td style={{ padding: "12px" }}>RES-00084</td>
                <td style={{ padding: "12px" }}>Résidence</td>
                <td style={{ padding: "12px" }}>Fatou Ndiaye</td>
                <td style={{ padding: "12px" }}>
                  <StatusBadge status="En cours" />
                </td>
              </tr>

              <tr>
                <td style={{ padding: "12px" }}>MAR-00018</td>
                <td style={{ padding: "12px" }}>Mariage</td>
                <td style={{ padding: "12px" }}>Ibrahima Fall</td>
                <td style={{ padding: "12px" }}>
                  <StatusBadge status="Traitée" />
                </td>
              </tr>
            </tbody>
          </table>
        </PageCard>

        <PageCard
          title="Activité récente"
          subtitle="Dernières actions"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <TimelineItem
              time="11:45"
              label="Acte de naissance validé"
            />

            <TimelineItem
              time="10:30"
              label="Certificat traité"
            />

            <TimelineItem
              time="09:20"
              label="Réclamation consultée"
            />

            <TimelineItem
              time="08:15"
              label="Document généré"
            />
          </div>
        </PageCard>
      </div>
    </div>
  );
}
