
import UserService from "../services/user.service";
import { IUserRequest } from "../types/user.types";

export class UserController {
    constructor(private userService: UserService){};

    async registerUser(req:IUserRequest ) {
        const user = await this.userService.register(req.body);
        return user;
    }

    async loginUser(req: IUserRequest) {
        const user = await this.userService.login(req.body);
        return user;
    }

    async getUserProfile() {
        const user = await this.userService.getProfile();
        return user;
    }
}

const userController = new UserController(new UserService());
export default userController;

