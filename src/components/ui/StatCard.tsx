type Props = {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
};

export default function StatCard({
  title,
  value,
  trend,
  icon: Icon,
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
            fontWeight: 500,
          }}
        >
          {title}
        </p>

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: "#F1F5F9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} />
        </div>
      </div>

      <h2
        style={{
          margin: 0,
          color: "#0F172A",
          fontSize: "30px",
          fontWeight: 700,
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
