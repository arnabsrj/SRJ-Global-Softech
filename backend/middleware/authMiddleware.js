import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const protectAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");

      if (!req.admin) {
        return res.status(401).json({ message: "Admin not found" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: "Token invalid or expired" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};
