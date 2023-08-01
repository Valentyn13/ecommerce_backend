import { NextFunction, Request, Response } from "express";
import { CustomError } from "./customError";

export const responseHandler = (fn: Function) =>
async(req: Request, res: Response, next: NextFunction): Promise<void|NextFunction> => {
    try {
        const data = await fn(req, res, next);
        if(!data) throw new CustomError("Response hendler error", 500);
        return data 
    } catch (error) {
        next(error)
    }
}