"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_middleware_1 = __importDefault(require("../../middlewares/response.middleware"));
const deals_controller_1 = __importDefault(require("../../controllers/deals.controller"));
const dealsRouter = (0, express_1.Router)();
dealsRouter.post('/add', (0, response_middleware_1.default)(deals_controller_1.default.addDeal.bind(deals_controller_1.default)));
dealsRouter.get('/get', (0, response_middleware_1.default)(deals_controller_1.default.getDeal.bind(deals_controller_1.default)));
exports.default = dealsRouter;
