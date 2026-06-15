import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Calendar,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";

export default function AgentProfile() {
  return (
    <div>
      <PageHeader
        title="Mon profil"
        subtitle="Informations personnelles et professionnelles"
      />

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "24px",
              background: "#FFF7ED",
              color: "#F97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            AD
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "#1F2937",
              }}
            >
              Aboubakry Dieng
            </h2>

            <p
              style={{
                marginTop: "8px",
                color: "#6B7280",
              }}
            >
              Agent administratif
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <User size={18} color="#F97316" />
              <strong>Nom complet</strong>
            </div>

            <div>Aboubakry Dieng</div>
          </div>

          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Mail size={18} color="#F97316" />
              <strong>Email</strong>
            </div>

            <div>aboubakry@teranga.sn</div>
          </div>

          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Phone size={18} color="#F97316" />
              <strong>Téléphone</strong>
            </div>

            <div>+221 77 123 45 67</div>
          </div>

          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Building2 size={18} color="#F97316" />
              <strong>Département</strong>
            </div>

            <div>État Civil</div>
          </div>

          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Briefcase size={18} color="#F97316" />
              <strong>Fonction</strong>
            </div>

            <div>Agent administratif</div>
          </div>

          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Calendar size={18} color="#F97316" />
              <strong>Date d'affectation</strong>
            </div>

            <div>01/01/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
