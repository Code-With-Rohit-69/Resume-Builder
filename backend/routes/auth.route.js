import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/auth.controller.js";

import protect from "../middlewares/auth.middleware.js";

import upload from "../middlewares/upload.middleware.js";

const authRouter = express.Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/profile").get(protect, getUserProfile);

authRouter.route("/upload-image").post(upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  return res.status(200).json({ imageUrl });
});

export default authRouter;
