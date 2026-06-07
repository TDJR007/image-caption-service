import "dotenv/config";
import express from "express";
import captionRouter from "./routes/caption.ts";
import { errorHandler } from "./middleware/error.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", captionRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});