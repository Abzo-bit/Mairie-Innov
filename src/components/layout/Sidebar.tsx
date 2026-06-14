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
    <aside
      style={{
        width: "280px",
        height: "100vh",
        position: "sticky",
        top: 0,
        background: "#0F172A",
        color: "#FFFFFF",
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
            marginBottom: "6px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              background: "#2563EB",
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
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              Teranga Admin
            </h2>

            <p
              style={{
                margin: 0,
                color: "#94A3B8",
                fontSize: "12px",
              }}
            >
              Administration numérique
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
              borderRadius: "18px",
              textDecoration: "none",
              color: isActive
                ? "#FFFFFF"
                : "#CBD5E1",
              background: isActive
                ? "#1E293B"
                : "transparent",
              fontWeight: isActive ? 600 : 500,
              transition: "all .2s ease",
            })}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid #1E293B",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
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
                background: "#2563EB",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              AD
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                }}
              >
                Abzo Dieng
              </div>

              <div
                style={{
                  color: "#94A3B8",
                  fontSize: "12px",
                }}
              >
                Super Administrateur
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
