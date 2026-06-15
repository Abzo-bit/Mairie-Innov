import { MapPin } from "lucide-react";

export default function ComplaintsMap() {
  return (
    <div
      style={{
        height: "500px",
        borderRadius: "20px",
        background: "#F8FAFC",
        border: "2px dashed #CBD5E1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          background: "#DBEAFE",
          color: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MapPin size={40} />
      </div>

      <h3
        style={{
          margin: 0,
          color: "#0F172A",
        }}
      >
        Carte interactive des réclamations
      </h3>

      <p
        style={{
          margin: 0,
          color: "#64748B",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Localisation des incidents et réclamations
        citoyennes. L'intégration cartographique sera
        activée lors de la connexion aux données réelles.
      </p>
    </div>
  );
}
