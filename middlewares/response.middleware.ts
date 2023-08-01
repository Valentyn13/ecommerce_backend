import { NextFunction, Request, Response } from "express";

export const responseHandler = (fn: Function) =>
async(req: Request, res: Response, next: NextFunction): Promise<void| NextFunction> => {
    try {
        const data = await fn(req, res, next);
        if(!data) throw new Error('response error');
        res.json(data)
    } catch (error) {
        next(error)
    }
}