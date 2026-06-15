import { FileSearch } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <FileSearch
        size={48}
        style={{
          marginBottom: "16px",
        }}
      />

      <h3>{title}</h3>

      <p
        style={{
          color: "#64748B",
        }}
      >
        {description}
      </p>
    </div>
  );
}
