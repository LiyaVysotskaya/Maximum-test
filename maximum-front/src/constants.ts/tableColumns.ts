import { StockType } from "../types/types";

export const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Марка/Модель",
    key: "markModel",
    render: (text: string, record: StockType) =>
      `${record.mark} ${record.model}`,
  },
  { title: "Модификация", dataIndex: "drive", key: "drive" },
  {
    title: "Комплектация",
    dataIndex: "equipmentName",
    key: "equipmentName",
  },
  {
    title: "Стоимость",
    dataIndex: "price",
    key: "price",
    render: (price: number) => `${price.toLocaleString()} ₽`,
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (createdAt: string) => new Date(createdAt).toLocaleString(),
  },
];
