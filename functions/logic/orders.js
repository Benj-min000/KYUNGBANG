/* eslint-disable no-undef */
// Import the helper functions you used below
import { reduceStock, getProductById } from "./products.js"; 

const orders = [];

export const createOrder = (productId, quantity, userId) => {
  if (!productId || !quantity || quantity <= 0 || !userId) {
    return { success: false, error: "Invalid input" };
  }

  const stockResult = reduceStock(productId, quantity);
  if (!stockResult.success) return { success: false, error: stockResult.error };

  const product = getProductById(productId);

  const order = {
    orderId: `order-${Date.now()}`,
    userId,
    productId,
    quantity,
    price: product.price,
    status: "pending",
    createdAt: new Date()
  };

  orders.push(order);
  return { success: true, orderId: order.orderId };
};

export const getOrdersForUser = (userId) => orders.filter(o => o.userId === userId);

export const getOrderById = (orderId) => orders.find(o => o.orderId === orderId);