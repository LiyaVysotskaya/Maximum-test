import express from "express";
import { getMarks, getStocks } from "../controllers/stocks";

export const apiRouter = express.Router();

apiRouter.get("/api/stocks", getStocks);
apiRouter.get("/api/stocks/marks", getMarks);
