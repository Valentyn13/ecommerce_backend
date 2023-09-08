import { IQueryObject, laptopQueryGeneraor } from '../helpers/filters';
import Laptop from '../models/laptopModel';
import { ILaptop } from '../types/laptop.types';

export default class LaptopService {
  async add(data: ILaptop) {
    const toCreate = {
      ...data,
      info: 'LAPTOP',
    };
    const laptop = await Laptop.create(toCreate);
    return laptop;
  }

  async remove(_id: string) {
    const laptop = await Laptop.findByIdAndDelete(_id);
    return laptop;
  }

  async get(data: IQueryObject) {
    const {
      priceFrom,
      priceTo,
      producer,
      screenSize,
      screenType,
      hardDriveType,
      cpuProducer,
      videoCardProducer,
    } = data;

    const filterParams = laptopQueryGeneraor(
      priceFrom,
      priceTo,
      producer,
      screenType,
      screenSize,
      hardDriveType,
      cpuProducer,
      videoCardProducer,
    );

    if (filterParams.$and.length === 0) {
      const laptops = await Laptop.find();
      return laptops;
    }

    const laptops = await Laptop.find(filterParams);
    return laptops;
  }
}
