import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <h3
        style={{
          color: "#0F172A",
        }}
      >
        Tableau de bord
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#F1F5F9",
            padding: "8px 12px",
            borderRadius: "10px",
            minWidth: "260px",
          }}
        >
          <SearchIcon
            style={{
              color: "#64748B",
            }}
          />

          <input
            placeholder="Rechercher..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
            }}
          />
        </div>

        <NotificationsNoneIcon />

        <SettingsOutlinedIcon />

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#1E293B",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          A
        </div>
      </div>
    </div>
  );
}
