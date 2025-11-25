import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env correctly
dotenv.config();


import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5005;

// ------------------ AUTH ------------------
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_URL,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      if (req.body && Object.keys(req.body).length > 0) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
  })
);

// ------------------ AUTH HEALTH ------------------
app.use(
  "/api/auth/health",
  createProxyMiddleware({
    target: process.env.AUTH_URL,
    changeOrigin: true,
  })
);

// ------------------ TOOLS ------------------
app.use(
  "/api/tools",
  createProxyMiddleware({
    target: process.env.TOOLS_URL,
    changeOrigin: true,
  })
);

app.use(
  "/api/tools-featured",
  createProxyMiddleware({
    target: process.env.TOOLS_URL,
    changeOrigin: true,
  })
);

// FAVORITES
app.use(
  "/api/favorites",
  createProxyMiddleware({
    target: process.env.FAVORITES_URL,
    changeOrigin: true,
  })
);

// NOTIFY
app.use(
  "/api/notify",
  createProxyMiddleware({
    target: process.env.NOTIFY_URL,
    changeOrigin: true,
  })
);

// START SERVER
app.listen(PORT, () => {
  console.log(`🔥 Gateway running: http://localhost:${PORT}`);
  console.log(`➡ AUTH:      ${process.env.AUTH_URL}`);
  console.log(`➡ TOOLS:     ${process.env.TOOLS_URL}`);
  console.log(`➡ FAVORITES: ${process.env.FAVORITES_URL}`);
  console.log(`➡ NOTIFY:    ${process.env.NOTIFY_URL}`);
});
