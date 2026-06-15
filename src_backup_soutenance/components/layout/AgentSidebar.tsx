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
        width: "280px",
        height: "100vh",
        position: "sticky",
        top: 0,
        background: "#FFFFFF",
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        padding: "24px 18px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              background: "#F97316",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            T
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "#1F2937",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              Teranga Agent
            </h2>

            <p
              style={{
                margin: 0,
                color: "#6B7280",
                fontSize: "12px",
              }}
            >
              Gestion des dossiers
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          marginTop: "32px",
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
              gap: "14px",
              padding: "14px 16px",
              borderRadius: "14px",
              textDecoration: "none",
              color: isActive ? "#F97316" : "#6B7280",
              background: isActive ? "#FFF7ED" : "transparent",
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
          borderTop: "1px solid #E5E7EB",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            background: "#F8FAFC",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div style={{ fontWeight: 700 }}>
            Agent
          </div>

          <div
            style={{
              color: "#6B7280",
              fontSize: "12px",
            }}
          >
            Collectivité Territoriale
          </div>
        </div>
      </div>
    </aside>
  );
}
