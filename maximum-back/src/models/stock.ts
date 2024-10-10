import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  _id: ObjectId,
  mark: String,
  model: String,
  engine: {
    power: Number,
    volume: Number,
    transmission: String,
    fuel: String,
  },
  drive: String,
  equipmentName: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

const Stock = mongoose.model("stock", stockSchema);
export default Stock;
