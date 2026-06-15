export default function RequestFilters() {
  const filters = [
    "Toutes",
    "En attente",
    "En cours",
    "Validées",
    "Rejetées",
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      {filters.map((filter, index) => (
        <button
          key={filter}
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            border:
              index === 0
                ? "none"
                : "1px solid #E2E8F0",
            background:
              index === 0
                ? "#F97316"
                : "#FFFFFF",
            color:
              index === 0
                ? "#FFFFFF"
                : "#475569",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
