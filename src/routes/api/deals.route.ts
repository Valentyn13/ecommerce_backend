import { Router } from 'express';

import responseHandler from '../../middlewares/response.middleware';
import dealsController from '../../controllers/deals.controller';

const dealsRouter: Router = Router();

dealsRouter.post(
  '/add',
  responseHandler(dealsController.addDeal.bind(dealsController)),
);

dealsRouter.get(
  '/get',
  responseHandler(dealsController.getDeal.bind(dealsController)),
);

export default dealsRouter;
