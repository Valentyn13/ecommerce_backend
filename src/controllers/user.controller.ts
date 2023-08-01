import UserService from "../services/user.service";

export class UserController {
    constructor(private userService: UserService){};

    async registerUser() {
        const user = this.userService.register();
        return user;
    }

    async loginUser() {
        const user = this.userService.login();
        return user;
    }

    async getUserProfile() {
        const user = this.userService.getProfile();
        return user;
    }
}

const userController = new UserController(new UserService());
export default userController;