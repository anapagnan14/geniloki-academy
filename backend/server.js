import express from "express";
import cors from "cors";

import gameRoutes from "./routes/games.js";
import lessonRoutes from "./routes/lessons.js";

const app = express();

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