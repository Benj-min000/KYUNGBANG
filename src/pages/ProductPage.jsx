import { getProductById } from "../logic/products";
import ProductDetailLayout from "../ui/layouts/ProductDetailLayout";

export default function ProductPage() {
  const id = "iryeon-propolis-01"; // placeholder for :id
  const product = getProductById(id);

  return <ProductDetailLayout product={product} />;
}
