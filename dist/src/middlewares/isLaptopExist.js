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
const customError_1 = require("./customError");
const laptopModel_1 = __importDefault(require("../models/laptopModel"));
const isLaptopExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const laptopIdFromBody = req.body.laptopId;
    const laptopIdFromQueryString = req.query.laptopId;
    try {
        if (!laptopIdFromQueryString && laptopIdFromBody) {
            const laptop = yield laptopModel_1.default.find({ _id: laptopIdFromBody });
            if (!laptop) {
                throw new customError_1.CustomError({
                    name: 'NOT_EXIST',
                    message: `Laptop with _id:${laptopIdFromBody} not found (post query)`,
                    status: 400,
                });
            }
        }
        if (!laptopIdFromBody && laptopIdFromQueryString) {
            const laptop = yield laptopModel_1.default.find({ _id: laptopIdFromQueryString });
            if (!laptop) {
                throw new customError_1.CustomError({
                    name: 'NOT_EXIST',
                    message: `Laptop with _id:${laptopIdFromQueryString} not found (get query)`,
                    status: 400,
                });
            }
        }
        if (!laptopIdFromBody && !laptopIdFromQueryString) {
            throw new customError_1.CustomError({
                name: 'NOT_EXIST',
                message: 'laptopId parametr is not exist in query string',
                status: 400,
            });
        }
        next();
    }
    catch (err) {
        if (err instanceof customError_1.CustomError) {
            res.status(err.status).json({
                error: {
                    name: err.name,
                    message: err.message,
                },
            });
        }
    }
});
exports.default = isLaptopExist;
