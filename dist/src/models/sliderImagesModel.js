"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sliderImagesShema = new mongoose_1.Schema({
    laptopId: {
        type: String,
        unique: true,
        required: [true, 'UserId is required for correct work'],
    },
    images: {
        type: [String],
        validate: {
            validator: (arr) => (arr.length >= 3),
            message: 'Slider need 3 images',
        },
    },
});
const SliderImages = (0, mongoose_1.model)('SliderImage', sliderImagesShema);
exports.default = SliderImages;
