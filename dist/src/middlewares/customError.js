"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor({ name, message, status, }) {
        super();
        this.name = name;
        this.message = message;
        this.status = status;
    }
}
exports.CustomError = CustomError;
