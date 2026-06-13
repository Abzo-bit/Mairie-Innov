import { Search } from "lucide-react";

type Props = {
  placeholder?: string;
};

export default function SearchInput({
  placeholder = "Rechercher...",
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "10px 14px",
      }}
    >
      <Search size={18} />

      <input
        placeholder={placeholder}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          background: "transparent",
        }}
      />
    </div>
  );
}
