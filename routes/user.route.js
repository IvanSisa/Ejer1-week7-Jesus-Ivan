import express from 'express';
const router = express.Router();

import { login } from '../controllers/login.controller.js';
import { insertUser } from '../controllers/register.controller.js';
import { protectRoute } from '../middleware/protecRoute.js';

router.post('/login', login);
router.post('/register', protectRoute, insertUser);

export default router;
