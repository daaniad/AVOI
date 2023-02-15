import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user_routes.js";
import eventRouter from "./routes/event_routes.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname, join } from "path";


dotenv.config()

export function currentDir() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return { __dirname, __filename };
  }
  
  const {__dirname} = currentDir()

const app = express()

// -- middlewares from express -- //

app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static(join(__dirname, "public")));
app.use(
  fileUpload({
    createParentPath: true, //Crea la carpeta donde almacenamos las imágenes si no ha sido creada
    limits: { fileSize: 20 * 1024 * 1024 }, //Limitamos el tamaño de la imagen a 20mb. Por defecto son 50mb.
    abortOnLimit: true, // Interrumpe la carga del archivo si supera el límite indicado.
    responseOnLimit: "Imagen demasiado grande", //Enviamos un mensaje de respuesta cuando interrumpe la carga
    uploadTimeout: 0, // Indicamos el tiempo de respuesta si se interrumpe la carga de la imagen
  })
);

// -- Definimos punto de entrada rutas del proyecto -- //

app.use("/user", userRouter);

app.use("/event", eventRouter);

export default app;