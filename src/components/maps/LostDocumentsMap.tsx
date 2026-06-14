import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet marker icon issue in Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

type DocumentMarker = {
  id: string;
  type: string;
  locationName: string;
  lat: number;
  lng: number;
  status: string;
};

type Props = {
  documents: DocumentMarker[];
};

export default function LostDocumentsMap({ documents }: Props) {
  // Dakar central coordinate
  const defaultPosition: [number, number] = [14.7167, -17.4677];

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "16px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", margin: 0 }}>
          Carte des signalements
        </h3>
        <span style={{ fontSize: "12px", color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2563EB", display: "inline-block" }}></span>
          Dakar & banlieue
        </span>
      </div>
      <MapContainer
        center={defaultPosition}
        zoom={11}
        style={{
          height: "380px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {documents.map((doc) => {
          if (!doc.lat || !doc.lng) return null;
          return (
            <Marker key={doc.id} position={[doc.lat, doc.lng]}>
              <Popup>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>
                  <strong style={{ color: "#0F172A" }}>{doc.type}</strong>
                  <div style={{ color: "#64748B", margin: "4px 0" }}>📍 {doc.locationName}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: doc.status === "Retrouvé" ? "#16A34A" : "#D97706" }}>
                      {doc.status}
                    </span>
                    <a
                      href={`/lost-documents/${doc.id}`}
                      style={{
                        fontSize: "11px",
                        color: "#2563EB",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      Détails
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
