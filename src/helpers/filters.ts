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
  } catch (error) {
    console.log(error);
  }

  return requestObject;
};
