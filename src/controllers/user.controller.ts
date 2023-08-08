import { Response, Request } from "express";

import UserService from "../services/user.service";
import { IUserRequest } from "../types/user.types";
import { MAX_AGE } from "../helpers/createToken";
export class UserController {
    constructor(private userService: UserService){};

    async registerUser(req:IUserRequest, res: Response ) {
        const user = await this.userService.register(req.body);
        res.cookie('jwt', user.token, { httpOnly: true, maxAge: MAX_AGE * 1000 });
        return user;
    }

    async loginUser(req: IUserRequest, res: Response) {
        const user = await this.userService.login(req.body);
        res.cookie('jwt', user.token, { httpOnly: true, maxAge: MAX_AGE * 1000 });
        return user;
    }

    async getProfile(req: Request) {
        const profile = await this.userService.profile(req.body)
        return profile
    }

    async logOutUser(res: Response) {
        res.cookie('jwt', '', {maxAge:1})
    }
}

const userController = new UserController(new UserService());
export default userController;

