import isEmail from 'validator'
import bcrypt from 'bcrypt'
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


//fire a function befor doc saved to db
userShema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
// fire a function after doc saved to db
userShema.post('save', function(doc, next) {
    console.log('New user created, ', doc)
    next()
})

const User: Model<IUser> = model('User', userShema);

export default User;