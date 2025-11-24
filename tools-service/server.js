import dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Tool from "./model/Tool.js";


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// ---------------- MONGO CONNECT ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ [tools] MongoDB connected"))
  .catch((err) => console.log("[tools] Mongo error:", err));

app.get("/api/health", (req, res) =>
  res.json({ ok: true, service: "tools" })
);

// ---------------- GET ALL TOOLS ----------------
app.get("/api/tools", async (req, res) => {
  try {
    const {
      q = "",
      category,
      pricing,
      tags,
      page = 1,
      limit = 120,
    } = req.query;

    const filter = {};

    // Search
    if (q) {
      filter.$or = [
        { name: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
        { tags: { $in: [new RegExp(q, "i")] } },
      ];
    }

    // Category filter
    if (category && category !== "All") {
      filter.category = category;
    }

    // Pricing filter
    if (pricing && pricing !== "Any") {
      filter.pricing = pricing;
    }

    // Tags filter
    if (tags) {
      filter.tags = { $all: String(tags).split(",") };
    }

    const total = await Tool.countDocuments(filter);

    const items = await Tool.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      items,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// ---------------- FEATURED TOOLS ----------------
app.get("/api/tools-featured", async (req, res) => {
  try {
    const items = await Tool.find({ featured: true }).limit(24);
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// ---------------- SINGLE TOOL BY SLUG ----------------
app.get("/api/tools/:slug", async (req, res) => {
  try {
    const tool = await Tool.findOne({ slug: req.params.slug });
    if (!tool) return res.status(404).json({ message: "Not found" });
    res.json(tool);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () =>
  console.log(`🔥 Tools service running on http://localhost:${PORT}`)
);
