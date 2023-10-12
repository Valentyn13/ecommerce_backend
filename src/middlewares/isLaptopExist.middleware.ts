import { NextFunction, Request, Response } from 'express';

import { CustomError } from './customError';
import Laptop from '../models/laptopModel';

const isLaptopExist = async (req: Request, res:Response, next:NextFunction) => {
  const laptopIdFromParams = req.params.id;
  const laptopIdFromQueryString = req.query.id;

  try {
    if (laptopIdFromParams) {
      const laptop = await Laptop.findById(laptopIdFromParams);
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Laptop with _id:${laptopIdFromParams} not found`,
          status: 400,
        });
      }
    }

    if (laptopIdFromQueryString) {
      const laptop = await Laptop.findById(laptopIdFromQueryString);
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Laptop with _id:${laptopIdFromQueryString} not found`,
          status: 400,
        });
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default isLaptopExist;
