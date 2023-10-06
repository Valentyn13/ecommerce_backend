"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleUserErrors = (err) => {
    const errors = {};
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] = error.message;
        });
    }
    if (err.message.includes('Laptop validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] = error.message;
        });
    }
    if (err.message.includes('Deal validation failed')) {
        Object.values(err.errors).forEach((error) => {
            errors[error.path] = error.message;
        });
    }
    return errors;
};
exports.default = handleUserErrors;
