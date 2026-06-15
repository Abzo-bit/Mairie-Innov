type Props = {
  status: string;
};

export default function StatusBadge({
  status,
}: Props) {
  const getStyles = () => {
    switch (status) {
      case "Traitée":
      case "Validée":
        return {
          background: "#DCFCE7",
          color: "#15803D",
        };

      case "En cours":
        return {
          background: "#FFF7ED",
          color: "#EA580C",
        };

      case "En attente":
        return {
          background: "#FEF3C7",
          color: "#D97706",
        };

      case "Rejetée":
        return {
          background: "#FEE2E2",
          color: "#DC2626",
        };

      default:
        return {
          background: "#E2E8F0",
          color: "#475569",
        };
    }
  };

  const styles = getStyles();

  return (
    <span
      style={{
        background: styles.background,
        color: styles.color,
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}
