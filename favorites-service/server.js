import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Favorite from "./model/Favorite.js";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("✅ [favorites] MongoDB connected"))
  .catch((err)=>console.error("[favorites] Mongo error:", err));

app.get("/api/health", (req, res) => res.json({ ok: true, service: "favorites" }));

app.get("/api/favorites", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = token ? jwt.verify(token, process.env.JWT_SECRET) : null;
    if (!decoded) return res.status(401).json({ message: "No token" });
    const favs = await Favorite.find({ user: decoded.id });
    res.json(favs);
  } catch (e) { res.status(500).json({ message: e.message }); }
});

app.post("/api/favorites", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = token ? jwt.verify(token, process.env.JWT_SECRET) : null;
    if (!decoded) return res.status(401).json({ message: "No token" });
    const { toolId } = req.body;
    const exists = await Favorite.findOne({ user: decoded.id, toolId });
    if (exists) return res.status(400).json({ message: "Already favorited" });
    const fav = await Favorite.create({ user: decoded.id, toolId });
    res.status(201).json(fav);
  } catch (e) { res.status(400).json({ message: e.message }); }
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🔥 Favorites service running on http://localhost:${PORT}`));
