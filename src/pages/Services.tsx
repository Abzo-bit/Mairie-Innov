import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Users,
  FolderOpen,
  CheckCircle2,
  Pencil,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

const initialServices = [
  {
    id: "SER-001",
    name: "État Civil",
    responsable: "Aminata Ndiaye",
    agents: 8,
    dossiers: 542,
    status: "Actif",
  },
  {
    id: "SER-002",
    name: "Urbanisme",
    responsable: "Moussa Diallo",
    agents: 6,
    dossiers: 231,
    status: "Actif",
  },
  {
    id: "SER-003",
    name: "Projets d'investissement",
    responsable: "Cheikh Diop",
    agents: 4,
    dossiers: 12,
    status: "Actif",
  },
  {
    id: "SER-004",
    name: "Voirie",
    responsable: "Ousmane Fall",
    agents: 5,
    dossiers: 168,
    status: "Actif",
  },
  {
    id: "SER-005",
    name: "Documents perdus",
    responsable: "Fatou Ndiaye",
    agents: 3,
    dossiers: 94,
    status: "Actif",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [services, setServices] = useState(initialServices);
  const [name, setName] = useState("");
  const [responsable, setResponsable] = useState("");

  const handleCreateService = () => {
    if (!name || !responsable) return;

    setServices([
      ...services,
      {
        id: `SER-${String(services.length + 1).padStart(3, "0")}`,
        name,
        responsable,
        agents: 0,
        dossiers: 0,
        status: "Actif",
      },
    ]);

    setName("");
    setResponsable("");
    setShowCreateModal(false);
  };
  return (
    <div>
      <PageHeader
        title="Gestion des services municipaux"
        subtitle="Organisation des services municipaux"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px",
        }}
      >
          <button
            onClick={() => setShowCreateModal(true)}
            style={{
              background: "#F97316",
              color: "#FFFFFF",
              border: "none",
              padding: "12px 18px",
              borderRadius: "14px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            + Nouveau service
          </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard title="Services" value="5" trend="+1" icon={Building2} />

        <StatCard title="Agents" value="26" trend="+2%" icon={Users} />

        <StatCard
          title="Dossiers"
          value="1 047"
          trend="+11%"
          icon={FolderOpen}
        />

        <StatCard
          title="Services actifs"
          value="100%"
          trend="Stable"
          icon={CheckCircle2}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <SearchInput placeholder="Rechercher un service..." />
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F9FAFB",
              }}
            >
              <th style={{ padding: "18px", textAlign: "left" }}>Service</th>

              <th style={{ padding: "18px", textAlign: "left" }}>
                Responsable
              </th>

              <th style={{ padding: "18px", textAlign: "left" }}>Agents</th>

              <th style={{ padding: "18px", textAlign: "left" }}>Dossiers</th>

              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>

              <th style={{ padding: "18px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={service.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px" }}>
                  <div style={{ fontWeight: 600 }}>{service.name}</div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    {service.id}
                  </div>
                </td>

                <td style={{ padding: "18px" }}>{service.responsable}</td>

                <td style={{ padding: "18px" }}>{service.agents}</td>

                <td style={{ padding: "18px" }}>{service.dossiers}</td>

                <td style={{ padding: "18px" }}>
                  <span
                    style={{
                      background:
                        service.status === "Actif" ? "#DCFCE7" : "#FEE2E2",
                      color: service.status === "Actif" ? "#15803D" : "#DC2626",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {service.status}
                  </span>
                </td>

                <td style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() => navigate(`/admin/services/${service.id}`)}
                      style={{
                        border: "none",
                        background: "#FFF7ED",
                        color: "#F97316",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Pencil size={14} />
                      Modifier
                    </button>

                    <button
                      style={{
                        border: "none",
                        background: "#F3F4F6",
                        color: "#374151",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Désactiver
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showCreateModal && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                padding: "24px",
                borderRadius: "16px",
                width: "500px",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "20px",
                }}
              >
                Nouveau service
              </h2>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom du service"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "12px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              />

              <input
                value={responsable}
                onChange={(e) => setResponsable(e.target.value)}
                placeholder="Responsable"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
              >
                <button
                  onClick={() => setShowCreateModal(false)}
                  style={{
                    padding: "10px 16px",
                    border: "1px solid #E5E7EB",
                    background: "#FFFFFF",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Annuler
                </button>

                <button
                  onClick={handleCreateService}
                  style={{
                    background: "#F97316",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Créer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
