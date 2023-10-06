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
/* eslint-disable no-underscore-dangle */
const userModel_1 = __importDefault(require("../models/userModel"));
const createToken_1 = require("../helpers/createToken");
class UserService {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, name, email, role, } = data;
            const user = yield userModel_1.default.create({
                email,
                password,
                name,
                role,
                info: 'USER',
            });
            const token = (0, createToken_1.createToken)(user._id);
            return {
                user,
                token,
            };
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = data;
            const user = yield userModel_1.default.findOne({ email });
            const token = (0, createToken_1.createToken)(user === null || user === void 0 ? void 0 : user._id);
            return {
                user,
                token,
            };
        });
    }
    profile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                _id: data._id,
                email: data.email,
                name: data.name,
            };
        });
    }
}
exports.default = UserService;
