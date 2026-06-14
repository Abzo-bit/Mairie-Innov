import React, { useState } from "react";
import { User, Mail, Phone, Briefcase, Shield, Edit2, Check } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import ActionButton from "../components/ui/ActionButton";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Daisa Luisa Monteiro");
  const [email, setEmail] = useState("daisa.luisa@mairie.innov");
  const [phone, setPhone] = useState("+221 77 890 12 34");
  const [department, setDepartment] = useState("Division État-Civil et Citoyenneté");
  const role = "Agent Municipal / Développeur 2";

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <PageHeader
        title="Mon Profil"
        subtitle="Consultez et modifiez vos informations administratives"
      />

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Profile Header Row with Avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            borderBottom: "1px solid #F1F5F9",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#1E293B",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
              fontWeight: 700,
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
            }}
          >
            DL
          </div>
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
              {name}
            </h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "#DBEAFE",
                  color: "#1D4ED8",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {role}
              </span>
              <span
                style={{
                  background: "#F1F5F9",
                  color: "#475569",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Service de Dakar Plateau
              </span>
            </div>
          </div>
        </div>

        {/* Profile Details Form */}
        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {/* Input 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
                <User size={14} />
                NOM COMPLET
              </label>
              {isEditing ? (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              ) : (
                <div style={{ padding: "10px 0", fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>
                  {name}
                </div>
              )}
            </div>

            {/* Input 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
                <Mail size={14} />
                ADRESSE EMAIL
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              ) : (
                <div style={{ padding: "10px 0", fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>
                  {email}
                </div>
              )}
            </div>

            {/* Input 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
                <Phone size={14} />
                NUMÉRO DE TÉLÉPHONE
              </label>
              {isEditing ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              ) : (
                <div style={{ padding: "10px 0", fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>
                  {phone}
                </div>
              )}
            </div>

            {/* Input 4 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
                <Briefcase size={14} />
                DÉPARTEMENT / SERVICE
              </label>
              {isEditing ? (
                <input
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  required
                />
              ) : (
                <div style={{ padding: "10px 0", fontSize: "15px", fontWeight: 500, color: "#0F172A" }}>
                  {department}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              borderTop: "1px solid #F1F5F9",
              paddingTop: "24px",
            }}
          >
            {isEditing ? (
              <>
                <ActionButton variant="outline" onClick={() => setIsEditing(false)}>
                  Annuler
                </ActionButton>
                <ActionButton type="submit" variant="success">
                  <Check size={16} />
                  Enregistrer les modifications
                </ActionButton>
              </>
            ) : (
              <ActionButton variant="primary" onClick={() => setIsEditing(true)}>
                <Edit2 size={16} />
                Modifier les informations
              </ActionButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
