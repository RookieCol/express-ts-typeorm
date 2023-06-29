import { Router } from "express";
import { createUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("/users", createUser);

export default userRoutes;
