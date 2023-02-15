import express from "express";
import eventController from "../controller/event_controller.js"
const eventRouter = express.Router();

eventRouter.post("/upload", eventController.addEvent);
// Obtener imagen por su id
eventRouter.get("/image/:id", eventController.getImage);
eventRouter.delete("/image/:id", eventController.getImage)
eventRouter.post("/add_product", eventController.addProduct)
eventRouter.get("/", eventController.getProduct)
eventRouter.get("/:id", eventController.getProductById)

export default eventRouter