import joi from "joi";
import { IUser } from "../types/user.types";

export const userBodyValidate = (user: IUser) => {
    const userShema = joi.object<IUser>({
        password: joi.string().min(5).trim().required(),
        name: joi.string().min(3).trim().required(),
        email: joi.string().email().required(),
        role: joi.string().max(5).trim().required()
    })

    return userShema.validate(user)
}


