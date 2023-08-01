import { Application } from "express";

import testRouter from "./api/tests.route";

class AppRouter {
    constructor(private app: Application) {};

    init() {
        this.app.get('/',(_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api',testRouter);
    }
}

export default AppRouter;