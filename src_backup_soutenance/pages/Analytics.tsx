import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";

import {
  FileText,
  Users,
  AlertTriangle,
  UserCog,
} from "lucide-react";

const activityData = [
  { month: "Jan", demandes: 120, reclamations: 15 },
  { month: "Fév", demandes: 180, reclamations: 20 },
  { month: "Mar", demandes: 220, reclamations: 18 },
  { month: "Avr", demandes: 260, reclamations: 25 },
  { month: "Mai", demandes: 300, reclamations: 22 },
  { month: "Juin", demandes: 340, reclamations: 30 },
];

const statusData = [
  { name: "Validées", value: 62 },
  { name: "En cours", value: 25 },
  { name: "Rejetées", value: 13 },
];

const COLORS = [
  "#16A34A",
  "#F97316",
  "#DC2626",
];

export default function Analytics() {
  return (
    <div>
      <PageHeader
        title="Centre d'analyse"
        subtitle="Pilotage et suivi des performances administratives"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard title="État Civil" value="542" trend="+12%" icon={FileText} />

        <StatCard title="Urbanisme" value="231" trend="+8%" icon={Users} />

        <StatCard
          title="Voirie"
          value="168"
          trend="-7%"
          icon={AlertTriangle}
        />

        <StatCard title="Projets" value="12" trend="+2%" icon={UserCog} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
            height: "420px",
          }}
        >
          <h3>Évolution des activités</h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={activityData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="demandes" stroke="#F97316" />
              <Line type="monotone" dataKey="reclamations" stroke="#16A34A" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: "#FFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
            height: "420px",
          }}
        >
          <h3>Répartition des statuts</h3>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie data={statusData} dataKey="value" outerRadius={100}>
                {statusData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          background: "#FFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#FFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h4>🥇 État Civil</h4>
            <p>542 dossiers traités</p>
          </div>

          <div
            style={{
              background: "#FFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h4>🥈 Affaires Sociales</h4>
            <p>412 dossiers traités</p>
          </div>

          <div
            style={{
              background: "#FFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h4>🥉 Urbanisme</h4>
            <p>231 dossiers traités</p>
          </div>
        </div>
        <h3>Activité mensuelle</h3>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={activityData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="demandes" fill="#F97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
