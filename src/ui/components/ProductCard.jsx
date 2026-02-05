import ImagePlaceholder from "./ImagePlaceholder";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  description,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "240px",
      }}
    >
      <Link to={"/product/:id"} key={id} style={{textDecoration:'None', color: 'inherit'}}>
      <ImagePlaceholder ratio="1/1" label="Product Image" />

      <h3 style={{ fontSize: "16px", margin: "12px 0 4px" }}>
        {name}
      </h3>

      <p style={{ fontWeight: "600", margin: "0 0 4px" }}>
        {price}
      </p>

      <p style={{ fontSize: "14px", color: "#666" }}>
        {description}
      </p>
      </Link>

      <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
        <span>♡</span>
        <span>🛒</span>
      </div>
    </div>
  );
}
