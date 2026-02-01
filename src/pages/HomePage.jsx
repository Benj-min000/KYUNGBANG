import { getFeaturedProducts } from "../logic/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <h1>Home Page (headless)</h1>
      <pre>{JSON.stringify(featuredProducts, null, 2)}</pre>
    </div>
  );
}
