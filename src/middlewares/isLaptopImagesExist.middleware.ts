import { NextFunction, Request, Response } from 'express';

import { CustomError } from './customError';
import SliderImages from '../models/sliderImagesModel';

const isLaptopImagesExist = async (req: Request, res:Response, next:NextFunction) => {
  const laptopIdFromParams = req.params.laptopId;
  const laptopIdFromQueryString = req.query.laptopId;

  try {
    if (laptopIdFromParams) {
      const laptop = await SliderImages.findOne({ laptopId: laptopIdFromParams });
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Slider images of laptop with _id:${laptopIdFromParams} not found`,
          status: 400,
        });
      }
    }

    if (laptopIdFromQueryString) {
      const laptop = await SliderImages.findOne({ laptopId: laptopIdFromQueryString });
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Slider images of laptop with _id:${laptopIdFromQueryString} not found`,
          status: 400,
        });
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default isLaptopImagesExist;
