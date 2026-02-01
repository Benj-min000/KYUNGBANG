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
