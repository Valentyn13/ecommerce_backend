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
const filters_1 = require("../helpers/filters");
const laptopModel_1 = __importDefault(require("../models/laptopModel"));
const LAPTOP_PER_PAGE = 12;
class LaptopService {
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const toCreate = Object.assign(Object.assign({}, data), { info: 'LAPTOP' });
            const laptop = yield laptopModel_1.default.create(toCreate);
            return laptop;
        });
    }
    remove(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield laptopModel_1.default.findByIdAndDelete(_id);
            return laptop;
        });
    }
    get(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { priceFrom, priceTo, producer, screenSize, screenType, hardDriveType, cpuProducer, videoCardProducer, } = data;
            const page = data.page || 1;
            const skip = (page - 1) * LAPTOP_PER_PAGE;
            const filterParams = (0, filters_1.laptopQueryGeneraor)(priceFrom, priceTo, producer, screenType, screenSize, hardDriveType, cpuProducer, videoCardProducer);
            if (filterParams.$and.length === 0) {
                const count = yield laptopModel_1.default.countDocuments();
                const laptops = yield laptopModel_1.default.find().limit(LAPTOP_PER_PAGE).skip(skip);
                const pageCount = Math.ceil(count / LAPTOP_PER_PAGE);
                return {
                    laptopList: laptops,
                    pageCount,
                };
            }
            const count = yield laptopModel_1.default.countDocuments(filterParams);
            const laptops = yield laptopModel_1.default.find(filterParams).limit(LAPTOP_PER_PAGE).skip(skip);
            const pageCount = Math.ceil(count / LAPTOP_PER_PAGE);
            return {
                laptopList: laptops,
                pageCount,
            };
        });
    }
    getOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = data;
            const laptop = yield laptopModel_1.default.findById(id);
            return laptop;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield laptopModel_1.default.findByIdAndDelete(id);
            return laptop;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield laptopModel_1.default.findByIdAndUpdate(id, payload);
            return laptop;
        });
    }
}
exports.default = LaptopService;
