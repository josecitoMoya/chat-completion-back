import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { router } from "./routes/index.js";

import "dotenv/config";

const { CORS } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: CORS,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use("/api", router);

export default app;
