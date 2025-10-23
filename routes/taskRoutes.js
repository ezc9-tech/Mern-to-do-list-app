import express from "express";
import { createTask, deleteTask, getAllTasks, getOneTask, updateTask } from "../controllers/taskController.js";

const router = express.Router()

router.get("/", getAllTasks);
router.get("/:id", getOneTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


export default router;