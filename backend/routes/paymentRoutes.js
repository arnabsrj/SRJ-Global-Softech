// routes/paymentRoutes.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import Payment from "../models/Payment.js"; // ✅ Import Mongoose model

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// @route   POST /api/payment/create-checkout-session
router.post("/create-checkout-session", async (req, res) => {
  const { items, totalAmount } = req.body;
  console.log("🔍 Incoming payment request:", items, totalAmount);

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "No items provided" });
  }

  // @route   GET /api/payment/all
router.get("/all", async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    console.error("❌ Error fetching payments:", error.message);
    res.status(500).json({ error: "Failed to fetch payments" });
  }
});


  try {
    // ✅ 1. Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.amount * 100,
        },
        quantity: 1,
      })),
      mode: "payment",
      customer_email: undefined, // remove if previously used
      success_url: "http://localhost:5173/pricing?payment=success",
      cancel_url: "http://localhost:5173/pricing?payment=cancel",
      billing_address_collection: "auto", // Optional: to collect address
      customer_creation: "always", // Creates Stripe customer
    });

    // ✅ 2. Save session and order info in MongoDB
    await Payment.create({
      sessionId: session.id,
      items,
      totalAmount,
      paymentStatus: "pending",
    });

    console.log("✅ Stripe session created and saved:", session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe session error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
