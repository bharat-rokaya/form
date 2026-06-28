import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        minLength: [3, 'Username must be 3 characters long'],
        maxLength: [20, 'Username must be less than 20 characters'],
    },
    email : {
        type : String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password : {
        type:String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be 6 characters long'],
        maxLength : [25, 'PAssword must be less than 20 characters'],
    }
});

export default mongoose.model("User", userSchema); 