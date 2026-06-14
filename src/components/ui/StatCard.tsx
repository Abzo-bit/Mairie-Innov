type Props = {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
};

export default function StatCard({ title, value, trend, icon: Icon }: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        transition: "all .25s ease",
        boxShadow: "0 1px 3px rgba(15,23,42,.04)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: "#64748B",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {title}
          </p>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#0F172A",
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            {value}
          </h2>
        </div>

        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={24} color="#2563EB" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#22C55E",
          }}
        />

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
    </div>
  );
}
