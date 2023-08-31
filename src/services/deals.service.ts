import { ParsedQs } from 'qs';

import Deals from '../models/dealsModel';
import { IDeal } from '../types/deals.types';

export default class DealsService {
  async add(dealDetail: IDeal) {
    const deal = await Deals.create(dealDetail);
    return deal;
  }

  async get(data: ParsedQs) {
    const { customerID } = data;
    const deal = await Deals.find({ customerID });
    return deal;
  }
}
