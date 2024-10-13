import { maximumDB } from "../db/maximum";
import { BaseList, Mark, Stock } from "../types/stock";
import { StockFilter } from "../types/stockFilter";

export const getStockList = async (
  filter: StockFilter
): Promise<BaseList<Stock>> => {
  const { mark, models, page = 1, pageSize = 20 } = filter;
  const filters: any = {};

  if (mark && typeof mark === "string") {
    filters.mark = mark;
  }

  if (models && typeof models === "string") {
    filters.model = { $in: models.split(",") };
  }

  const count = await maximumDB.collection("stock").countDocuments(filters);

  const data = (
    await maximumDB
      .collection("stock")
      .find(filters)
      .skip(pageSize * (page - 1))
      .limit(+pageSize)
      .toArray()
  ).map(
    (x) =>
      ({
        _id: x._id,
        name: `${x.mark} ${x.model || ""}`,
        equipmentName: x.equipmentName,
        price: x.price,
        createdAt: x.createdAt,
      } as Stock)
  );

  return { data, count };
};

export const getMarksList = async (): Promise<Mark[]> => {
  const marks = (
    await maximumDB
      .collection("stock")
      .aggregate([
        {
          $group: {
            _id: "$mark",
            name: { $first: "$mark" },
            count: { $count: {} },
            models: {
              $addToSet: "$model",
            },
          },
        },
      ])
      .toArray()
  ).map(
    (x) =>
      ({
        name: x.name,
        count: x.count,
        models: x.models,
      } as Mark)
  );

  return marks;
};
