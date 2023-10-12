import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import sliderImagesController from '../../controllers/sliderImages.controller';
import isLaptopImagesExist from '../../middlewares/isLaptopImagesExist.middleware';

const sliderImagesRouter: Router = Router();

sliderImagesRouter.get(
  '/getSliderImages',
  isLaptopImagesExist,
  responseHandler(sliderImagesController.getImages.bind(sliderImagesController)),
);

sliderImagesRouter.post(
  '/addSliderImages',
  responseHandler(sliderImagesController.addImages.bind(sliderImagesController)),
);

sliderImagesRouter.delete(
  '/delete/:id',
  responseHandler(sliderImagesController.deleteImages.bind(sliderImagesController)),
);

export default sliderImagesRouter;
