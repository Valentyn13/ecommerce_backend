export class CustomError extends Error {
    name = 'Server error';

    status: number = 0;

    message: string = '';

    code?: number;

    constructor(message: string,status:number,  code?: number) {
        super()
        this.message = message;
        this.status = status;
        this.code = code;
        Error.captureStackTrace(this, this.constructor)
    }
}