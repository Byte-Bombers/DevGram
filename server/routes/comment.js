import express from "express";
import { postComment, getComments } from "../controllers/comments.js";

const router = express.Router();

router.get("/comments", getComments);
router.post("/comments", postComment);

export default router;
