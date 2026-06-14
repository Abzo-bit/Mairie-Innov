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
        gap: "12px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "12px 16px",
        transition: "all .2s ease",
        boxShadow: "0 1px 2px rgba(15,23,42,.04)",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "10px",
          background: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          size={18}
          color="#64748B"
        />
      </div>

      <input
        placeholder={placeholder}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          background: "transparent",
          fontSize: "14px",
          color: "#0F172A",
        }}
      />
    </div>
  );
}
