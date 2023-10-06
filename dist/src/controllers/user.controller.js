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
exports.UserController = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const createToken_1 = require("../helpers/createToken");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.register(req.body);
            res.cookie('jwt', user.token, { httpOnly: true, maxAge: createToken_1.MAX_AGE * 1000 });
            return user;
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.login(req.body);
            res.cookie('jwt', user.token, { httpOnly: true, maxAge: createToken_1.MAX_AGE * 1000 });
            return user;
        });
    }
    getProfile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.userService.profile(req.body);
            return profile;
        });
    }
    static logOutUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.cookie('jwt', '', { maxAge: 1 });
            return 'Logout user';
        });
    }
}
exports.UserController = UserController;
const userController = new UserController(new user_service_1.default());
exports.default = userController;
