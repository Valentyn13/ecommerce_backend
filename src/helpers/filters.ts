export interface IQueryObject {
  priceFrom?: string;
  priceTo?: string;
  producer?: string;
  screenType?: string;
  screenSize?: string;
  hardDriveType?: string;
  cpuProducer?:string;
  videoCardProducer?: string;
}
type KeyType = 'price' | 'producer' | 'screen.screenType' | 'screen.size' | 'CPU.producer' | 'videoCard.producer' | 'hardDrive.hardType';
type I$and = {
  [key in KeyType]?: any;
};
interface IRequestObject {
  $and: I$and[]
}
export const laptopQueryGeneraor = (
  priceFrom?:string,
  priceTo?: string,
  producer?: string,
  screenType?: string,
  screenSize?: string,
  hardDriveType?: string,
  cpuProducer?:string,
  videoCardProducer?: string,
) => {
  const requestObject:IRequestObject = {
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
      requestObject.$and.push({
        producer: {
          $in: JSON.parse(producer),
        },
      });
    }
    if (screenType) {
      requestObject.$and.push({
        'screen.screenType': {
          $in: JSON.parse(screenType),
        },
      });
    }
    if (screenSize) {
      const screen = screenSize;
      const data = JSON.parse(JSON.stringify(screen));
      requestObject.$and.push({
        'screen.size': {
          $in: data,
        },
      });
    }
    if (hardDriveType) {
      requestObject.$and.push({
        'hardDrive.hardType': {
          $in: JSON.parse(hardDriveType),
        },
      });
    }
    if (cpuProducer) {
      requestObject.$and.push({
        'CPU.producer': {
          $in: JSON.parse(cpuProducer),
        },
      });
    }

    if (videoCardProducer) {
      requestObject.$and.push({
        'videoCard.producer': {
          $in: JSON.parse(videoCardProducer),
        },
      });
    }
  } catch (error) {
    console.log(error);
  }

  return requestObject;
};
