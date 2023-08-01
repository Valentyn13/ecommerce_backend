import { Model, Schema, model } from "mongoose";
import { IUser } from "../types/user.types";

const userShema: Schema<IUser> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    }
});

const User: Model<IUser> = model('User', userShema);

export default User;