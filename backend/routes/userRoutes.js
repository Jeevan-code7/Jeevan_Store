import express from "express";
import { createUser } from "../controllers/userController.js";
import user from "../models/userModel.js";

const router = express.Router();

router.route("/").post(createUser);

export default router;
