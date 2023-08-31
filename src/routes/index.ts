import { Application } from 'express';

import userRouter from './api/user.route';
import laptopRouter from './api/laptop.route';
import sliderImagesRouter from './api/sliderImages.route';
import dealsRouter from './api/deals.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/user', userRouter);
    this.app.use('/api/laptop', laptopRouter);
    this.app.use('/api/slider', sliderImagesRouter);
    this.app.use('/api/deals', dealsRouter);
  }
}

export default AppRouter;
