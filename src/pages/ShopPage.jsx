import { getProductsByCategory } from "../logic/products";
import { CATEGORIES } from "../data/categories";

export default function ShopPage() {
  const category = CATEGORIES.TOOTHPASTE; // placeholder
  const products = getProductsByCategory(category);

  return (
    <div>
      <h1>Shop Page (headless)</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
