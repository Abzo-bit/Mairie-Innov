type Props = {
  time: string;
  label: string;
};

export default function TimelineItem({
  time,
  label,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#2563EB",
          marginTop: "6px",
        }}
      />

      <div>
        <div
          style={{
            fontSize: "12px",
            color: "#64748B",
          }}
        >
          {time}
        </div>

        <div
          style={{
            fontWeight: 500,
            color: "#0F172A",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
