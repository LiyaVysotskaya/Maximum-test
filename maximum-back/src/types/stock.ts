import { ObjectId } from "mongodb";

export type StockType = {
  _id: ObjectId;
  mark: string;
  model: string;
  engine: {
    power: number;
    volume: number;
    transmission: string;
    fuel: string;
  };
  drive: string;
  equipmentName: string;
  price: number;
  createdAt: Date;
};
