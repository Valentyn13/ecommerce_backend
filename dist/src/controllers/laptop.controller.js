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
exports.LaptopController = void 0;
const laptop_service_1 = __importDefault(require("../services/laptop.service"));
class LaptopController {
    constructor(laptopService) {
        this.laptopService = laptopService;
    }
    addLaptop(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield this.laptopService.add(req.body);
            return laptop;
        });
    }
    getLaptops(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptops = yield this.laptopService.get(req.query);
            return laptops;
        });
    }
    getLaptopById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield this.laptopService.getOne(req.query);
            return laptop;
        });
    }
    deleteLaptop(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield this.laptopService.delete(req.params.id);
            return laptop;
        });
    }
    updateLaptop(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const laptop = yield this.laptopService.update(req.params.id, req.body);
            return laptop;
        });
    }
}
exports.LaptopController = LaptopController;
const laptopController = new LaptopController(new laptop_service_1.default());
exports.default = laptopController;
