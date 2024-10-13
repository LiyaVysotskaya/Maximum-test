import type { Request, Response } from "express";
import { getMarksList, getStockList } from "../providers/stocks";
import { StockFilter } from "../types/stockFilter";

export const getStocks = async (
  req: Request<any, any, any, StockFilter>,
  res: Response
) => {
  try {
    const stockList = await getStockList(req.query);

    res.json(stockList);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getMarks = async (req: Request, res: Response) => {
  try {
    const marksList = await getMarksList();

    res.json(marksList);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
