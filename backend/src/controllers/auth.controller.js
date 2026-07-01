import authService from '../services/auth.service.js';

const login = async(req, res) => {
    try {
        const user = await authService.login(req.body);
        return res.status(200).json(user);
    } catch(error) {
        const status = error?.status || 500;
        const message = error?.message || 'Internal server error';
        return res.status(status).send(message);
    }
}

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        return res.status(201).json(user);
    } catch(error) {
        const status = error?.status || 500;
        const message = error?.message || 'Internal server error';
        return res.status(status).send(message);
    }
}

export default {register, login};