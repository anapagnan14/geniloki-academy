import express from "express";

const router = express.Router();

router.post("/suggest", async (req, res) => {
  res.json({
    resposta: "Sugestão: Use um jogo de vocabulário ou dinâmica de conversação."
  });
});

export default router;