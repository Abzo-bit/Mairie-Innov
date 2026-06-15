import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { mois: "Jan", demandes: 120, traitees: 95 },
  { mois: "Fév", demandes: 180, traitees: 150 },
  { mois: "Mar", demandes: 220, traitees: 200 },
  { mois: "Avr", demandes: 260, traitees: 230 },
  { mois: "Mai", demandes: 300, traitees: 280 },
  { mois: "Juin", demandes: 340, traitees: 310 },
];

export default function RequestsChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <XAxis
          dataKey="mois"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="demandes"
          stroke="#F97316"
          strokeWidth={3}
          dot={{ r: 4 }}
        />

        <Line
          type="monotone"
          dataKey="traitees"
          stroke="#10B981"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
