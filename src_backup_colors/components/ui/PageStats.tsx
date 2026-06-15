type Props = {
  label: string;
  value: string;
  trend?: string;
};

export default function PageStats({ label, value, trend }: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        {label}
      </p>

      <h2
        style={{
          margin: "10px 0",
          fontSize: "30px",
          color: "#0F172A",
        }}
      >
        {value}
      </h2>

      {trend && (
        <span
          style={{
            color: "#16A34A",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          {trend}
        </span>
      )}
    </div>
  );
}
