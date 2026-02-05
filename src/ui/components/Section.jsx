export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "64px" }}>
      {title && (
        <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
