import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  FolderOpen,
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
    label: "Documents",
    path: "/lost-documents",
    icon: <FolderOpen size={20} />,
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
            onClick={() => {
              if (isMobile) onClose();
            }}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 16px",
              borderRadius: "18px",
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
