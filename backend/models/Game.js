import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  nome: String,
  duracaoMin: Number,
  duracaoMax: Number,
  nivel: String,
  descricao: String,
  idade: String,
});

export default mongoose.model("Game", GameSchema);