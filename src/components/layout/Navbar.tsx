import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

type Props = {
  onToggleSidebar: () => void;
};

export default function Navbar({ onToggleSidebar }: Props) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Tableau de bord";
    if (path.startsWith("/requests")) return "Demandes administratives";
    if (path.startsWith("/complaints")) return "Réclamations citoyennes";
    if (path.startsWith("/lost-documents")) return "Documents perdus";
    if (path === "/analytics") return "Statistiques & Analyses";
    if (path === "/settings") return "Paramètres";
    if (path === "/profile") return "Profil Administrateur";
    return "Mairie Innov";
  };

  return (
    <header
      style={{
        height: "84px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        alignItems: "center",
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
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          A
        </div>
      </div>
    </header>
  );
}
