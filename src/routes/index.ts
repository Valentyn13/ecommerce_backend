import { Application } from 'express';

import userRouter from './api/user.route';
import laptopRouter from './api/laptop.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/user', userRouter);
    this.app.use('/api/laptop', laptopRouter);
  }
}

export default AppRouter;
