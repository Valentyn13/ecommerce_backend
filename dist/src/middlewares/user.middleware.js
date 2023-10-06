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
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../models/userModel"));
const customError_1 = require("./customError");
const isUserExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield userModel_1.default.findOne({ email });
        if (!user) {
            throw new customError_1.CustomError({
                name: 'USER_NOT_FOUND',
                message: 'Cannot found user with this email',
                status: 401,
            });
        }
        const isGoodPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isGoodPassword) {
            throw new customError_1.CustomError({
                name: 'INCORRECT_PASSWORD',
                message: `Incorrect password for user with email ${email}`,
                status: 400,
            });
        }
        next();
    }
    catch (error) {
        if (error instanceof customError_1.CustomError) {
            res.status(error.status).json({ error: error.message });
        }
    }
});
exports.default = isUserExist;
