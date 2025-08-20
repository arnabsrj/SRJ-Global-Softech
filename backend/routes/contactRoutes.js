import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// POST: Save new contact message
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    const newMessage = new ContactMessage({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: "Contact saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET: Fetch all contact messages
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await ContactMessage.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE: Delete a contact message by ID
router.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ContactMessage.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.json({ success: true, message: "Contact deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


export default router;
