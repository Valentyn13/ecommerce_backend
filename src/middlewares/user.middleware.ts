import { NextFunction, Response } from "express";
import { userBodyValidate } from "../../helpers/userBodyValidation";
import { IUserRequest } from "../types/user.types";
import { UserError } from "./userError";

class UserMiddleware {
    async userValidate(req: IUserRequest, res: Response, next: NextFunction) {
        try {
            const { error } = userBodyValidate(req.body)
            if (error) {
                //throw new UserError('Invalid user body', 400)
            }
            next()
        } catch (err) {
            next(err)
        }
    }
}


export const userMiddleware = new UserMiddleware();