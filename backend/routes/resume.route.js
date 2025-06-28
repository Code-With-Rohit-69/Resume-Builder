import express from "express";
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller.js";

import protect from "../middlewares/auth.middleware.js";
import { uploadResumeImages } from "../controllers/uploadImage.controller.js";

const resumeRouter = express.Router();
  
resumeRouter.route("/").post(protect, createResume);
resumeRouter.route("/").get(protect, getUserResumes);
resumeRouter.route("/:id").get(protect, getResumeById);
resumeRouter.route("/:id").put(protect, updateResume);
resumeRouter.route("/:id").delete(protect, deleteResume);

resumeRouter.route("/:id/upload-images").put(protect, uploadResumeImages);

export default resumeRouter;
