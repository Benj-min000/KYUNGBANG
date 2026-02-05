import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function ShopLayout({ products }) {
  return (
    <div>
      <Section title="Shop">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
              <ProductCard
                name={product.name}
                price={product.price}
                description={product.shortDescription}
              />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
