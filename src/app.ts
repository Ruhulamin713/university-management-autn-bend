import express, { Application, Request, Response, urlencoded } from "express";
export const app: Application = express();
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});
