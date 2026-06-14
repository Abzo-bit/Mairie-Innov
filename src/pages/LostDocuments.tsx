import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  FileText,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Eye,
  MapPin,
  Calendar,
  Grid,
  List,
  FolderOpen,
  Inbox,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import ActionButton from "../components/ui/ActionButton";

// Mock data for lost documents
export const mockLostDocuments = [
  {
    id: "DOC-001",
    type: "Carte Nationale d'Identité",
    docNumber: "1750199400234",
    owner: "Moussa Sow",
    status: "Retrouvé",
    date: "14/06/2026",
    locationName: "Dakar Plateau",
    lat: 14.6677,
    lng: -17.4377,
    reporter: "Amadou Diallo",
    reporterPhone: "+221 77 123 45 67",
    description: "Trouvé près de la place de l'Indépendance. En bon état.",
    createdAt: "14/06/2026 à 09:30",
  },
  {
    id: "DOC-002",
    type: "Passeport",
    docNumber: "A0023891",
    owner: "Mariama Ba",
    status: "Déclaré",
    date: "13/06/2026",
    locationName: "Aéroport Blaise Diagne",
    lat: 14.65,
    lng: -17.2,
    reporter: "Mariama Ba (Propriétaire)",
    reporterPhone: "+221 76 987 65 43",
    description: "Perdu entre l'enregistrement et la zone d'embarquement.",
    createdAt: "13/06/2026 à 16:45",
  },
  {
    id: "DOC-003",
    type: "Permis de conduire",
    docNumber: "2019/A/00452",
    owner: "Abdoulaye Ndiaye",
    status: "Réclamé",
    date: "12/06/2026",
    locationName: "Parcelles Assainies",
    lat: 14.75,
    lng: -17.44,
    reporter: "Cheikh Tidiane",
    reporterPhone: "+221 70 555 44 33",
    description: "Trouvé sur le parking du supermarché Auchan.",
    createdAt: "12/06/2026 à 11:15",
  },
  {
    id: "DOC-004",
    type: "Carte Grise",
    docNumber: "DK-2045-BC",
    owner: "Fatou Kiné Diop",
    status: "Restitué",
    date: "10/06/2026",
    locationName: "Gédiawaye",
    lat: 14.77,
    lng: -17.4,
    reporter: "Police de Gédiawaye",
    reporterPhone: "+221 33 821 11 22",
    description: "Rapporté au commissariat. Restitué à la propriétaire.",
    createdAt: "10/06/2026 à 14:00",
  },
  {
    id: "DOC-005",
    type: "Certificat de nationalité",
    docNumber: "CERT-2026-991",
    owner: "Oumar Sy",
    status: "Déclaré",
    date: "09/06/2026",
    locationName: "Dakar Plateau - Mairie",
    lat: 14.663,
    lng: -17.433,
    reporter: "Oumar Sy (Propriétaire)",
    reporterPhone: "+221 77 444 88 99",
    description: "Perdu lors des démarches administratives.",
    createdAt: "09/06/2026 à 10:20",
  },
  {
    id: "DOC-006",
    type: "Volet 1",
    docNumber: "VOL-2026-004",
    owner: "Awa Ndiaye",
    status: "Déclaré",
    date: "11/06/2026",
    locationName: "Mairie de Dakar",
    lat: 14.6677,
    lng: -17.4377,
    reporter: "Amadou Sow",
    reporterPhone: "+221 78 333 44 55",
    description: "Volet 1 de l'acte de naissance. Pièce extrêmement importante délivrée une seule fois.",
    createdAt: "11/06/2026 à 15:30",
  },
];

export default function LostDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states for new document declaration
  const [declarationMode, setDeclarationMode] = useState<"text" | "photo">("text");
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [newDocType, setNewDocType] = useState("Carte Nationale d'Identité");
  const [newDocNumber, setNewDocNumber] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [newReporter, setNewReporter] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const [documents, setDocuments] = useState(mockLostDocuments);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setUploadedPhotos((prev) => {
        const total = [...prev, ...filesArray];
        return total.slice(0, 2); // limit to max 2 photos
      });
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate simulated object URLs for uploaded files
    const photoUrls = uploadedPhotos.map(() => "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop");

    const newDoc = {
      id: `DOC-00${documents.length + 1}`,
      type: newDocType,
      docNumber: declarationMode === "photo" ? "Par photo" : (newDocNumber || "N/A"),
      owner: declarationMode === "photo" ? "Inconnu (Déclaré par photo)" : (newOwner || "Inconnu"),
      status: "Déclaré",
      date: new Date().toLocaleDateString("fr-FR"),
      locationName: newLocation || "Dakar",
      lat: 14.7167 + (Math.random() - 0.5) * 0.1,
      lng: -17.4677 + (Math.random() - 0.5) * 0.1,
      reporter: newReporter || "Anonyme",
      reporterPhone: newPhone || "N/A",
      description: declarationMode === "photo" ? "Document enregistré par scan/photo." : newDesc,
      createdAt: new Date().toLocaleDateString("fr-FR") + " à " + new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' }),
      photos: photoUrls,
    };

    setDocuments([newDoc, ...documents]);
    setShowAddModal(false);
    // Reset form
    setNewDocNumber("");
    setNewOwner("");
    setNewReporter("");
    setNewPhone("");
    setNewLocation("");
    setNewDesc("");
    setUploadedPhotos([]);
    setDeclarationMode("text");
  };

  const filteredDocs = documents.filter((doc) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      doc.owner.toLowerCase().includes(searchLower) ||
      doc.type.toLowerCase().includes(searchLower) ||
      doc.docNumber.toLowerCase().includes(searchLower) ||
      doc.id.toLowerCase().includes(searchLower) ||
      doc.locationName.toLowerCase().includes(searchLower) ||
      doc.status.toLowerCase().includes(searchLower) ||
      doc.date.toLowerCase().includes(searchLower);

    const matchesType = selectedType === "Tous" || doc.type === selectedType;
    const matchesStatus = selectedStatus === "Tous" || doc.status === selectedStatus;

    const isAllowedStatus = doc.status === "Déclaré" || doc.status === "Retrouvé" || doc.status === "Restitué";
    return matchesSearch && matchesType && matchesStatus && isAllowedStatus;
  });

  const docTypes = ["Tous", "Carte Nationale d'Identité", "Passeport", "Permis de conduire", "Carte Grise", "Certificat de nationalité", "Volet 1"];
  const docStatuses = ["Tous", "Déclaré", "Retrouvé", "Restitué"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ marginBottom: "-24px" }}>
        <PageHeader
          title="Documents perdus et retrouvés"
          subtitle="Suivi et restitution des pièces d'identité et documents administratifs égarés"
        />
      </div>

      {/* KPI Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <StatCard
          title="Total"
          value={documents.length.toString()}
          trend=""
          icon={FolderOpen}
        />
        <StatCard
          title="Documents Déclarés"
          value={documents.filter((d) => d.status === "Déclaré").length.toString()}
          trend=""
          icon={FileText}
        />
        <StatCard
          title="Documents Retrouvés"
          value={documents.filter((d) => d.status === "Retrouvé").length.toString()}
          trend=""
          icon={Inbox}
        />
        <StatCard
          title="Documents Restitués"
          value={documents.filter((d) => d.status === "Restitué").length.toString()}
          trend=""
          icon={CheckCircle}
        />
      </div>

      {/* Filter bar: Single line, Search on the left, Dropdowns on the right */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Search bar (Narrower: max-width 300px) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#F1F5F9",
            padding: "10px 14px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "300px",
            border: "1px solid transparent",
          }}
        >
          <Search size={18} style={{ color: "#64748B", marginRight: "10px" }} />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              fontSize: "14px",
              color: "#0F172A",
            }}
          />
        </div>

        {/* Dropdown filters aligned on the right with sidebar style */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>Type :</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "2px solid #334155", // Couleur bleue-grise de la sidebar
                background: "#FFFFFF",
                fontSize: "13px",
                outline: "none",
                color: "#0F172A",
              }}
            >
              {docTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>Statut :</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "2px solid #334155", // Couleur bleue-grise de la sidebar
                background: "#FFFFFF",
                fontSize: "13px",
                outline: "none",
                color: "#0F172A",
              }}
            >
              {docStatuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table Layout directly rendered */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          overflowX: "auto",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>ID</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Type</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Numéro</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Titulaire</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Lieu</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Statut</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Date</th>
              <th style={{ padding: "16px", fontSize: "13px", fontWeight: 600, color: "#475569" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <tr key={doc.id} style={{ borderBottom: "1px solid #E2E8F0", transition: "0.15s" }}>
                  <td style={{ padding: "16px", fontSize: "14px", fontWeight: 500, color: "#0F172A" }}>{doc.id}</td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#0F172A" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FileText size={16} style={{ color: "#2563EB" }} />
                      {doc.type}
                    </div>
                  </td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#475569" }}>{doc.docNumber}</td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#0F172A", fontWeight: 500 }}>{doc.owner}</td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#64748B" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={14} />
                      {doc.locationName}
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <StatusBadge status={doc.status} />
                  </td>
                  <td style={{ padding: "16px", fontSize: "14px", color: "#64748B" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={14} />
                      {doc.date}
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <Link
                      to={`/lost-documents/${doc.id}`}
                      style={{
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#334155",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      <Eye size={16} />
                      Voir
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} style={{ padding: "32px", textAlign: "center", color: "#64748B" }}>
                  <HelpCircle size={32} style={{ margin: "0 auto 8px auto", opacity: 0.5 }} />
                  Aucun document trouvé correspondant aux filtres.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Document Modal */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(15, 23, 42, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              width: "100%",
              maxWidth: "500px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "20px",
                borderBottom: "1px solid #E2E8F0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", margin: 0 }}>
                Déclarer un document perdu ou retrouvé
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#64748B",
                }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddDocument} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Tab Mode Selector */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                <button
                  type="button"
                  onClick={() => setDeclarationMode("text")}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #CBD5E1",
                    background: declarationMode === "text" ? "#334155" : "#F8FAFC",
                    color: declarationMode === "text" ? "#FFFFFF" : "#475569",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Saisie Manuelle
                </button>
                <button
                  type="button"
                  onClick={() => setDeclarationMode("photo")}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #CBD5E1",
                    background: declarationMode === "photo" ? "#334155" : "#F8FAFC",
                    color: declarationMode === "photo" ? "#FFFFFF" : "#475569",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Déclaration par Photo
                </button>
              </div>

              {/* Type de pièce (toujours visible, style bleu de la sidebar #334155 / #2563EB) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Type de pièce *</label>
                <select
                  value={newDocType}
                  onChange={(e) => setNewDocType(e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #334155", // Couleur bleue-grise de la sidebar
                    fontSize: "14px",
                    outline: "none",
                    color: "#0F172A",
                    background: "#FFFFFF",
                  }}
                  required
                >
                  <option value="Carte Nationale d'Identité">Carte Nationale d'Identité</option>
                  <option value="Passeport">Passeport</option>
                  <option value="Permis de conduire">Permis de conduire</option>
                  <option value="Carte Grise">Carte Grise</option>
                  <option value="Certificat de nationalité">Certificat de nationalité</option>
                  <option value="Volet 1">Volet 1</option>
                </select>
              </div>

              {/* Upload photo module (visible uniquement si mode photo) */}
              {declarationMode === "photo" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                    Téléverser des photos (Max. 2) *
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      border: "2px dashed #334155",
                      borderRadius: "12px",
                      padding: "24px 16px",
                      textAlign: "center",
                      background: "#F8FAFC",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.borderColor = "#2563EB")}
                    onMouseOut={(e) => (e.currentTarget.style.borderColor = "#334155")}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: "24px" }}>📸</span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "#334155" }}>
                      Sélectionner ou glisser des photos
                    </span>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>
                      PNG, JPG (max. 5Mo par fichier)
                    </span>
                  </div>

                  {uploadedPhotos.length > 0 && (
                    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                      {uploadedPhotos.map((photo, index) => (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            width: "70px",
                            height: "70px",
                            border: "1px solid #CBD5E1",
                            borderRadius: "8px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`upload-${index}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            style={{
                              position: "absolute",
                              top: "2px",
                              right: "2px",
                              background: "#EF4444",
                              color: "#FFFFFF",
                              border: "none",
                              borderRadius: "50%",
                              width: "18px",
                              height: "18px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "10px",
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Mode Saisie manuelle classique */
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Numéro du document (si connu)</label>
                    <input
                      value={newDocNumber}
                      onChange={(e) => setNewDocNumber(e.target.value)}
                      placeholder="Ex: 1750199400..."
                      style={{
                        padding: "10px",
                        borderRadius: "10px",
                        border: "1px solid #CBD5E1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Titulaire du document (Nom complet)</label>
                    <input
                      value={newOwner}
                      onChange={(e) => setNewOwner(e.target.value)}
                      placeholder="Ex: Moussa Sow"
                      style={{
                        padding: "10px",
                        borderRadius: "10px",
                        border: "1px solid #CBD5E1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                </>
              )}

              {/* Informations Déclarant et Lieu (toujours requises pour le contact) */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Nom déclarant *</label>
                  <input
                    value={newReporter}
                    onChange={(e) => setNewReporter(e.target.value)}
                    placeholder="Ex: Amadou Diallo"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    required
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Téléphone déclarant *</label>
                  <input
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="Ex: +221 77..."
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Lieu de perte / découverte *</label>
                <input
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Ex: Dakar Plateau"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              </div>

              {declarationMode === "text" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Description / Circonstances</label>
                  <textarea
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Plus de détails sur le lieu, l'état de la pièce..."
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontSize: "14px",
                      outline: "none",
                      minHeight: "80px",
                      resize: "vertical",
                    }}
                  />
                </div>
              )}

              {/* Bouton d'enregistrement qui prend le style bleu-gris de la sidebar (#334155) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "8px",
                }}
              >
                <ActionButton variant="outline" onClick={() => setShowAddModal(false)}>
                  Annuler
                </ActionButton>
                <ActionButton
                  type="submit"
                  variant="primary"
                  style={{
                    background: "#334155",
                    borderColor: "#334155",
                    color: "#FFFFFF",
                  }}
                >
                  Enregistrer
                </ActionButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
