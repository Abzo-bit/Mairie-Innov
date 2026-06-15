type Props = {
  title: string;
  value: string;
};

export default function KpiCard({
  title,
  value,
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "18px",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}
