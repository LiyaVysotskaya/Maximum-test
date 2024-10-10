export const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Марка/модель",
    dataIndex: "mark",
    key: "mark",
  },
  {
    title: "Модификация",
    dataIndex: "model",
    key: "model",
  },
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
