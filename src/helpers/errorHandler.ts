import { Error as MongooseError } from "mongoose";

interface IUserErrors {
    [key: string]: string;
}

export const handleUserErrors = (err: MongooseError.ValidationError) => {
    const errors: IUserErrors = {} 
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] =  error.message
        })
    }

    if (err.message.includes('Laptop validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] =  error.message
        })
    }

    return errors;
}