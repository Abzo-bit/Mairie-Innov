import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import PageCard from "../components/ui/PageCard";
import RequestsChart from "../components/charts/RequestsChart";

import KpiCard from "../components/common/KpiCard";
import ProgressBar from "../components/common/ProgressBar";
import TimelineItem from "../components/common/TimelineItem";

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Tableau de bord"
        subtitle="Suivi global des activités de la collectivité"
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
          title="État Civil"
          value="542"
          trend="+12% ce mois"
          icon={FileText}
        />

        <StatCard
          title="Urbanisme"
          value="231"
          trend="+4% cette semaine"
          icon={Clock3}
        />

        <StatCard
          title="Voirie"
          value="168"
          trend="+18% ce mois"
          icon={CheckCircle2}
        />

        <StatCard
          title="Réclamations"
          value="94"
          trend="-7% cette semaine"
          icon={AlertTriangle}
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
          title="Évolution des activités"
          subtitle="Demandes et traitements sur les derniers mois"
        >
          <RequestsChart />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <KpiCard
              title="Demandes"
              value="1 245"
            />

            <KpiCard
              title="Traitées"
              value="875"
            />

            <KpiCard
              title="Réclamations"
              value="49"
            />
          </div>
        </PageCard>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <PageCard
            title="Dossiers prioritaires"
            subtitle="Suivi des urgences"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div>
                <strong>Urgent</strong>
                <div>Acte de naissance</div>
                <small>Mamadou Diop</small>
              </div>

              <div>
                <strong>Moyen</strong>
                <div>Réclamation voirie</div>
                <small>Dakar Plateau</small>
              </div>

              <div>
                <strong>Normal</strong>
                <div>Certificat résidence</div>
                <small>Fatou Ndiaye</small>
              </div>
            </div>
          </PageCard>

          <PageCard
            title="Activité récente"
            subtitle="Dernières opérations"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TimelineItem
                time="12:45"
                label="Acte de naissance validé"
              />

              <TimelineItem
                time="11:30"
                label="Réclamation affectée"
              />

              <TimelineItem
                time="10:15"
                label="Certificat délivré"
              />

              <TimelineItem
                time="09:20"
                label="Document retrouvé"
              />

              <TimelineItem
                time="08:10"
                label="Nouveau citoyen enregistré"
              />
            </div>
          </PageCard>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <PageCard
          title="Répartition des demandes"
          subtitle="Par service"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              État Civil - 42%
              <ProgressBar value={42} />
            </div>

            <div>
              Urbanisme - 28%
              <ProgressBar value={28} />
            </div>

            <div>
              Affaires Sociales - 18%
              <ProgressBar value={18} />
            </div>

            <div>
              Voirie - 12%
              <ProgressBar value={12} />
            </div>
          </div>
        </PageCard>

        <PageCard
          title="Performance des agents"
          subtitle="Traitement moyen"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              Aminata Ndiaye - 94%
              <ProgressBar
                value={94}
                color="#16A34A"
              />
            </div>

            <div>
              Khadija Sow - 96%
              <ProgressBar
                value={96}
                color="#16A34A"
              />
            </div>

            <div>
              Moussa Diallo - 91%
              <ProgressBar
                value={91}
                color="#16A34A"
              />
            </div>
          </div>
        </PageCard>
      </div>
    </div>
  );
}
