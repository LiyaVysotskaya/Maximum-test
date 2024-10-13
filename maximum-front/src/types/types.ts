export type Stock = {
  _id: string;
  name: string;
  equipmentName: string;
  drive: string;
  price: number;
  createdAt: Date;
};

export type Mark = {
  name: string;
  count: number;
  models: string[];
};
