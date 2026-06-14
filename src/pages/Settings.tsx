import React, { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Edit,
  Mail,
  Phone,
  Shield,
  Briefcase,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import ActionButton from "../components/ui/ActionButton";

export default function Settings() {
  // Profile information states
  const [profile, setProfile] = useState({
    name: "Daisa Luise Monteiro",
    role: "Super Admin",
    email: "daisa.luise@mairie.sn",
    phone: "+221 77 123 45 67",
    department: "Administration Générale",
    commune: "Commune de Dakar",
  });

  // Notification preferences states
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Modals state management
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Edit Profile form fields
  const [editName, setEditName] = useState(profile.name);
  const [editEmail, setEditEmail] = useState(profile.email);
  const [editPhone, setEditPhone] = useState(profile.phone);
  const [editDept, setEditDept] = useState(profile.department);
  const [editCommune, setEditCommune] = useState(profile.commune);
  const [editRole, setEditRole] = useState(profile.role);

  // Change Password form fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      name: editName,
      role: editRole,
      email: editEmail,
      phone: editPhone,
      department: editDept,
      commune: editCommune,
    });
    setShowEditModal(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Le nouveau mot de passe et sa confirmation ne correspondent pas.");
      return;
    }
    alert("Mot de passe mis à jour avec succès !");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordModal(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <PageHeader
        title="Mon profil & Paramètres"
        subtitle="Consultez et modifiez vos informations administratives et vos préférences de contact"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {/* Card: Informations utilisateur */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <User size={18} style={{ color: "#334155" }} />
              Informations du compte
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#334155",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)}
                </div>
                <div>
                  <strong style={{ fontSize: "16px", color: "#0F172A", display: "block" }}>
                    {profile.name}
                  </strong>
                  <span
                    style={{
                      fontSize: "12px",
                      background: "#F1F5F9",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    {profile.role}
                  </span>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                  <Mail size={16} style={{ color: "#64748B" }} />
                  <span style={{ color: "#475569" }}>{profile.email}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                  <Phone size={16} style={{ color: "#64748B" }} />
                  <span style={{ color: "#475569" }}>{profile.phone}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                  <Briefcase size={16} style={{ color: "#64748B" }} />
                  <span style={{ color: "#475569" }}>{profile.department}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                  <Shield size={16} style={{ color: "#64748B" }} />
                  <span style={{ color: "#475569" }}>{profile.commune}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <ActionButton
              onClick={() => {
                setEditName(profile.name);
                setEditEmail(profile.email);
                setEditPhone(profile.phone);
                setEditDept(profile.department);
                setEditCommune(profile.commune);
                setEditRole(profile.role);
                setShowEditModal(true);
              }}
              variant="primary"
              style={{
                flex: 1,
                background: "#334155",
                borderColor: "#334155",
                color: "#FFFFFF",
              }}
            >
              <Edit size={16} />
              Modifier profil
            </ActionButton>
            <ActionButton
              onClick={() => setShowPasswordModal(true)}
              variant="outline"
              style={{ flex: 1 }}
            >
              <Lock size={16} />
              Mot de passe
            </ActionButton>
          </div>
        </div>

        {/* Card: Notifications */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#0F172A",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Bell size={18} style={{ color: "#334155" }} />
            Préférences de Notification
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong style={{ fontSize: "14px", color: "#0F172A", display: "block" }}>
                  Notifications par E-mail
                </strong>
                <span style={{ fontSize: "12px", color: "#64748B" }}>
                  Recevoir les synthèses de dossiers administratifs et réclamations.
                </span>
              </div>
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={(e) => setEmailNotif(e.target.checked)}
                style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#334155" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #F1F5F9",
                paddingTop: "14px",
              }}
            >
              <div>
                <strong style={{ fontSize: "14px", color: "#0F172A", display: "block" }}>
                  Notifications par SMS
                </strong>
                <span style={{ fontSize: "12px", color: "#64748B" }}>
                  Alerte sur mon numéro mobile lors d'un signalement de sécurité.
                </span>
              </div>
              <input
                type="checkbox"
                checked={smsNotif}
                onChange={(e) => setSmsNotif(e.target.checked)}
                style={{ width: "20px", height: "20px", cursor: "pointer", accentColor: "#334155" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #F1F5F9",
                paddingTop: "14px",
              }}
            >
              <div>
                <strong style={{ fontSize: "14px", color: "#0F172A", display: "block" }}>
                  Notifications Push Web
                </strong>
                <span style={{ fontSize: "12px", color: "#64748B" }}>
                  Alertes immédiates du navigateur sur l'administration (Toujours actif).
                </span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#16A34A",
                  background: "#DCFCE7",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
              >
                Actif permanent
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
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
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
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
                Modifier le profil
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
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

            <form
              onSubmit={handleUpdateProfile}
              style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Nom complet *
                </label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Rôle *
                </label>
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                    background: "#FFFFFF",
                  }}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Téléphone *
                </label>
                <input
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Département *
                </label>
                <input
                  value={editDept}
                  onChange={(e) => setEditDept(e.target.value)}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Commune *
                </label>
                <input
                  value={editCommune}
                  onChange={(e) => setEditCommune(e.target.value)}
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

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "8px",
                }}
              >
                <ActionButton variant="outline" onClick={() => setShowEditModal(false)}>
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

      {/* Change Password Modal */}
      {showPasswordModal && (
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
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
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
                Changer le mot de passe
              </h3>
              <button
                onClick={() => setShowPasswordModal(false)}
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

            <form
              onSubmit={handlePasswordChange}
              style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Ancien mot de passe *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showOld ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{
                      width: "100%",
                      padding: "10px 40px 10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowOld(!showOld)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      color: "#64748B",
                    }}
                  >
                    {showOld ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Nouveau mot de passe *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Min. 8 caractères"
                    style={{
                      width: "100%",
                      padding: "10px 40px 10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      color: "#64748B",
                    }}
                  >
                    {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                  Confirmer le nouveau mot de passe *
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-saisir le mot de passe"
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "8px",
                }}
              >
                <ActionButton variant="outline" onClick={() => setShowPasswordModal(false)}>
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
                  Mettre à jour
                </ActionButton>
              </div>
            </form>
          </div>
        </div>
      )}

      {saveSuccess && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "#DCFCE7",
            border: "1px solid #BBF7D0",
            borderRadius: "12px",
            padding: "16px 20px",
            color: "#15803D",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <CheckCircle size={20} />
          <strong style={{ fontSize: "14px" }}>Profil mis à jour avec succès !</strong>
        </div>
      )}
    </div>
  );
}
