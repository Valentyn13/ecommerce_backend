"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./api/user.route"));
const laptop_route_1 = __importDefault(require("./api/laptop.route"));
const sliderImages_route_1 = __importDefault(require("./api/sliderImages.route"));
const deals_route_1 = __importDefault(require("./api/deals.route"));
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get('/', (_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/user', user_route_1.default);
        this.app.use('/api/laptop', laptop_route_1.default);
        this.app.use('/api/slider', sliderImages_route_1.default);
        this.app.use('/api/deals', deals_route_1.default);
    }
}
exports.default = AppRouter;
