type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <div
      style={{
        marginBottom: "24px",
      }}
    >
      <h3
        style={{
          marginBottom: "16px",
          color: "#0F172A",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}
