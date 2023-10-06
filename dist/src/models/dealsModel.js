"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dealsShema = new mongoose_1.Schema({
    customerID: {
        type: String,
        unique: false,
        required: [true, 'Customer id is required'],
    },
    customerData: {
        name: {
            type: String,
            required: [true, 'Customer name is required'],
        },
        surname: {
            type: String,
            required: [true, 'Customer surname is required'],
        },
        phone: {
            type: Number,
            required: [true, 'Customer phone is required'],
        },
        address: {
            country: {
                type: String,
                required: [true, 'Customer country is required'],
            },
            city: {
                type: String,
                required: [true, 'Customer city is required'],
            },
            street: {
                type: String,
                required: [true, 'Customer street is required'],
            },
            postIndex: {
                type: Number,
                required: [true, 'Customer post index is required'],
            },
        },
    },
    products: {
        type: [{
                amount: {
                    type: Number,
                    required: [true, 'Product amount is required'],
                },
                product: {
                    name: {
                        type: String,
                        required: [true, 'Name is required'],
                    },
                    price: {
                        type: Number,
                        required: [true, 'Price is required'],
                    },
                    producer: {
                        type: String,
                        enum: ['Lenovo', 'Acer', 'HP', 'Asus', 'Apple', 'Dell'],
                        required: [true, 'Producer is required'],
                    },
                    mainImage: {
                        type: String,
                        required: [true, 'Image is required'],
                    },
                    screen: {
                        size: {
                            type: String,
                            enum: ['13', '14', '15.6', '16', '17'],
                            required: [true, 'Screen size is required'],
                        },
                        screenType: {
                            type: String,
                            required: [true, 'Screen type is required'],
                        },
                        resolution: {
                            type: String,
                            required: [true, 'Screen resolution is required'],
                        },
                    },
                    CPU: {
                        producer: {
                            type: String,
                            required: [true, 'CPU producer is required'],
                        },
                        model: {
                            type: String,
                            required: [true, 'CPU model is required'],
                        },
                        cores: {
                            type: Number,
                            required: [true, 'CPU cores is required'],
                        },
                    },
                    videoCard: {
                        producer: {
                            type: String,
                            required: [true, 'Videocard producer is required'],
                        },
                        model: {
                            type: String,
                            required: [true, 'Videocard model is required'],
                        },
                    },
                    hardDrive: {
                        value: {
                            type: Number,
                            required: [true, 'Hard disk value is required'],
                        },
                        hardType: {
                            type: String,
                            required: [true, 'Hard disk type is required'],
                        },
                    },
                },
            }],
        required: true,
    },
    totalPrice: {
        type: Number,
        required: [true, 'Price of deal is required'],
    },
});
const Deals = (0, mongoose_1.model)('Deal', dealsShema);
exports.default = Deals;
