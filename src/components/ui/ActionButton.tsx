import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "success" | "danger" | "secondary" | "outline";
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function ActionButton({
  children,
  onClick,
  variant = "primary",
  style,
  disabled = false,
  type = "button",
}: Props) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          background: "#16A34A",
          color: "#FFFFFF",
          border: "1px solid #16A34A",
        };
      case "danger":
        return {
          background: "#DC2626",
          color: "#FFFFFF",
          border: "1px solid #DC2626",
        };
      case "secondary":
        return {
          background: "#64748B",
          color: "#FFFFFF",
          border: "1px solid #64748B",
        };
      case "outline":
        return {
          background: "transparent",
          color: "#475569",
          border: "1px solid #CBD5E1",
        };
      case "primary":
      default:
        return {
          background: "#2563EB",
          color: "#FFFFFF",
          border: "1px solid #2563EB",
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "all 0.2s ease",
    outline: "none",
    ...getVariantStyles(),
    ...style,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyles}
      onMouseOver={(e) => {
        if (!disabled) {
          e.currentTarget.style.filter = "brightness(0.95)";
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.currentTarget.style.filter = "none";
        }
      }}
    >
      {children}
    </button>
  );
}
