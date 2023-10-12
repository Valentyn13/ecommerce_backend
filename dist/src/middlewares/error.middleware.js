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
const mongoose_1 = require("mongoose");
const customError_1 = require("./customError");
const errorHandler_1 = __importDefault(require("../helpers/errorHandler"));
const errorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (err instanceof customError_1.CustomError) {
        return res.status(err.status).json({
            error: {
                name: err.name,
                message: err.message,
            },
        });
    }
    if (err instanceof mongoose_1.Error.ValidationError) {
        const errors = (0, errorHandler_1.default)(err);
        return res.status(400).json({ error: errors });
    }
    if (err.code === 11000) {
        return res.status(400).json({
            error: JSON.stringify(err),
        });
    }
    return res.status(400).json({
        error: JSON.stringify(err),
    });
});
exports.default = errorHandler;
