import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import todosRouter from "./routes/todo.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Vue dev server
app.use(express.json());

app.get("/", (_req, res) => res.send("MEVN Todo API is running"));
app.use("/api/todos", todosRouter);

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 API listening on http://localhost:${PORT}`));
});
