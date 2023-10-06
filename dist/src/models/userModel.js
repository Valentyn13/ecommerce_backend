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
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const userShema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        validate: [() => validator_1.default, 'please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [5, 'Password must be longer than 5 characters'],
    },
    name: {
        type: String,
        required: [true, 'Please type a username'],
        minlength: [3, 'Username must be longer than 3 characters'],
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        required: true,
    },
});
// fire a function befor doc saved to db
userShema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt();
        this.password = yield bcrypt_1.default.hash(this.password, salt);
        next();
    });
});
// fire a function after doc saved to db
userShema.post('save', (doc, next) => {
    console.log('New user created, ', doc);
    next();
});
const User = (0, mongoose_1.model)('User', userShema);
exports.default = User;
