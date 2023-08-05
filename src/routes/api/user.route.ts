import { Router } from "express";
import { tryCatch } from "../../middlewares/tryCatch.middleware";
import { responseHandler } from "../../middlewares/response.middleware";
import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post('/register',
tryCatch(responseHandler(userController.registerUser.bind(userController))));

userRouter.post('/login',
tryCatch(responseHandler(userController.loginUser.bind(userController))));

userRouter.get('/logout',
tryCatch(responseHandler(userController.getUserProfile.bind(userController))));

export default userRouter;