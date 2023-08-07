import { Router } from "express";
import { responseHandler } from "../../middlewares/response.middleware";
import userController from "../../controllers/user.controller";
import { userMiddleware } from "../../middlewares/user.middleware";

const userRouter: Router = Router();

userRouter.post('/register',
responseHandler(userController.registerUser.bind(userController)));

userRouter.post('/login',
userMiddleware.isUserExist,
responseHandler(userController.loginUser.bind(userController)));

userRouter.get('/logout',
responseHandler(userController.getUserProfile.bind(userController)));

export default userRouter;