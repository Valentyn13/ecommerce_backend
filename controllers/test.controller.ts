import TestService from "../services/test.service";

export class TestController {
    constructor(private testService: TestService){};

    async showTestMessage() {
        const message = this.testService.getMessage();
        return message;
    }
}

const testController = new TestController(new TestService());
export default testController;