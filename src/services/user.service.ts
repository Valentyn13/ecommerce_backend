import User from "../models/userModel";
import { IUser } from "../types/user.types";

export default class UserService {
  async register(data: IUser) {
    const { password, role, name, email } = data;
    const user = await User.create({
        email,
        password,
        name,
        role
    });
    return user;
  }

  async login() {
    return "User logged in";
  }

  async getProfile() {
    return "User profile";
  }
}
