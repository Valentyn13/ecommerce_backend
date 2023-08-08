export type USER_ERRORS_NAMES = 'USER_NOT_FOUND' | 'INCORRECT_PASSWORD';
export type AUTH_ERRORS_NAMES = 'NO_TOKEN' | 'INVALID_TOKEN';

export class CustomError extends Error {
    name: USER_ERRORS_NAMES | AUTH_ERRORS_NAMES;

    status: number;

    message: string;

    constructor({
        name,
        message,
        status,
    }: {
        name:USER_ERRORS_NAMES| AUTH_ERRORS_NAMES,
        message: string,
        status: number
    }) {
        super()
        this.name = name
        this.message = message;
        this.status = status;
    }
}