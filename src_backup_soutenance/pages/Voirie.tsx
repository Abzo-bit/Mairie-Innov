import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import RequestFilters from "../components/ui/RequestFilters";
import VoirieTable from "../components/tables/VoirieTable";

export default function Requests() {
  return (
    <div>
      <PageHeader
        title="Voirie"
        subtitle="Gestion des signalements et interventions"
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
          title="Signalements"
          value="168"
          trend="+12% ce mois"
          icon={FileText}
        />

        <StatCard
          title="En intervention"
          value="41"
          trend="+4% cette semaine"
          icon={Clock3}
        />

        <StatCard
          title="Résolus"
          value="118"
          trend="+18% ce mois"
          icon={CheckCircle2}
        />

        <StatCard
          title="Urgents"
          value="9"
          trend="-7% cette semaine"
          icon={AlertTriangle}
        />
      </div>
      <RequestFilters />
      <VoirieTable />
    </div>
  );
}
