import { Router } from "express";
import { tryCatch } from "../../middlewares/tryCatch.middleware";
import { responseHandler } from "../../middlewares/response.middleware";
import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.get('/register',
tryCatch(responseHandler(userController.registerUser.bind(userController))));

userRouter.get('/login',
tryCatch(responseHandler(userController.loginUser.bind(userController))));

userRouter.get('/profile/:id',
tryCatch(responseHandler(userController.getUserProfile.bind(userController))));

export default userRouter;