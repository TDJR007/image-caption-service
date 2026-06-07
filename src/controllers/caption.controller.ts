import { Request, Response, NextFunction } from "express";
import { generateCaption } from "../services/caption.service.js";

export const handleCaption = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
};