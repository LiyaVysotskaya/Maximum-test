import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import { ParsedQs } from "qs";

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

// apiRouter.get("/stocks", async (req, res) => {
//   try {
//     const stocks = await client
//       .db("hrTest")
//       .collection("stock")
//       .find()
//       .toArray();
//     res.json(stocks);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

// apiRouter.get("/stocks", async (req, res) => {
//   try {
//     const { mark, models } = req.query;

//     const dataString: any[] = [];

//     if (typeof mark === "string") {
//       dataString.push({
//         $match: {
//           mark,
//         },
//       });
//     }

//     if (typeof models === "string") {
//       const modelArray = models.split(",");
//       dataString.push({
//         $match: {
//           model: { $in: modelArray },
//         },
//       });
//     }

//     dataString.push({
//       $group: {
//         _id: "$mark",
//         count: { $sum: 1 },
//       },
//     });

//     const stocks = await client
//       .db("hrTest")
//       .collection("stock")
//       .aggregate(dataString)
//       .toArray();
//     res.json(stocks);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

apiRouter.get("/stocks", async (req, res) => {
  try {
    const { mark, models, page = 1, pageSize = 10 } = req.query;
    const filters: any[] = [];

    if (typeof mark === "string") {
      filters.push({
        $match: {
          mark,
        },
      });
    }

    if (typeof models === "string") {
      const modelArray = models.split(",");
      filters.push({
        $match: {
          model: { $in: modelArray },
        },
      });
    }

    const total = await client
      .db("hrTest")
      .collection("stock")
      .countDocuments(filters.length ? { $and: filters } : {});

    const stocks = await client
      .db("hrTest")
      .collection("stock")
      .aggregate([
        ...filters,
        { $skip: (Number(page) - 1) * Number(pageSize) },
        { $limit: Number(pageSize) },
      ])
      .toArray();

    res.json({ stocks, total });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

apiRouter.get("/stocks/brands", async (req, res) => {
  try {
    const brands = await client
      .db("hrTest")
      .collection("stock")
      .aggregate([
        {
          $group: {
            _id: "$mark",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            name: "$_id",
            count: 1,
            _id: 0,
          },
        },
      ])
      .toArray();
    res.json(brands);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
