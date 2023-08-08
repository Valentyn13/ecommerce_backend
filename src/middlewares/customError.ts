export type USER_ERROR_NAMES = 'USER_NOT_FOUND' | 'INCORRECT_PASSWORD'

export class CustomError extends Error {
    name: USER_ERROR_NAMES;

    status: number;

    message: string;

    constructor({
        name,
        message,
        status,
    }: {
        name:USER_ERROR_NAMES,
        message: string,
        status: number
    }) {
        super()
        this.name = name
        this.message = message;
        this.status = status;
    }
}