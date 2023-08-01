import { Application } from "express";

import testRouter from "./api/tests.route";
import userRouter from "./api/user.route";

class AppRouter {
    constructor(private app: Application) {};

    init() {
        this.app.get('/',(_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api',testRouter);
        this.app.use('/api',userRouter)
    }
}

export default AppRouter;