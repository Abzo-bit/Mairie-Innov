type Props = {
  title: string;
  value: string;
  trend: string;
  icon: string;
};

export default function StatCard({
  title,
  value,
  trend,
  icon,
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#64748B",
            fontSize: "14px",
            margin: 0,
          }}
        >
          {title}
        </p>

        <span
          style={{
            fontSize: "22px",
          }}
        >
          {icon}
        </span>
      </div>

      <h2
        style={{
          margin: 0,
          color: "#0F172A",
          fontSize: "28px",
        }}
      >
        {value}
      </h2>

      <span
        style={{
          color: "#16A34A",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        {trend}
      </span>
    </div>
  );
}
