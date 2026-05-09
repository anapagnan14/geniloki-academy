import mongoose from "mongoose";
import Game from "./models/Game.js";

await mongoose.connect("mongodb://127.0.0.1:27017/geniloki");

await Game.deleteMany();

await Game.insertMany([
  {
    nome: "Dixit",
    nivel: "Médio",
    duracaoMin: 20,
    duracaoMax: 30,
    idade: "10+",
    descricao: "Estimula criatividade e storytelling em inglês."
  },
  {
    nome: "Red7",
    nivel: "Básico",
    duracaoMin: 5,
    duracaoMax: 10,
    idade: "8+",
    descricao: "Treinar cores e lógica com instruções simples."
  },
  {
    nome: "Concept",
    nivel: "Médio",
    duracaoMin: 30,
    duracaoMax: 40,
    idade: "10+",
    descricao: "Descrever palavras usando símbolos e pistas."
  },
  {
    nome: "Concept Kids",
    nivel: "Básico",
    duracaoMin: 10,
    duracaoMax: 15,
    idade: "6+",
    descricao: "Vocabulário básico com suporte visual."
  },
  {
    nome: "Color Addict",
    nivel: "Médio",
    duracaoMin: 10,
    duracaoMax: 15,
    idade: "8+",
    descricao: "Praticar leitura rápida e vocabulário de cores."
  },
  {
    nome: "Brazil",
    nivel: "Avançado",
    duracaoMin: 60,
    duracaoMax: 100,
    idade: "12+",
    descricao: "Discussão estratégica com foco em conversação."
  }
]);

console.log("🎉 Jogos inseridos com base na planilha!");
process.exit();