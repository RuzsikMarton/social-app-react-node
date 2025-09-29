import express from "express";
import { upload } from "../controllers/upload.js";

const router = express.Router();

router.post('/', upload.single("file"), (req,res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.status(200).json(req.file.filename)
});

export default router;  