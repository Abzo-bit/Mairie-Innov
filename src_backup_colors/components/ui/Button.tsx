import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      style={{
        padding: "10px 16px",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 600,
        border:
          variant === "secondary"
            ? "1px solid #E2E8F0"
            : "none",

        background:
          variant === "primary"
            ? "#1E293B"
            : "#FFFFFF",

        color:
          variant === "primary"
            ? "#FFFFFF"
            : "#0F172A",
      }}
    >
      {children}
    </button>
  );
}
