import cors from "cors";
import express from "express";
import "./loadEnvironment";
import { apiRouter } from "./routes/stocks";

const app = express();
const port = process.env.PORT || 5000;

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

app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
