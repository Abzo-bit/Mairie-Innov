import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import RequestFilters from "../components/ui/RequestFilters";
import RequestsTable from "../components/tables/RequestsTable";

export default function Requests() {
  return (
    <div>
      <PageHeader
        title="Demandes administratives"
        subtitle="Gestion et suivi des demandes citoyennes"
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
          title="Total demandes"
          value="1 245"
          trend="+12% ce mois"
          icon={FileText}
        />

        <StatCard
          title="En attente"
          value="321"
          trend="+4% cette semaine"
          icon={Clock3}
        />

        <StatCard
          title="Validées"
          value="875"
          trend="+18% ce mois"
          icon={CheckCircle2}
        />

        <StatCard
          title="Réclamations liées"
          value="49"
          trend="-7% cette semaine"
          icon={AlertTriangle}
        />
      </div>
      <RequestFilters />
      <RequestsTable />
    </div>
  );
}
