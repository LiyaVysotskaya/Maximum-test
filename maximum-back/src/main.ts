import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const apiRouter = express.Router();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5000",
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:8080",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    maxAge: 7,
  })
);

const client = new MongoClient(process.env.MONGODB_URL as string);

async function connectDB() {
  try {
    await client.connect();
    console.log("Подключение к MongoDB прошло успешно");
  } catch (err) {
    console.error("Ошибка подключения", err);
  }
}

connectDB();

app.use(express.json());
app.use("/api", apiRouter);

apiRouter.get("/stocks", async (req, res) => {
  try {
    const stocks = await client
      .db("hrTest")
      .collection("stock")
      .find()
      .toArray();
    res.json(stocks);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
