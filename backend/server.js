import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import resumeRouter from "./routes/resume.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  })
);

app.use(express.json());

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path) => {
      res.set("Access-Control-Allow-Origin", "http://localhost:5173");
    },
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/auth", authRouter);
app.use("/api/resume", resumeRouter);

app.listen(PORT, () => {
  console.log(`server is lestining on http://localhost:${PORT}`);
});
