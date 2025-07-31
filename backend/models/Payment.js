import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    items: [
      {
        name: String,
        amount: Number,
      },
    ],
    totalAmount: Number,
    paymentStatus: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
