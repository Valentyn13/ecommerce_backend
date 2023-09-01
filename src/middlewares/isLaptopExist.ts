import { NextFunction, Response, Request } from 'express';

import { CustomError } from './customError';
import Laptop from '../models/laptopModel';

const isLaptopExist = async (req: Request, res:Response, next:NextFunction) => {
  const laptopIdFromBody = req.body.laptopId;
  const laptopIdFromQueryString = req.query.laptopId;
  try {
    if (!laptopIdFromQueryString && laptopIdFromBody) {
      const laptop = await Laptop.find({ _id: laptopIdFromBody });
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Laptop with _id:${laptopIdFromBody} not found (post query)`,
          status: 400,
        });
      }
    }

    if (!laptopIdFromBody && laptopIdFromQueryString) {
      const laptop = await Laptop.find({ _id: laptopIdFromQueryString });
      if (!laptop) {
        throw new CustomError({
          name: 'NOT_EXIST',
          message: `Laptop with _id:${laptopIdFromQueryString} not found (get query)`,
          status: 400,
        });
      }
    }
    if (!laptopIdFromBody && !laptopIdFromQueryString) {
      throw new CustomError({
        name: 'NOT_EXIST',
        message: 'laptopId parametr is not exist in query string',
        status: 400,
      });
    }
    next();
  } catch (err) {
    if (err instanceof CustomError) {
      res.status(err.status).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }
  }
};

export default isLaptopExist;
