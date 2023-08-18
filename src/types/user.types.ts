import { Request } from 'express';
import { Document } from 'mongoose';

type UserRole = 'USER' | 'ADMIN';

export interface IUser extends Document {
  info?:string;
  email: string;
  password: string;
  name: string;
  role?: UserRole;
}

export interface IUserRequest extends Request {
  body: IUser;
}
