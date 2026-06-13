import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  FolderOpen,
  QrCode,
  BarChart3,
  Users,
  UserCog,
  Building2,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    label: "Tableau de bord",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Demandes",
    path: "/requests",
    icon: <FileText size={20} />,
  },
  {
    label: "Réclamations",
    path: "/complaints",
    icon: <AlertTriangle size={20} />,
  },
  {
    label: "Citoyens",
    path: "/users",
    icon: <Users size={20} />,
  },
  {
    label: "Agents",
    path: "/agents",
    icon: <UserCog size={20} />,
  },
  {
    label: "Départements",
    path: "/departments",
    icon: <Building2 size={20} />,
  },
  {
    label: "Documents perdus",
    path: "/lost-documents",
    icon: <FolderOpen size={20} />,
  },
  {
    label: "Vérification QR",
    path: "/qr-verification",
    icon: <QrCode size={20} />,
  },
  {
    label: "Statistiques",
    path: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    label: "Paramètres",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1E293B",
        color: "#fff",
        padding: "24px 16px",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          paddingLeft: "8px",
        }}
      >
        AdminGov
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
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
              padding: "12px 14px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#FFFFFF",
              background: isActive
                ? "#334155"
                : "transparent",
              fontWeight: isActive ? 600 : 500,
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
