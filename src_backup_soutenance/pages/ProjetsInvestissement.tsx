import {
  Briefcase,
  Building2,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import SearchInput from "../components/ui/SearchInput";

const projets = [
  {
    id: "PRJ-001",
    nom: "Construction du marché central",
    budget: "150 000 000 FCFA",
    entreprise: "SEN BATIMENT",
    avancement: "65%",
    statut: "En cours",
  },
  {
    id: "PRJ-002",
    nom: "Réhabilitation des routes",
    budget: "90 000 000 FCFA",
    entreprise: "TERANGA BTP",
    avancement: "40%",
    statut: "En cours",
  },
  {
    id: "PRJ-003",
    nom: "Extension éclairage public",
    budget: "45 000 000 FCFA",
    entreprise: "SENELEC PARTNER",
    avancement: "100%",
    statut: "Terminé",
  },
];

export default function ProjetsInvestissement() {
  return (
    <div>
      <PageHeader
        title="Projets d'investissement"
        subtitle="Suivi des projets municipaux et des investissements"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <StatCard
          title="Projets"
          value="12"
          trend="+2"
          icon={Briefcase}
        />

        <StatCard
          title="Budget global"
          value="650M"
          trend="+15%"
          icon={Building2}
        />

        <StatCard
          title="Terminés"
          value="5"
          trend="+1"
          icon={CheckCircle2}
        />

        <StatCard
          title="Avancement moyen"
          value="72%"
          trend="+8%"
          icon={TrendingUp}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <SearchInput placeholder="Rechercher un projet..." />
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#F9FAFB" }}>
              <th style={{ padding: "18px", textAlign: "left" }}>Projet</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Budget</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Entreprise</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Avancement</th>
              <th style={{ padding: "18px", textAlign: "left" }}>Statut</th>
            </tr>
          </thead>

          <tbody>
            {projets.map((projet) => (
              <tr
                key={projet.id}
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <td style={{ padding: "18px" }}>
                  <strong>{projet.nom}</strong>
                  <br />
                  <span style={{ color: "#6B7280" }}>
                    {projet.id}
                  </span>
                </td>

                <td style={{ padding: "18px" }}>
                  {projet.budget}
                </td>

                <td style={{ padding: "18px" }}>
                  {projet.entreprise}
                </td>

                <td style={{ padding: "18px" }}>
                  {projet.avancement}
                </td>

                <td style={{ padding: "18px" }}>
                  {projet.statut}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
