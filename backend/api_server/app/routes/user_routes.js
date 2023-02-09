import express from "express";
import userController from "../controller/user_controller.js"
import validateLoginDto from "../utils/validate_login_to.js"


const userRouter = express.Router();


userRouter.post("/", userController.addUser);
userRouter.post("/login", validateLoginDto, userController.userLogin);



export default userRouter