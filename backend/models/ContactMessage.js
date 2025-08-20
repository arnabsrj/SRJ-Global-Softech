import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, required: true },
  service:   { type: String, required: true },
  message:   { type: String, required: true },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ContactMessage", contactMessageSchema);
