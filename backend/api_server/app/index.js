import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user_routes.js";


dotenv.config()

const app = express()

// -- middlewares from express -- //

app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors());

// -- Definimos punto de entrada rutas del proyecto -- //

app.use("/user", userRouter);

export default app;