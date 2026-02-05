import { getFeaturedProducts } from "../logic/products";
import HomeLayout from "../ui/layouts/HomeLayout";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <HomeLayout featuredProducts={featuredProducts} />
  );
}
