import { Document } from "mongoose";

type UserRole = 'USER' | 'ADMIN'

export interface IUser extends Document {
    email: string;
    password: string;
    avatar?: string;
    name: string;
    role: UserRole;
}