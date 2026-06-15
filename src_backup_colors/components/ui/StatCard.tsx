import { COLORS } from "../../theme/colors";

type Props = {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
};

export default function StatCard({
  title,
  value,
  trend,
  icon: Icon,
}: Props) {
  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "18px",
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: COLORS.text,
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            {value}
          </div>
        </div>

        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: COLORS.primaryLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            size={22}
            color={COLORS.primary}
          />
        </div>
      </div>

      <div
        style={{
          height: "4px",
          borderRadius: "999px",
          background: COLORS.primaryLight,
        }}
      >
        <div
          style={{
            width: "60%",
            height: "100%",
            background: COLORS.primary,
            borderRadius: "999px",
          }}
        />
      </div>

      <div
        style={{
          color: COLORS.textSecondary,
          fontSize: "13px",
        }}
      >
        {trend}
      </div>
    </div>
  );
}
