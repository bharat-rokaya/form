import mongoose from 'mongoose';

const userSchema = mongoose.newSchema({
    username : {
        type: [String, 'Username is required'],
        required: true,
        unique: true,
        minLength: [3, 'Username must be 3 characters long'],
        maxLength: [20, 'Username must be less than 20 characters'],
    },
    email : {
        type : [String, 'Email is required'],
        required: true,
        unique: true,
    },
    password : {
        type: [String, 'Password is required'],
        required: true,
        minLength: [6, 'Password must be 6 characters long'],
        maxLength : [25, 'PAssword must be less than 20 characters'],
    }
});