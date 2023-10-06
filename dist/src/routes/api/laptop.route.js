"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_middleware_1 = __importDefault(require("../../middlewares/response.middleware"));
const laptop_controller_1 = __importDefault(require("../../controllers/laptop.controller"));
const laptopRouter = (0, express_1.Router)();
laptopRouter.post('/add', (0, response_middleware_1.default)(laptop_controller_1.default.addLaptop.bind(laptop_controller_1.default)));
laptopRouter.post('/remove', (0, response_middleware_1.default)(laptop_controller_1.default.removeLaptop.bind(laptop_controller_1.default)));
laptopRouter.get('/all', (0, response_middleware_1.default)(laptop_controller_1.default.getLaptops.bind(laptop_controller_1.default)));
laptopRouter.get('/byId', (0, response_middleware_1.default)(laptop_controller_1.default.getLaptopById.bind(laptop_controller_1.default)));
laptopRouter.delete('/delete/:id', (0, response_middleware_1.default)(laptop_controller_1.default.deleteLaptop.bind(laptop_controller_1.default)));
laptopRouter.patch('/update/:id', (0, response_middleware_1.default)(laptop_controller_1.default.updateLaptop.bind(laptop_controller_1.default)));
exports.default = laptopRouter;
