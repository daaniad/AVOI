import express from "express";
import userController from "../controller/user_controller.js"
import validateLoginDto from "../utils/validate_login_to.js"


const userRouter = express.Router();


userRouter.post("/", userController.addUser);
userRouter.post("/login", validateLoginDto, userController.userLogin);
userRouter.get("/manage", userController.manageNewUser);
userRouter.patch("/validate/:id", userController.validate);



export default userRouter