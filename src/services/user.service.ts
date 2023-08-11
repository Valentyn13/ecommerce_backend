import User from "../models/userModel";
import { createToken } from "../helpers/createToken";
import { IUser } from "../types/user.types";

export default class UserService {
  async register(data: IUser) {
    const { password, name, email, role } = data;
    const user = await User.create({
        email,
        password,
        name,
        role
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

  async profile(data:IUser) {
    console.log(data)
    return {
      _id:data._id,
      email:data.email,
      name:data.name
    };
  }
}
