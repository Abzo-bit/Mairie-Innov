import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import RequestFilters from "../components/ui/RequestFilters";
import UrbanismeTable from "../components/tables/UrbanismeTable";

export default function Requests() {
  return (
    <div>
      <PageHeader
        title="Urbanisme"
        subtitle="Gestion des demandes d urbanisme"
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
          title="Demandes urbanisme"
          value="231"
          trend="+12% ce mois"
          icon={FileText}
        />

        <StatCard
          title="En étude"
          value="54"
          trend="+4% cette semaine"
          icon={Clock3}
        />

        <StatCard
          title="Autorisées"
          value="162"
          trend="+18% ce mois"
          icon={CheckCircle2}
        />

        <StatCard
          title="Rejetées"
          value="15"
          trend="-7% cette semaine"
          icon={AlertTriangle}
        />
      </div>
      <RequestFilters />
      <UrbanismeTable />
    </div>
  );
}
