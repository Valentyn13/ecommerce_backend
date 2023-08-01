import { Request, NextFunction, Response } from "express";

export const tryCatch = 
(controller: any) => async (req: Request , res: Response, next: NextFunction) => {
    try {
        const response =await controller(req, res, next);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:error})
    }
}