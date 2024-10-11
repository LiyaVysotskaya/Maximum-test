import axios from "axios";
import { BASE_URL } from "../constants.ts/constants";

export const getAllStocks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks`);
    return {
      stocks: response.data.stocks,
      total: response.data.total,
    };
  } catch (error) {
    console.error("Ошибка при получении стока:", error);
    throw error;
  }
};

export const getMarks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks/marks`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении брендов:", error);
    throw error;
  }
};
