import { COLORS } from "../../theme/colors";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "18px",
        padding: "22px",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: COLORS.text,
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          {title}
        </h3>

        {subtitle && (
          <div
            style={{
              marginTop: "6px",
              color: COLORS.textSecondary,
              fontSize: "13px",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {children}
    </div>
  );
}
