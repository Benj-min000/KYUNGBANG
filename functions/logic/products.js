import { products } from "../data/products.js";

/**
 * Return all featured products
 * CMS/API ready
 */
export function getFeaturedProducts() {
  return products.filter(p => p.isFeatured);
}

/**
 * Return products matching category
 */
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

/**
 * Find single product by ID
 */
export function getProductById(id) {
  return products.find(p => p.id === id);
}

export const reduceStock = (productId, quantity) => {
  const product = getProductById(productId);
  if (!product) return { success: false, error: "Product not found" };
  if (product.stock < quantity) return { success: false, error: "Out of stock" };
  product.stock -= quantity;
  return { success: true, stockLeft: product.stock };
};

export default products;