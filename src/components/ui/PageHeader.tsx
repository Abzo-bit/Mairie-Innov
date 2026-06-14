type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div
      style={{
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 12px",
          borderRadius: "999px",
          background: "#EFF6FF",
          color: "#2563EB",
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "14px",
        }}
      >
        Administration numérique
      </div>

      <h1
        style={{
          margin: 0,
          color: "#0F172A",
          fontSize: "42px",
          fontWeight: 700,
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          marginTop: "10px",
          marginBottom: 0,
          color: "#64748B",
          fontSize: "18px",
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
