import { Router } from "express";

import { tryCatch } from "../../middlewares/tryCatch.middleware";
import { responseHandler } from "../../middlewares/response.middleware";
import testController from "../../controllers/test.controller";

const testRouter: Router = Router();

testRouter.get('/test',
tryCatch(responseHandler(testController.showTestMessage.bind(testController)))
)

export default testRouter