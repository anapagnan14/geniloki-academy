import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import gameRoutes from "./routes/games.js";
import lessonRoutes from "./routes/lessons.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
process.chdir(__dirname);

app.use(cors());
app.use(express.json());

app.use("/api/games", gameRoutes);
app.use("/api/lessons", lessonRoutes);

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 API rodando");
});