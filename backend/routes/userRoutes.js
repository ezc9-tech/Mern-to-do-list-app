import { Router } from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/userController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", requireAuth, getCurrentUser); // ✅ new route

export default router;
