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
exports.SliderImagesController = void 0;
const sliderImages_service_1 = __importDefault(require("../services/sliderImages.service"));
class SliderImagesController {
    constructor(sliderImagesService) {
        this.sliderImagesService = sliderImagesService;
    }
    addImages(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const images = yield this.sliderImagesService.add(req.body);
            return images;
        });
    }
    getImages(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const images = yield this.sliderImagesService.get(req.query);
            return images;
        });
    }
    deleteImages(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const images = yield this.sliderImagesService.delete(req.params.id);
            return images;
        });
    }
}
exports.SliderImagesController = SliderImagesController;
const sliderImagesController = new SliderImagesController(new sliderImages_service_1.default());
exports.default = sliderImagesController;
