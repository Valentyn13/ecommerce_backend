import { Error as MongooseError } from "mongoose";
export class UserError extends Error {
    name = 'User Error';

    status: number = 0;

    message: string = '';



    constructor(status: number, message:string) {
        super()
        this.status = status;
        this.message = message

        Error.captureStackTrace(this, this.constructor)
    }
}

interface IUserErrors {
    [key: string]: string;
}

export const handleUserErrors = (err: MongooseError.ValidationError) => {
    const errors: IUserErrors = {'email': '', 'password': '', 'name': ''}
    
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] =  error.message
        })
    }

    return errors;
}