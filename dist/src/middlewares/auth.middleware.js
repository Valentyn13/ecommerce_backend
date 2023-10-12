"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const customError_1 = require("./customError");
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    try {
        token = req.cookies.jwt;
        if (!token) {
            throw new customError_1.CustomError({
                name: 'NO_TOKEN',
                message: 'JWT token not found, please authorize',
                status: 401,
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, 'SECRET');
        const authorizedUser = yield userModel_1.default.findById(decoded.id).select('-password');
        if (!authorizedUser) {
            throw new customError_1.CustomError({
                name: 'INVALID_TOKEN',
                message: 'Cannot find user by JWT token',
                status: 401,
            });
        }
        req.body = authorizedUser;
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.default = protect;
