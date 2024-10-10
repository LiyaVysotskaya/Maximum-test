export type StockType = {
  _id: string;
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

export type FilterType = {
  selectedBrand: string;
  selectedModels: string[];
  currentPage: number;
  pageSize: number;
};
