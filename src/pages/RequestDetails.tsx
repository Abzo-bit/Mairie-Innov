export default function RequestDetails() {
  return (
    <div>
      <h1
        style={{
          marginBottom: "24px",
        }}
      >
        Détail de la demande
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <h3>Informations du citoyen</h3>

          <p><strong>Nom :</strong> Mamadou Diop</p>
          <p><strong>Téléphone :</strong> 77 000 00 00</p>
          <p><strong>Email :</strong> mamadou@email.com</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <h3>Informations de la demande</h3>

          <p><strong>Référence :</strong> DEM-001</p>
          <p><strong>Service :</strong> Acte de naissance</p>
          <p><strong>Date :</strong> 12/06/2026</p>
          <p><strong>Statut :</strong> En cours</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <h3>Pièces jointes</h3>

        <ul>
          <li>copie-cni.pdf</li>
          <li>justificatif-domicile.pdf</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
        }}
      >
        <button>
          Valider
        </button>

        <button>
          Rejeter
        </button>

        <button>
          Mettre en cours
        </button>
      </div>
    </div>
  );
}
