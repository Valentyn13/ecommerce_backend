import User from "../models/userModel";
import { createToken } from "../helpers/createToken";
import { IUser } from "../types/user.types";

export default class UserService {
  async register(data: IUser) {
    const { password, name, email } = data;
    const user = await User.create({
        email,
        password,
        name,
        role: 'USER'
    });
    const token = createToken(user._id);
    return{
      user,
      token
    };
  }

  async login(data: IUser) {
    const {email} = data
    const user = await User.findOne({email});
    const token = createToken(user?._id);
    return{
      user,
      token
    };
  }

  async logOut() {
    return "User profile";
  }
}
