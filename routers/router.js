import { defaultController, healthController, randomProfilesController } from '../controllers/controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import Router from 'express';

const router = Router();

router.get('/', authMiddleware, defaultController);
router.get('/health', authMiddleware, healthController);
router.get('/profiles', authMiddleware, randomProfilesController)

export default router;