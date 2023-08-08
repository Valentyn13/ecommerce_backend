import { NextFunction, Response } from "express";
import bcrypt from 'bcrypt'

import { userBodyValidate } from "../helpers/userBodyValidation";
import User from "../models/userModel";
import { CustomError } from "./customError";
import { IUserRequest } from "../types/user.types";

class UserMiddleware {
    async userValidate(req: IUserRequest, res: Response, next: NextFunction) {
        try {
            const { error } = userBodyValidate(req.body)
            if (error) {
                //  Error
            }
            next()
        } catch (err) {
            next(err)
        }
    }

    async isUserExist (req: IUserRequest, res: Response, next: NextFunction) {
        const {email,password} = req.body
        try {
            const user = await User.findOne({email})

            if (!user){
                throw new CustomError({
                    name: 'USER_NOT_FOUND',
                    message:'Cannot found user with this email',
                    status:401
                })
            } 
            const isGoodPassword = await bcrypt.compare(password, user.password)
            if(!isGoodPassword){
                throw new CustomError({
                    name: 'INCORRECT_PASSWORD',
                    message:`Incorrect password for user with email ${email}`,
                    status:400
                })
            }
            next()
        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.status).json({error: error.message})
              }
        }
    }
}


export const userMiddleware = new UserMiddleware();