type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageCard({ title, subtitle, children }: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #EEF2F7",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(15,23,42,.03)",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#0F172A",
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          style={{
            color: "#64748B",
            marginTop: "6px",
            marginBottom: "18px",
            fontSize: "14px",
          }}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
