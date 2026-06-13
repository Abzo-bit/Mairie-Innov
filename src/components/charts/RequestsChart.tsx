import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    mois: "Jan",
    demandes: 120,
    traitees: 95,
    reclamations: 15,
  },
  {
    mois: "Fév",
    demandes: 180,
    traitees: 150,
    reclamations: 20,
  },
  {
    mois: "Mar",
    demandes: 220,
    traitees: 200,
    reclamations: 18,
  },
  {
    mois: "Avr",
    demandes: 260,
    traitees: 230,
    reclamations: 25,
  },
  {
    mois: "Mai",
    demandes: 300,
    traitees: 280,
    reclamations: 22,
  },
  {
    mois: "Juin",
    demandes: 340,
    traitees: 310,
    reclamations: 30,
  },
];

export default function RequestsChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="mois" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="demandes"
          stroke="#2563EB"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="traitees"
          stroke="#16A34A"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="reclamations"
          stroke="#F59E0B"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
