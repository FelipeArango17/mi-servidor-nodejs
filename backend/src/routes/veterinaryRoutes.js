// Routes

import express from 'express';
const router = express.Router();
import { register, login, profile } from '../controllers/veterinaryController.js';

router.post('/', register);

router.post('/login', login);

router.get('/profile', profile);

export default router;