export default function ComplaintDetails() {
  return (
    <div>
      <h1
        style={{
          marginBottom: "24px",
        }}
      >
        Détail de la réclamation
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
          <h3>Informations générales</h3>

          <p><strong>Référence :</strong> REC-001</p>
          <p><strong>Type :</strong> Route dégradée</p>
          <p><strong>Localisation :</strong> Dakar Plateau</p>
          <p><strong>Date :</strong> 12/06/2026</p>
          <p><strong>Statut :</strong> En attente</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <h3>Citoyen</h3>

          <p><strong>Nom :</strong> Mamadou Diop</p>
          <p><strong>Téléphone :</strong> 77 000 00 00</p>
          <p><strong>Email :</strong> mamadou@email.com</p>
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
        <h3>Description</h3>

        <p>
          La chaussée présente plusieurs nids-de-poule
          rendant la circulation difficile.
        </p>
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
        <h3>Photo</h3>

        <div
          style={{
            height: "250px",
            background: "#F1F5F9",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Image de la réclamation
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
        }}
      >
        <button>Affecter</button>
        <button>Mettre en cours</button>
        <button>Clôturer</button>
      </div>
    </div>
  );
}
