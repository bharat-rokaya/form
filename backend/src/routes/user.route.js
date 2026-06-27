import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.getAllUser);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/', userController.deleteUser);

export default router;