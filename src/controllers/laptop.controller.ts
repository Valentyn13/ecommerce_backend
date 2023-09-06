import { Request } from 'express';

import LaptopService from '../services/laptop.service';
import { ILaptopRequest } from '../types/laptop.types';

export class LaptopController {
  constructor(private laptopService: LaptopService) {}

  async addLaptop(req: ILaptopRequest) {
    const laptop = await this.laptopService.add(req.body);
    return laptop;
  }

  async removeLaptop(req: Request) {
    const laptop = await this.laptopService.remove(req.body as string);
    return laptop;
  }

  async getLaptops(req: Request) {
    const laptops = await this.laptopService.get(req.query);
    return laptops;
  }
}

const laptopController = new LaptopController(new LaptopService());
export default laptopController;
