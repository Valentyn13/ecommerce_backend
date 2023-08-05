import { NextFunction, Request, Response } from "express";
import { Error as MongooseError } from "mongoose";
import { handleUserErrors } from "./userError";
import { MongoError } from 'mongodb';

export const responseHandler = (fn: Function) =>
async(req: Request, res: Response, next: NextFunction): Promise<void|NextFunction> => {
    try {
        const data = await fn(req, res, next);
        res.send(data)  
    } catch (error) {
        if(error instanceof MongooseError.ValidationError) {
            const errors = handleUserErrors(error)
            res.status(400).json({errors})
        } else if ((error as MongoError).code === 11000) {
            res.status(400).json({
              email: 'A user with this this unique key already exists!',
            });
          } else {
            res.status(500).json({message: "Internal server error"})
          }
    }
}