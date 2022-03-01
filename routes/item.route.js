import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protecRoute.js';

import { getAllItems } from '../controllers/items.controller.js';

router.get('/list', protectRoute, getAllItems);

export default router;
