import { StockType } from "./types";

export type StocksResponse = {
  stocks: StockType[];
  total: number;
};
