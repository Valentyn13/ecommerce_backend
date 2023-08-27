import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import sliderImagesController from '../../controllers/sliderImages.controller';

const sliderImagesRouter: Router = Router();

sliderImagesRouter.get(
  '/getSliderImages',
  responseHandler(sliderImagesController.getImages.bind(sliderImagesController)),
);

sliderImagesRouter.post(
  '/addSliderImages',
  responseHandler(sliderImagesController.addImages.bind(sliderImagesController)),
);

export default sliderImagesRouter;
