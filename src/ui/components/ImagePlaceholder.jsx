export default function ImagePlaceholder({ ratio = "16/9", label = "Image" }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio: ratio,
      backgroundColor: "#e5e5e5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#777",
      fontSize: "14px"
    }}>
      {label}
    </div>
  );
}
