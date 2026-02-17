import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { error } from "console";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("broo please provide valid info");
  }

  const userExits = await User.findOne({ email });
  if (userExits) res.status(400).send("user exits already");

  const newUser = new User({ username, email, password });
  console.log(newUser);
  try {
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(401);
    throw new Error("Invalid User");
  }
});

export { createUser };
