import { getProductById } from "../logic/products";

export default function ProductPage() {
  const id = "iryeon-propolis-01"; // placeholder for :id
  const product = getProductById(id);

  return (
    <div>
      <h1>Product Page (headless)</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
