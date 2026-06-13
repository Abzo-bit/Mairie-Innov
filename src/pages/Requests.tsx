import RequestsTable from "../components/tables/RequestsTable";

export default function Requests() {
  return (
    <div>
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Demandes administratives
      </h1>

      <input
        placeholder="Rechercher une demande..."
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #CBD5E1",
        }}
      />

      <RequestsTable />
    </div>
  );
}
