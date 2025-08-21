import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// POST /api/admin/login
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      _id: admin._id,
      username: admin.username,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) POST /api/admin/register - for first time only
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await Admin.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ username, password });

    const token = generateToken(admin._id);

    res.status(201).json({
      _id: admin._id,
      username: admin.username,
      token,
    });
  } catch (err) {
    console.error("Register Error:", err); // 👈 Log actual error
    res.status(500).json({ message: "Server error" });
  }
};
