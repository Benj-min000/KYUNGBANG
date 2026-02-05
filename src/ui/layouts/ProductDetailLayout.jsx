import Section from "../components/Section";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function ProductDetailLayout({ product }) {
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Section>
        <ImagePlaceholder label="Main Product Image" ratio="4/5" />
      </Section>

      <Section title="Product Info">
        <p style={{ fontWeight: "600", fontSize: "18px" }}>
          {product.name}
        </p>
        <p style={{ color: "#666", marginBottom: "16px" }}>
          {product.price}
        </p>
        <p>{product.detailedDescription}</p>

        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          <span>♡ Like</span>
          <span>🛒 Add to Cart</span>
        </div>
      </Section>

      <Section title="Gallery">
        <div style={{ display: "flex", gap: "12px" }}>
          {product.galleryImages?.map((img, idx) => (
            <ImagePlaceholder key={idx} label={`Gallery Image ${idx + 1}`} ratio="1/1" />
          ))}
        </div>
      </Section>
    </div>
  );
}
