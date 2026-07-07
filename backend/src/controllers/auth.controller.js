import authService from '../services/auth.service.js';

const login = async(req, res) => {
    try {
        const user = await authService.login(req.body);

        res.json(user);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

export default {register, login};