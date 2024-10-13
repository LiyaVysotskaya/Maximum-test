export const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Марка/Модель",
    dataIndex: "name",
    key: "name",
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
