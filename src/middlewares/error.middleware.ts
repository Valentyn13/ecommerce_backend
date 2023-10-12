/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, NextFunction, Response } from 'express';
import { Error as MongooseError } from 'mongoose';
import { MongoError } from 'mongodb';
import { CustomError } from './customError';
import handleUserErrors from '../helpers/errorHandler';

const errorHandler = async (err: Error, req:Request, res:Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }

  if (err instanceof MongooseError.ValidationError) {
    const errors = handleUserErrors(err);
    return res.status(400).json({ error: errors });
  }

  if ((err as MongoError).code === 11000) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }

  return res.status(400).json({
    error: JSON.stringify(err),
  });
};

export default errorHandler;
