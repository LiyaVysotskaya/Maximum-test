import axios from "axios";
import { BASE_URL } from "../constants.ts/constants";
import { GetAllStocksResponse } from "../types/responsesTypes";
import { MarksType, StockType } from "../types/types";

export const getAllStocks = async (): Promise<GetAllStocksResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks`);
    return {
      stocks: response.data.stocks as StockType[],
      total: response.data.total as number,
    };
  } catch (error) {
    console.error("Ошибка при получении стока:", error);
    throw error;
  }
};

export const getMarks = async (): Promise<MarksType[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks/marks`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении брендов:", error);
    throw error;
  }
};
