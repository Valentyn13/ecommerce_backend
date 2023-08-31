import DealsService from '../services/deals.service';
import { IDelaRequest } from '../types/deals.types';

export class DealsController {
  constructor(private dealsService: DealsService) {}

  async addDeal(req: IDelaRequest) {
    const deal = await this.dealsService.add(req.body);
    return deal;
  }

  async getDeal(req: IDelaRequest) {
    const deal = await this.dealsService.get(req.query);
    return deal;
  }
}

const dealsController = new DealsController(new DealsService());
export default dealsController;
