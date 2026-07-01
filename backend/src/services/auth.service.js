import User from '../models/User.js';
import bcrypt from 'bcrypt';

const login = async(data) => {
    const user = await User.findOne({email: data.email});

    if(!user) {
        throw {
            status: 404,
            message: "User not found",
        }
    }

    const isPasswordMatch = bcrypt.compareSync(data.password, user.password);

    if(!isPasswordMatch) {
        throw {
            status: 400,
            message: "Password do not match",
        }
    }

    return user;
}

const register = async (data) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    return await User.create({
        ...data,
        password: hashedPassword,
    });
}

export default {register, login};