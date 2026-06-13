import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ComplaintsMap() {
  return (
    <MapContainer
      center={[14.7167, -17.4677]}
      zoom={12}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[14.7167, -17.4677]}>
        <Popup>
          Réclamation : Route dégradée
        </Popup>
      </Marker>

      <Marker position={[14.735, -17.45]}>
        <Popup>
          Réclamation : Éclairage public
        </Popup>
      </Marker>
    </MapContainer>
  );
}
