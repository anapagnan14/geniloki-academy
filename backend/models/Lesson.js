import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  arquivos: [String],
  autor: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Lesson", LessonSchema);