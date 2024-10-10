import axios from "axios";
import { BASE_URL } from "../constants.ts/constants";
import { FilterType } from "../types/types";

export const getAllStocks = async (filters?: FilterType) => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks`, {
      params: {
        mark: filters?.selectedBrand,
        models: filters?.selectedModels.join(","),
        page: filters?.currentPage,
        pageSize: filters?.pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении стока:", error);
    throw error;
  }
};

export const getBrands = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks/brands`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении брендов:", error);
    throw error;
  }
};

export const getModels = async (brand: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks/models`, {
      params: { mark: brand },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении моделей:", error);
    throw error;
  }
};
