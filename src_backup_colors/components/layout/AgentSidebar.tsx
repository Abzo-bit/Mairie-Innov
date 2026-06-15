import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  FolderOpen,
  User,
} from "lucide-react";

const menuItems = [
  {
    label: "Tableau de bord",
    path: "/agent/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Mes demandes",
    path: "/agent/requests",
    icon: <FileText size={20} />,
  },
  {
    label: "Réclamations",
    path: "/agent/complaints",
    icon: <AlertTriangle size={20} />,
  },
  {
    label: "Documents perdus",
    path: "/agent/lost-documents",
    icon: <FolderOpen size={20} />,
  },
  {
    label: "Mon profil",
    path: "/agent/profile",
    icon: <User size={20} />,
  },
];

export default function AgentSidebar() {
  return (
    <aside
      style={{
        width: "240px",
        height: "100vh",
        position: "sticky",
        top: 0,
        background: "#0F172A",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: 800,
        }}
      >
        Teranga
      </h2>

      <div
        style={{
          flex: 1,
          marginTop: "30px",
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
              gap: "14px",
              padding: "13px 14px",
              borderRadius: "14px",
              textDecoration: "none",
              color: isActive ? "#FFFFFF" : "#CBD5E1",
              background: isActive
                ? "#172554"
                : "transparent",
              fontWeight: isActive ? 600 : 500,
            })}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      <div
        style={{
          background: "#172554",
          borderRadius: "16px",
          padding: "14px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
          }}
        >
          Agent
        </div>

        <div
          style={{
            color: "#CBD5E1",
            fontSize: "13px",
          }}
        >
          Collectivité Territoriale
        </div>
      </div>
    </aside>
  );
}
