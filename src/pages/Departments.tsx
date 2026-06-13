import PageHeader from "../components/ui/PageHeader";

const departments = [
  {
    name: "État Civil",
    description: "Actes de naissance, mariage et décès",
  },
  {
    name: "Urbanisme",
    description: "Permis de construire et aménagement",
  },
  {
    name: "Affaires Sociales",
    description: "Aides sociales et accompagnement",
  },
  {
    name: "Voirie",
    description: "Routes, éclairage public et assainissement",
  },
];

export default function Departments() {
  return (
    <div>
      <PageHeader
        title="Départements"
        subtitle="Organisation des services administratifs"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {departments.map((department) => (
          <div
            key={department.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <h3>{department.name}</h3>

            <p
              style={{
                color: "#64748B",
                marginTop: "12px",
              }}
            >
              {department.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
