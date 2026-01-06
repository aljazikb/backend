import { Router } from "express";
import { registerUser, loginUser, logoutuser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); // ✅ بدون ()
router.route("/login").post(loginUser);       // ✅ بدون ()
router.route("/logout").post(logoutuser); // Placeholder for logout route

export default router;
