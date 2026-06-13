import { NavLink } from "react-router-dom";

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
    label: "Documents perdus",
    path: "/lost-documents",
    icon: <FolderOpenIcon />,
  },
  {
    label: "Vérification QR",
    path: "/qr-verification",
    icon: <QrCodeIcon />,
  },
  {
    label: "Statistiques",
    path: "/analytics",
    icon: <BarChartIcon />,
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#1E293B",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
        }}
      >
        AdminGov
      </h2>

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
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#FFFFFF",
              background: isActive
                ? "#334155"
                : "transparent",
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
