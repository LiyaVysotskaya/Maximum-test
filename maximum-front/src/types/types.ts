export type StockType = {
  _id: string;
  mark: string;
  model: string;
  equipmentName: string;
  price: number;
  createdAt: Date;
};

export type MarksType = {
  name: string;
  count: number;
  models: string[];
};
