import Laptop from '../models/laptopModel';
import { ILaptop } from '../types/product.types';

export default class LaptopService {
  async add(data: ILaptop) {
    const toCreate = {
      ...data,
      info: 'LAPTOP',
    };
    const laptop = await Laptop.create(toCreate);
    return laptop;
  }

  async remove(_id:string) {
    const laptop = await Laptop.findByIdAndDelete(_id);
    return laptop;
  }

  async get() {
    const laptops = await Laptop.find();
    return laptops;
  }
}
