import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong." });
};


/* One thing to call out
— Express knows this is error handling middleware only because it has 4 parameters.
Remove one and it silently becomes regular middleware and your errors go nowhere.
*/