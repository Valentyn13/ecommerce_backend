import { Request, Response } from "express";
import LaptopService from "../services/laptop.service";
import { ILaptopRequest } from "../types/product.types";

export class LaptopController {
    constructor(private laptopService: LaptopService){};

    async addLaptop(req: ILaptopRequest, res:Response) {
            const laptop = await this.laptopService.add(req.body);
            return laptop;
    }

    async removeLaptop(req: Request) {
        const laptop = await this.laptopService.remove(req.body as string);
        return laptop;
    }

    async getLaptops() {
        const laptops = await this.laptopService.get()
        return laptops;
    }
}

const laptopController = new LaptopController(new LaptopService());
export default laptopController;