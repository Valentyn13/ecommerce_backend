import { Request } from 'express';

import LaptopService from '../services/laptop.service';
import { ILaptopRequest } from '../types/laptop.types';

export class LaptopController {
  constructor(private laptopService: LaptopService) {}

  async addLaptop(req: ILaptopRequest) {
    const laptop = await this.laptopService.add(req.body);
    return laptop;
  }

  async getLaptops(req: Request) {
    const laptops = await this.laptopService.get(req.query);
    return laptops;
  }

  async getLaptopById(req: Request) {
    const laptop = await this.laptopService.getOne(req.query);
    return laptop;
  }

  async deleteLaptop(req: Request) {
    const laptop = await this.laptopService.delete(req.params.id);
    return laptop;
  }

  async updateLaptop(req: Request) {
    const laptop = await this.laptopService.update(req.params.id, req.body);
    return laptop;
  }
}

const laptopController = new LaptopController(new LaptopService());
export default laptopController;
