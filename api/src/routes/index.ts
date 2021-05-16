import { Router } from 'express';

import authRoutes from './auth.router';

const router = Router();

router.use(authRoutes);

router.get('/ping', (req, res) => res.status(200).json({ message: '🏓 pong' }));

export default router;
