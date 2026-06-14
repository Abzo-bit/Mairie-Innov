import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Menu } from "lucide-react";

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
    <div
      style={{
        height: "70px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "0 16px" : "0 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {isMobile && (
          <button
            onClick={onToggleSidebar}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
              borderRadius: "8px",
              color: "#1E293B",
            }}
          >
            <Menu size={22} />
          </button>
        )}
        <h3
          style={{
            color: "#0F172A",
            fontSize: isMobile ? "16px" : "18px",
            margin: 0,
            fontWeight: 700,
          }}
        >
          {getPageTitle()}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "12px" : "20px",
        }}
      >
        {!isMobile && (
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
        )}

        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#64748B",
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <NotificationsNoneIcon />
        </button>

        <Link
          to="/settings"
          style={{
            color: "#64748B",
            display: "flex",
            alignItems: "center",
            padding: "4px",
            textDecoration: "none",
          }}
        >
          <SettingsOutlinedIcon />
        </Link>

        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#1E293B",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          DL
        </div>
      </div>
    </div>
  );
}
