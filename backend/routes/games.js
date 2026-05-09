import express from "express";

const router = express.Router();

// 🎲 BANCO FAKE (seus jogos)
const games = [
  { nome: "Dixit", nivel: "médio", duracao: "30 min", descricao: "Storytelling com cartas criativas" },
  { nome: "Red7", nivel: "básico", duracao: "5-10 min", descricao: "Jogo rápido de lógica e cores" },
  { nome: "Concept", nivel: "médio", duracao: "40 min", descricao: "Comunicação por ícones e associação" },
  { nome: "Concept Kids", nivel: "básico", duracao: "10 min", descricao: "Versão infantil para vocabulário básico" },
  { nome: "Color Addict", nivel: "médio", duracao: "15 min", descricao: "Leitura rápida e cores" },
  { nome: "Brazil", nivel: "avançado", duracao: "100 min", descricao: "Jogo estratégico longo" },
  { nome: "Modern Art", nivel: "avançado", duracao: "60 min", descricao: "Leilões e negociação" },
  { nome: "Root", nivel: "avançado", duracao: "60-90 min", descricao: "Estratégia complexa e narrativa" },
  { nome: "Winter Tale", nivel: "avançado", duracao: "90+ min", descricao: "Storytelling avançado" },
  { nome: "Stuffed Fables", nivel: "avançado", duracao: "60-90 min", descricao: "Narrativa cooperativa" },
  { nome: "Last Friday", nivel: "avançado", duracao: "30 min por capítulo", descricao: "Jogo temático de suspense" },
  { nome: "Fotossíntese", nivel: "médio", duracao: "45-60 min", descricao: "Estratégia com natureza" },
  { nome: "Spirit Island", nivel: "avançado", duracao: "90-120 min", descricao: "Cooperativo estratégico" },
  { nome: "Kanban", nivel: "avançado", duracao: "60-120 min", descricao: "Gestão e estratégia" },
  { nome: "Musa", nivel: "médio", duracao: "30 min", descricao: "Criatividade com dicas" },
  { nome: "Codenames", nivel: "médio", duracao: "15 min", descricao: "Vocabulário e associação" },
  { nome: "Magic Maze", nivel: "médio", duracao: "15 min", descricao: "Cooperação sem fala" },
  { nome: "Star Wars", nivel: "avançado", duracao: "60 min", descricao: "Temático estratégico" },
  { nome: "Detective", nivel: "avançado", duracao: "120-180 min", descricao: "Investigação e leitura" },
  { nome: "One Key", nivel: "médio", duracao: "20 min", descricao: "Dedução e pistas" },
  { nome: "Legendary", nivel: "avançado", duracao: "30-60 min", descricao: "Deck building" },
  { nome: "Munchkin", nivel: "avançado", duracao: "60-120 min", descricao: "Humor e estratégia" },
  { nome: "The Order of the Stick", nivel: "avançado", duracao: "180-240 min", descricao: "RPG estratégico" },
  { nome: "United Marvel", nivel: "médio", duracao: "variável", descricao: "Cooperativo com heróis" },
  { nome: "Brew", nivel: "médio", duracao: "45-90 min", descricao: "Controle de área" },
  { nome: "Marãná", nivel: "médio", duracao: "30 min", descricao: "Jogo criativo" },
  { nome: "Sintonia", nivel: "básico", duracao: "30-45 min", descricao: "Comunicação em grupo" },
  { nome: "Lobisomem", nivel: "básico", duracao: "10 min", descricao: "Interação social" },
  { nome: "Tigris & Euphrates", nivel: "avançado", duracao: "60-120 min", descricao: "Estratégia clássica" },
  { nome: "Mysterium", nivel: "médio", duracao: "42 min", descricao: "Mistério e interpretação" },
  { nome: "Coup", nivel: "médio", duracao: "15 min", descricao: "Blefe e estratégia" },
  { nome: "Stay Away", nivel: "médio", duracao: "15-60 min", descricao: "Dedução social" },
  { nome: "The Resistance", nivel: "médio", duracao: "30 min", descricao: "Blefe em grupo" },
  { nome: "Bloodborne", nivel: "avançado", duracao: "30-60 min", descricao: "Ação cooperativa" },
  { nome: "Resposta Rápida", nivel: "básico", duracao: "20 min", descricao: "Vocabulário rápido" },
  { nome: "The Mind", nivel: "básico", duracao: "20 min", descricao: "Sincronia em grupo" },
  { nome: "Hanabi", nivel: "básico", duracao: "30 min", descricao: "Cooperativo com memória" },
  { nome: "Só Uma", nivel: "básico", duracao: "20 min", descricao: "Associação de palavras" },
  { nome: "Mar de Mentiras", nivel: "médio", duracao: "25 min", descricao: "Blefe e dedução" },
  { nome: "Daring Contest", nivel: "médio", duracao: "30-45 min", descricao: "Criatividade e desafios" },
  { nome: "Saboteur", nivel: "médio", duracao: "30 min", descricao: "Estratégia com papéis ocultos" },
  { nome: "Histórias Sinistras", nivel: "básico", duracao: "variável", descricao: "Interpretação e dedução" },
  { nome: "Vudu", nivel: "médio", duracao: "30 min", descricao: "Jogo caótico divertido" },
  { nome: "SET", nivel: "médio", duracao: "20 min", descricao: "Raciocínio lógico visual" }
];

// 📥 GET - listar jogos
router.get("/", (req, res) => {
  res.json(games);
});

// 📤 POST - adicionar jogo (opcional)
router.post("/", (req, res) => {
  const novoJogo = req.body;
  games.push(novoJogo);
  res.json({ ok: true, jogo: novoJogo });
});

// 🚀 EXPORT (ESSENCIAL)
export default router;