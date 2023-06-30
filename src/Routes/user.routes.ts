import { Router } from "express";
import { login, signup } from "../controllers/user.controllers";
const userRoutes = Router();
userRoutes.post("/auth/signup", signup);
userRoutes.post("/auth/login", login);
export default userRoutes;
