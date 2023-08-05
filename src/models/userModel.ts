import isEmail from 'validator'
import { Model, Schema, model } from "mongoose";
import { IUser } from "../types/user.types";

const userShema: Schema<IUser> = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email' ],
        unique: true,
        validate: [() => isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [5,'Password must be longer than 5 characters']
    },
    name: {
        type: String,
        required: [true, 'Please type a username' ],
        minlength: [3,'Username must be longer than 3 characters']
    },
    role: {
        type: String,
        required: true
    }
});

const User: Model<IUser> = model('User', userShema);

export default User;