type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1
        style={{
          color: "#0F172A",
          marginBottom: "6px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#64748B",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
