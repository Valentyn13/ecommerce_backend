import { Response } from "express";

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

    async logOutUser(res: Response) {
        res.cookie('jwt', '', {maxAge:1})
    }
}

const userController = new UserController(new UserService());
export default userController;

