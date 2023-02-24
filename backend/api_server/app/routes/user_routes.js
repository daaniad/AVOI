import express from "express";
import userController from "../controller/user_controller.js"
import validateLoginDto from "../utils/validate_login_to.js"


const userRouter = express.Router();


userRouter.post("/", userController.addUser);
userRouter.post("/login", validateLoginDto, userController.userLogin);
userRouter.get("/manage", userController.manageNewUser);
userRouter.patch("/validate/:id", userController.validate);
userRouter.get("/shift/:id", userController.getShiftList);
userRouter.get("/users", userController.getUsers);
userRouter.post("/assistance", userController.saveAssistance);
userRouter.get("/admin/:id", userController.fetchAdmin);
userRouter.get("/:nombre", userController.fetchUsersByName)



export default userRouter