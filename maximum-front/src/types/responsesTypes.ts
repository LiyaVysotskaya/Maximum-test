import { StockType } from "./types";

export type GetAllStocksResponse = {
  stocks: StockType[];
  total: number;
};
