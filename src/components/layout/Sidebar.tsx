import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ReportIcon from "@mui/icons-material/Report";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BarChartIcon from "@mui/icons-material/BarChart";

const menuItems = [
  {
    label: "Tableau de bord",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Demandes",
    path: "/requests",
    icon: <DescriptionIcon />,
  },
  {
    label: "Réclamations",
    path: "/complaints",
    icon: <ReportIcon />,
  },
  {
    label: "Documents",
    path: "/lost-documents",
    icon: <FolderOpenIcon />,
  },
  {
    label: "Statistiques",
    path: "/analytics",
    icon: <BarChartIcon />,
  },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyles: React.CSSProperties = {
    width: "240px",
    minHeight: "100vh",
    background: "#1E293B",
    color: "#fff",
    padding: "20px",
    transition: "all 0.3s ease",
    zIndex: 999,
    position: isMobile ? "fixed" : "relative",
    top: 0,
    left: isMobile ? (isOpen ? "0" : "-240px") : "0",
    boxShadow: isMobile && isOpen ? "4px 0 10px rgba(0,0,0,0.2)" : "none",
  };

  return (
    <div style={sidebarStyles}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ margin: 0 }}>AdminGov</h2>
        {isMobile && (
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              if (isMobile) onClose();
            }}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#FFFFFF",
              background: isActive ? "#334155" : "transparent",
              fontWeight: isActive ? 600 : 400,
              transition: "0.2s",
            })}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
