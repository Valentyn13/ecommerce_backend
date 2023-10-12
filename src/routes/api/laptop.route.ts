import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import laptopController from '../../controllers/laptop.controller';
import isLaptopExist from '../../middlewares/isLaptopExist.middleware';

const laptopRouter: Router = Router();

laptopRouter.post(
  '/add',
  responseHandler(laptopController.addLaptop.bind(laptopController)),
);

laptopRouter.get(
  '/all',
  responseHandler(laptopController.getLaptops.bind(laptopController)),
);

laptopRouter.get(
  '/byId',
  isLaptopExist,
  responseHandler(laptopController.getLaptopById.bind(laptopController)),
);

laptopRouter.delete(
  '/delete/:id',
  responseHandler(laptopController.deleteLaptop.bind(laptopController)),
);

laptopRouter.patch(
  '/update/:id',
  responseHandler(laptopController.updateLaptop.bind(laptopController)),
);
export default laptopRouter;
