import { Router, Request, Response, NextFunction } from "express";
import multer from "multer";
import { generateCaption } from "../services/caption.service.js";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    allowed.includes(file.mimetype) ? cb(null, true) : cb(new Error("Invalid file type"));
  },
});

router.post(
  "/caption",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No image provided" });
        return;
      }

      const caption = await generateCaption(req.file.buffer);
      res.status(200).json({ caption });
    } catch (err) {
      next(err);
    }
  }
);

export default router;