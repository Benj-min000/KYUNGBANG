/* eslint-disable no-undef */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const { createOrder } = require("./logic/orders"); // import your function

exports.createOrderFunction = functions.https.onCall(async (data) => {
  const { productId, quantity, userId } = data;

  // validate inputs
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

