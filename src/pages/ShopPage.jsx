import { getProductsByCategory } from "../logic/products";
import { CATEGORIES } from "../data/categories";
import ShopLayout from "../ui/layouts/ShopLayout";

export default function ShopPage() {
  const category = CATEGORIES.TOOTHPASTE; // placeholder
  const products = getProductsByCategory(category);

  return <ShopLayout products={products} />;
}
