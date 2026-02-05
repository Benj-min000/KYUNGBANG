/* eslint-disable no-undef */
import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app"; // Import from specific subpath
import { createOrder } from "./logic/orders.js";

initializeApp(); // Call directly without 'admin.'

export const createOrderFunction = functions.https.onCall(async (data) => {
  const { productId, quantity, userId } = data;

  if (!productId || !quantity || quantity <= 0 || !userId) {
    return { success: false, error: "Invalid input" };
  }

  try {
    const result = createOrder(productId, quantity, userId);
    return result;
  } catch (err) {
    console.error("Order creation failed:", err);
    return { success: false, error: err.message };
  }
});