import React from "react";

type StatusType =
  | "Validée"
  | "En cours"
  | "Rejetée"
  | "En attente"
  | "Déclaré"
  | "Recherché"
  | "Retrouvé"
  | "Réclamé"
  | "Restitué"
  | "Traitée";

type Props = {
  status: StatusType | string;
};

export default function StatusBadge({ status }: Props) {
  const getStyle = (s: string) => {
    switch (s) {
      case "Validée":
      case "Retrouvé":
      case "Traitée":
        return {
          background: "#DCFCE7",
          color: "#15803D",
          border: "1px solid #BBF7D0",
        };
      case "En cours":
      case "Recherché":
        return {
          background: "#DBEAFE",
          color: "#1D4ED8",
          border: "1px solid #BFDBFE",
        };
      case "Rejetée":
        return {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
        };
      case "En attente":
      case "Déclaré":
        return {
          background: "#FEF3C7",
          color: "#D97706",
          border: "1px solid #FDE68A",
        };
      case "Réclamé":
        return {
          background: "#F3E8FF",
          color: "#7E22CE",
          border: "1px solid #E9D5FF",
        };
      case "Restitué":
        return {
          background: "#F1F5F9",
          color: "#475569",
          border: "1px solid #E2E8F0",
        };
      default:
        return {
          background: "#F1F5F9",
          color: "#475569",
          border: "1px solid #E2E8F0",
        };
    }
  };

  const style = getStyle(status);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        ...style,
      }}
    >
      {status}
    </span>
  );
}
