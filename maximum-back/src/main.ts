import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Stock from "./models/stock";

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

async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URL as string, {
      dbName: "hrTest",
    });
    console.log("Подключение к MongoDB прошло успешно");
  } catch (err) {
    console.error("Не удалось подключиться к MongoDB", err);
  }
}

connectDB();

app.use(express.json());
app.use("/api", apiRouter);

// apiRouter.get("/stocks", async (req, res) => {
//   try {
//     const stocks = await Stock.aggregate([
//       {
//         $group: {
//           _id: "$mark",
//           count: { $sum: 1 },
//         },
//       },
//     ]);

//     res.json(stocks);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

apiRouter.get("/stocks", async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
