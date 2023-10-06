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
exports.DealsController = void 0;
const deals_service_1 = __importDefault(require("../services/deals.service"));
class DealsController {
    constructor(dealsService) {
        this.dealsService = dealsService;
    }
    addDeal(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const deal = yield this.dealsService.add(req.body);
            return deal;
        });
    }
    getDeal(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const deal = yield this.dealsService.get(req.query);
            return deal;
        });
    }
}
exports.DealsController = DealsController;
const dealsController = new DealsController(new deals_service_1.default());
exports.default = dealsController;
