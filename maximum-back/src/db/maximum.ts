import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL as string);

try {
  client.connect();
  console.log("Подключение к MongoDB прошло успешно");
} catch (err) {
  console.error("Ошибка подключения", err);
}

export const maximumDB = client.db("hrTest");
