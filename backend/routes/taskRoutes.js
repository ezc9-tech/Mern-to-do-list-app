import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from "../controllers/taskController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const notesRouter = express.Router();

notesRouter.use(requireAuth);

notesRouter.get("/", getAllTasks);
notesRouter.get("/:id", getOneTask);
notesRouter.post("/", createTask);
notesRouter.put("/:id", updateTask);
notesRouter.delete("/:id", deleteTask);

export default notesRouter;
