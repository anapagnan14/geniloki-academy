import express from "express";
const router = express.Router();

let lessons = [];

// GET
router.get("/", (req, res) => {
  res.json(lessons);
});

// POST
router.post("/", (req, res) => {
  lessons.push(req.body);
  res.json({ ok: true });
});

export default router;