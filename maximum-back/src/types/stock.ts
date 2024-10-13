import { WithId } from "mongodb";

export interface Stock extends WithId<Document> {
  name: string;
  equipmentName: string;
  drive: string;
  price: number;
  createdAt: Date;
}

export type BaseList<T> = {
  data: T[];
  count: number;
};

export type Mark = {
  name: string;
  count: number;
  models: string[];
};
