import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    await user.save();

    res.json(user);
  } catch (error) {
    if(error instanceof Error)
    res.status(500).json({ message: error.message });
  }
};
