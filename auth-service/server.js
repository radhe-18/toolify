import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import User from "./model/User.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ [auth] MongoDB connected"))
  .catch((err) => console.error("[auth] Mongo error:", err));

app.get("/api/auth/health", (req, res) =>
  res.json({ ok: true, service: "auth" })
);


app.post("/api/auth/register", async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });
    const user = await User.create(req.body);
    const token = user.generateToken();
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = user.generateToken();
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get("/api/auth/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.put("/api/auth/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByIdAndUpdate(decoded.id, req.body, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/api/auth/upload-profile-pic", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { profilePic } = req.body;
    if (!profilePic) return res.status(400).json({ message: "No profile picture provided" });
    const user = await User.findByIdAndUpdate(decoded.id, { profilePic }, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Profile picture updated successfully", user });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🔥 Auth service running on http://localhost:${PORT}`));
