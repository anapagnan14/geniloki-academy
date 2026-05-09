import express from "express";
import fs from "fs";

const router = express.Router();

const filePath = "./data/lessons.json";

// PEGAR AULAS
router.get("/", (req, res) => {

  const data = fs.readFileSync(filePath, "utf-8");

  res.json(JSON.parse(data));
});

// SALVAR AULA
router.post("/", (req, res) => {

  const lessons = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );

  const newLesson = {
    id: Date.now(),
    titulo: req.body.titulo,
    descricao: req.body.descricao
  };

  lessons.unshift(newLesson);

  fs.writeFileSync(
    filePath,
    JSON.stringify(lessons, null, 2)
  );

  res.json(newLesson);
});

// APAGAR AULA
router.delete("/:id", (req, res) => {

  const lessons = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );

  const updated = lessons.filter(
    (l) => l.id != req.params.id
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updated, null, 2)
  );

  res.json({
    success: true
  });
});

export default router;