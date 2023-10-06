"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptopQueryGeneraor = void 0;
const laptopQueryGeneraor = (priceFrom, priceTo, producer, screenType, screenSize, hardDriveType, cpuProducer, videoCardProducer) => {
    const requestObject = {
        $and: [],
    };
    try {
        if (priceFrom && priceTo) {
            requestObject.$and.push({
                price: {
                    $gte: priceFrom,
                    $lte: priceTo,
                },
            });
        }
        if (producer) {
            const data = producer.split(',');
            requestObject.$and.push({
                producer: {
                    $in: data,
                },
            });
        }
        if (screenType) {
            const data = screenType.split(',');
            requestObject.$and.push({
                'screen.screenType': {
                    $in: data,
                },
            });
        }
        if (screenSize) {
            const data = screenSize.split(',');
            requestObject.$and.push({
                'screen.size': {
                    $in: data,
                },
            });
        }
        if (hardDriveType) {
            const data = hardDriveType.split(',');
            requestObject.$and.push({
                'hardDrive.hardType': {
                    $in: data,
                },
            });
        }
        if (cpuProducer) {
            const data = cpuProducer.split(',');
            requestObject.$and.push({
                'CPU.producer': {
                    $in: data,
                },
            });
        }
        if (videoCardProducer) {
            const data = videoCardProducer.split(',');
            requestObject.$and.push({
                'videoCard.producer': {
                    $in: data,
                },
            });
        }
    }
    catch (error) {
        console.log(error);
    }
    return requestObject;
};
exports.laptopQueryGeneraor = laptopQueryGeneraor;
