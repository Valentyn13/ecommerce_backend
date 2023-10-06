"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_middleware_1 = __importDefault(require("../../middlewares/response.middleware"));
const sliderImages_controller_1 = __importDefault(require("../../controllers/sliderImages.controller"));
const isLaptopExist_1 = __importDefault(require("../../middlewares/isLaptopExist"));
const sliderImagesRouter = (0, express_1.Router)();
sliderImagesRouter.get('/getSliderImages', isLaptopExist_1.default, (0, response_middleware_1.default)(sliderImages_controller_1.default.getImages.bind(sliderImages_controller_1.default)));
sliderImagesRouter.post('/addSliderImages', isLaptopExist_1.default, (0, response_middleware_1.default)(sliderImages_controller_1.default.addImages.bind(sliderImages_controller_1.default)));
sliderImagesRouter.delete('/delete/:id', (0, response_middleware_1.default)(sliderImages_controller_1.default.deleteImages.bind(sliderImages_controller_1.default)));
exports.default = sliderImagesRouter;
