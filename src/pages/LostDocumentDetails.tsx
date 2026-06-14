import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Phone,
  FileText,
  Check,
  AlertTriangle,
  Clock,
  Navigation,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import ActionButton from "../components/ui/ActionButton";
import { mockLostDocuments } from "./LostDocuments";

export default function LostDocumentDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find document or fallback to first mock document
  const initialDoc = mockLostDocuments.find((d) => d.id === id) || mockLostDocuments[0];

  const [doc, setDoc] = useState(initialDoc);
  const [timeline, setTimeline] = useState([
    { title: "Déclaration enregistrée", date: doc.createdAt, description: `Par ${doc.reporter}`, active: true },
    { title: "Validation administrative", date: doc.date + " à 12:00", description: "Vérifiée par l'agent de mairie", active: doc.status !== "Déclaré" },
    { title: "Document retrouvé / Localisé", date: doc.date + " à 14:00", description: `Disponibilité confirmée à : ${doc.locationName}`, active: doc.status === "Retrouvé" || doc.status === "Réclamé" || doc.status === "Restitué" },
    { title: "Remis au propriétaire", date: doc.status === "Restitué" ? doc.date + " à 16:30" : "", description: "Dossier clôturé", active: doc.status === "Restitué" },
  ]);

  const updateStatus = (newStatus: string) => {
    const updatedDoc = { ...doc, status: newStatus };
    setDoc(updatedDoc);

    // Update timeline
    const nowStr = new Date().toLocaleDateString("fr-FR") + " à " + new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' });
    const newTimeline = [...timeline];

    if (newStatus === "Retrouvé") {
      newTimeline[1].active = true;
      newTimeline[2].active = true;
      newTimeline[2].date = nowStr;
    } else if (newStatus === "Réclamé") {
      newTimeline[1].active = true;
      newTimeline[2].active = true;
      newTimeline[2].date = nowStr;
    } else if (newStatus === "Restitué") {
      newTimeline[1].active = true;
      newTimeline[2].active = true;
      newTimeline[3].active = true;
      newTimeline[3].date = nowStr;
    }

    setTimeline(newTimeline);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Return button */}
      <div>
        <Link
          to="/lost-documents"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#64748B",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          Retour à la liste des documents
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <PageHeader
          title={`Détail Document : ${doc.id}`}
          subtitle={`Type de pièce : ${doc.type}`}
        />
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "14px", color: "#64748B", fontWeight: 500 }}>Statut actuel :</span>
          <StatusBadge status={doc.status} />
        </div>
      </div>

      {/* Grid Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
        }}
      >
        {/* Left Column: Details & Map */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Card 1: Document Details */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <FileText size={20} style={{ color: "#2563EB" }} />
              Informations sur le document
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "4px" }}>
                  TYPE DE DOCUMENT
                </label>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>{doc.type}</span>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "4px" }}>
                  NUMÉRO D'IDENTIFICATION
                </label>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>{doc.docNumber}</span>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "4px" }}>
                  TITULAIRE DÉCLARÉ
                </label>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#0F172A" }}>{doc.owner}</span>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "4px" }}>
                  DATE DE SIGNALEMENT
                </label>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>{doc.date}</span>
              </div>
            </div>

            <div style={{ marginTop: "24px", borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "8px" }}>
                DESCRIPTION & CIRCONSTANCES
              </label>
              <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.6, margin: 0 }}>
                {doc.description || "Aucune description fournie pour ce document."}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Declarant, Actions & Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Card 3: Actions (Changement de statut) */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "16px" }}>
              Actions administratives
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {doc.status === "Déclaré" && (
                <>
                  <ActionButton onClick={() => updateStatus("Retrouvé")} variant="success" style={{ width: "100%" }}>
                    <Check size={16} />
                    Valider comme Retrouvé
                  </ActionButton>
                  <ActionButton onClick={() => updateStatus("Rejetée")} variant="danger" style={{ width: "100%" }}>
                    Rejeter la déclaration
                  </ActionButton>
                </>
              )}

              {doc.status === "Retrouvé" && (
                <>
                  <ActionButton onClick={() => updateStatus("Réclamé")} variant="primary" style={{ width: "100%" }}>
                    Marquer comme Réclamé
                  </ActionButton>
                  <ActionButton onClick={() => updateStatus("Restitué")} variant="success" style={{ width: "100%" }}>
                    Restituer au propriétaire
                  </ActionButton>
                </>
              )}

              {doc.status === "Réclamé" && (
                <ActionButton onClick={() => updateStatus("Restitué")} variant="success" style={{ width: "100%" }}>
                  Confirmer la Restitution
                </ActionButton>
              )}

              {doc.status === "Restitué" && (
                <div style={{ textAlign: "center", padding: "12px", background: "#DCFCE7", color: "#15803D", borderRadius: "10px", fontSize: "14px", fontWeight: 600 }}>
                  ✓ Dossier entièrement restitué et clôturé
                </div>
              )}

              {doc.status === "Rejetée" && (
                <div style={{ textAlign: "center", padding: "12px", background: "#FEE2E2", color: "#DC2626", borderRadius: "10px", fontSize: "14px", fontWeight: 600 }}>
                  ✗ Déclaration rejetée par l'administration
                </div>
              )}
            </div>
          </div>

          {/* Card 4: Declarant Details */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <User size={18} style={{ color: "#2563EB" }} />
              Informations déclarant
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "2px" }}>
                  NOM COMPLET
                </label>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#0F172A" }}>{doc.reporter}</span>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "#64748B", display: "block", marginBottom: "2px" }}>
                  TÉLÉPHONE
                </label>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#0F172A", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Phone size={14} style={{ color: "#64748B" }} />
                  {doc.reporterPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Timeline */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock size={18} style={{ color: "#2563EB" }} />
              Historique du dossier
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", paddingLeft: "16px" }}>
              {/* Vertical line indicator */}
              <div
                style={{
                  position: "absolute",
                  left: "4px",
                  top: "8px",
                  bottom: "8px",
                  width: "2px",
                  background: "#E2E8F0",
                }}
              ></div>

              {timeline.map((step, index) => (
                <div key={index} style={{ position: "relative" }}>
                  {/* Circle indicator */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-16px",
                      top: "4px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: step.active ? "#2563EB" : "#CBD5E1",
                      border: "2px solid #FFFFFF",
                      boxShadow: "0 0 0 2px " + (step.active ? "#DBEAFE" : "#F1F5F9"),
                      zIndex: 2,
                    }}
                  ></div>

                  <div>
                    <h4 style={{ fontSize: "13px", fontWeight: 600, color: step.active ? "#0F172A" : "#64748B", margin: "0 0 2px 0" }}>
                      {step.title}
                    </h4>
                    {step.date && (
                      <span style={{ fontSize: "11px", color: "#64748B", display: "block", marginBottom: "2px" }}>
                        ⏱ {step.date}
                      </span>
                    )}
                    <p style={{ fontSize: "12px", color: step.active ? "#475569" : "#94A3B8", margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
