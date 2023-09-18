import { ParsedQs } from 'qs';
import { IQueryObject, laptopQueryGeneraor } from '../helpers/filters';
import Laptop from '../models/laptopModel';
import { ILaptop } from '../types/laptop.types';

const LAPTOP_PER_PAGE = 12;

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

    const page = data.page || 1;
    const skip = (page - 1) * LAPTOP_PER_PAGE;
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
      const count = await Laptop.countDocuments();
      const laptops = await Laptop.find().limit(LAPTOP_PER_PAGE).skip(skip);
      const pageCount = Math.ceil(count / LAPTOP_PER_PAGE);
      return {
        laptopList: laptops,
        pageCount,
      };
    }
    const count = await Laptop.countDocuments(filterParams);
    const laptops = await Laptop.find(filterParams).limit(LAPTOP_PER_PAGE).skip(skip);
    const pageCount = Math.ceil(count / LAPTOP_PER_PAGE);
    return {
      laptopList: laptops,
      pageCount,
    };
  }

  async getOne(data: ParsedQs) {
    const { id } = data;
    const laptop = await Laptop.findById(id);
    return laptop;
  }

  async delete(id: string) {
    const laptop = await Laptop.findByIdAndDelete(id);
    return laptop;
  }

  async update(id: string, payload: any) {
    const laptop = await Laptop.findByIdAndUpdate(id, payload);
    return laptop;
  }
}
