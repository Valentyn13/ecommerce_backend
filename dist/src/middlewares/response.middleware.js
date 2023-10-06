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
const errorHandler_1 = __importDefault(require("../helpers/errorHandler"));
const responseHandler = (fn) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fn(req, res, next);
        res.send(data);
    }
    catch (error) {
        if (error instanceof mongoose_1.Error.ValidationError) {
            const errors = (0, errorHandler_1.default)(error);
            res.status(400).json({ errors });
        }
        else if (error.code === 11000) {
            res.status(400).json({
                error: JSON.stringify(error),
                // email: 'A user with this this unique key already exists!',
            });
        }
        else {
            res.status(500).json(JSON.stringify(error));
        }
    }
});
exports.default = responseHandler;
