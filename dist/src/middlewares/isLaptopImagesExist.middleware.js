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
const sliderImagesModel_1 = __importDefault(require("../models/sliderImagesModel"));
const isLaptopImagesExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const laptopIdFromParams = req.params.laptopId;
    const laptopIdFromQueryString = req.query.laptopId;
    try {
        if (laptopIdFromParams) {
            const laptop = yield sliderImagesModel_1.default.findOne({ laptopId: laptopIdFromParams });
            if (!laptop) {
                throw new customError_1.CustomError({
                    name: 'NOT_EXIST',
                    message: `Slider images of laptop with _id:${laptopIdFromParams} not found`,
                    status: 400,
                });
            }
        }
        if (laptopIdFromQueryString) {
            const laptop = yield sliderImagesModel_1.default.findOne({ laptopId: laptopIdFromQueryString });
            if (!laptop) {
                throw new customError_1.CustomError({
                    name: 'NOT_EXIST',
                    message: `Slider images of laptop with _id:${laptopIdFromQueryString} not found`,
                    status: 400,
                });
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = isLaptopImagesExist;
