import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { BaseListResponse } from "../types/baseListResponse";
import { Mark, Stock } from "../types/types";

export const getStocks = async (
  page: number,
  pageSize: number,
  mark?: string,
  models?: string[]
): Promise<BaseListResponse<Stock>> => {
  try {
    let url = `${BASE_URL}/stocks?page=${page}&pageSize=${pageSize}`;
    if (mark) {
      url += `&mark=${mark}`;
    }
    if (models?.length) {
      url += `&models=${models?.join(",")}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении стока:", error);
    throw error;
  }
};

export const getMarks = async (): Promise<Mark[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks/marks`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении брендов:", error);
    throw error;
  }
};
