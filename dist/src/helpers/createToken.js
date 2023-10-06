"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.MAX_AGE = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.MAX_AGE = 1 * 24 * 60 * 60;
const createToken = (id) => jsonwebtoken_1.default.sign({ id }, 'SECRET', {
    expiresIn: '1d',
});
exports.createToken = createToken;
