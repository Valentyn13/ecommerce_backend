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
const sliderImagesModel_1 = __importDefault(require("../models/sliderImagesModel"));
class SliderImagesService {
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sliderImages = yield sliderImagesModel_1.default.create(data);
            return sliderImages;
        });
    }
    get(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { laptopId } = data;
            const sliderImages = yield sliderImagesModel_1.default.findOne({ laptopId });
            return sliderImages;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sliderImages = yield sliderImagesModel_1.default.findByIdAndDelete(id);
            return sliderImages;
        });
    }
}
exports.default = SliderImagesService;
