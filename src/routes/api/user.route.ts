import { Router } from "express";

import { responseHandler } from "../../middlewares/response.middleware";
import userController from "../../controllers/user.controller";
import { userMiddleware } from "../../middlewares/user.middleware";
import { protect } from "../../middlewares/auth.middleware";

const userRouter: Router = Router();

userRouter.post(
  "/register",
  responseHandler(userController.registerUser.bind(userController))
);

userRouter.post(
  "/login",
  userMiddleware.isUserExist,
  responseHandler(userController.loginUser.bind(userController))
);

userRouter.get(
  "/logout",
  responseHandler(userController.logOutUser.bind(userController))
);

userRouter.get('/profile', protect,responseHandler(userController.getProfile.bind(userController)))


userRouter.get("/product", protect, (req, res) => {
  res.send("List of Products");
});

export default userRouter;
