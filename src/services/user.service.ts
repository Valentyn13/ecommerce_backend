import jwt from 'jsonwebtoken';

import User from "../models/userModel";
import { IUser } from "../types/user.types";

export const MAX_AGE = 1 * 24 * 60 * 60 

const createToken = (id:string) => {
  return jwt.sign({id}, 'SECRET', {
      expiresIn: MAX_AGE // 1 day
  })
}

export default class UserService {
  async register(data: IUser) {
    const { password, name, email } = data;
    const user = await User.create({
        email,
        password,
        name,
        role: 'USER'
    });
    const token = createToken(user._id)
    return{
      user,
      token
    } ;
  }

  async login(data: IUser) {
    const {email} = data
    const user = await User.findOne({email});
    const token = createToken(user?._id)
    return{
      user,
      token
    };
  }

  async getProfile() {
    return "User profile";
  }
}
