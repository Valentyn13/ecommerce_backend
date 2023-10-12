import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import userController, { UserController } from '../../controllers/user.controller';
import protect from '../../middlewares/auth.middleware';
import isUserExist from '../../middlewares/user.middleware';

const userRouter: Router = Router();

userRouter.post(
  '/register',
  responseHandler(userController.registerUser.bind(userController)),
);

userRouter.post(
  '/login',
  isUserExist,
  responseHandler(userController.loginUser.bind(userController)),
);

userRouter.get(
  '/logout',
  responseHandler(UserController.logOutUser.bind(userController)),
);

userRouter.get('/profile', protect, isUserExist, responseHandler(userController.getProfile.bind(userController)));

export default userRouter;
