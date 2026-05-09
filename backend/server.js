import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import gameRoutes from "./routes/games.js";
import lessonRoutes from "./routes/lessons.js";
import aiRoutes from "./routes/ai.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/geniloki");

app.use("/api/games", gameRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/ai", aiRoutes);

app.listen(3000, () => console.log("🚀 API rodando"));