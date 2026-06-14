type Props = {
  value: number;
  color?: string;
};

export default function ProgressBar({
  value,
  color = "#2563EB",
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        background: "#E2E8F0",
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: color,
          borderRadius: "999px",
          transition: "all .3s ease",
        }}
      />
    </div>
  );
}
