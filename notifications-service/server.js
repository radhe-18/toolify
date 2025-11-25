import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true, service: "notifications" }));

app.post("/api/notify", (req, res) => {
  const { to, subject, text } = req.body;
  console.log("Notify:", to, subject);
  res.json({ ok: true, message: "Notification queued (demo)" });
});

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🔥 Notifications service running on http://localhost:${PORT}`));
