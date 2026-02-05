import Section from "../components/Section";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ProductCard from "../components/ProductCard";
import en from "../../i18n/en.json"; // temporary; will switch dynamically later

export default function HomeLayout({ featuredProducts }) {
  const { slogans, featuredProductsTitle, homeBannerLabel } = en;

  return (
    <div>
      {/* Banner */}
      <Section>
        <div style={{ margin: '0 auto' }}>
           <ImagePlaceholder label="Home Banner" ratio="21/9" />
        </div>
      </Section>

      {/* Slogans */}
      <Section>
        <div style={{ textAlign: "center", margin: '0 auto' }}>
          {slogans.map((line, idx) => (
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              {line}
            </p>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section title={featuredProductsTitle}>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.shortDescription}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
