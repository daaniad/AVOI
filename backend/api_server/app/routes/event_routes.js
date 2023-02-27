import express from "express";
import eventController from "../controller/event_controller.js"
const eventRouter = express.Router();

eventRouter.post("/upload", eventController.addEvent);
// Obtener imagen por su id

eventRouter.get("/:id", eventController.getEventById);
eventRouter.get("/", eventController.fetchEvents);
eventRouter.patch("/update/:id", eventController.updateEvent);

export default eventRouter