import { NextFunction, Request, Response } from 'express';
import { MongoError } from 'mongodb';
import { Error as MongooseError } from 'mongoose';

import handleUserErrors from '../helpers/errorHandler';

const responseHandler = (fn: Function) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | NextFunction> => {
  try {
    const data = await fn(req, res, next);
    res.send(data);
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) {
      const errors = handleUserErrors(error);
      res.status(400).json({ errors });
    } else if ((error as MongoError).code === 11000) {
      res.status(400).json({
        error: JSON.stringify(error),
        // email: 'A user with this this unique key already exists!',
      });
    } else {
      res.status(500).json(JSON.stringify(error));
    }
  }
};

export default responseHandler;
