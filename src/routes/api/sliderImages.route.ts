import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import sliderImagesController from '../../controllers/sliderImages.controller';
import isLaptopExist from '../../middlewares/isLaptopExist';

const sliderImagesRouter: Router = Router();

sliderImagesRouter.get(
  '/getSliderImages',
  isLaptopExist,
  responseHandler(sliderImagesController.getImages.bind(sliderImagesController)),
);

sliderImagesRouter.post(
  '/addSliderImages',
  isLaptopExist,
  responseHandler(sliderImagesController.addImages.bind(sliderImagesController)),
);

sliderImagesRouter.delete(
  '/delete/:id',
  responseHandler(sliderImagesController.deleteImages.bind(sliderImagesController)),
);

export default sliderImagesRouter;
