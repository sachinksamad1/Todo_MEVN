import { Router } from "express";
import Todo from "../models/Todo.js";

const router = Router();

// GET /api/todos
router.get("/", async (_req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// POST /api/todos
router.post("/", async (req, res) => {
  const { title } = req.body || {};
  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }
  const todo = await Todo.create({ title: title.trim() });
  res.status(201).json(todo);
});

// PATCH /api/todos/:id/toggle
router.patch("/:id/toggle", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ message: "Not found" });

  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// DELETE /api/todos/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Todo.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

export default router;
