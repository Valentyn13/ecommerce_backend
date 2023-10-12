import { NextFunction, Request, Response } from 'express';

const responseHandler = (fn: Function) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | NextFunction> => {
  try {
    const data = await fn(req, res, next);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export default responseHandler;
