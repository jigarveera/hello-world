import { defaultController, healthController } from '../controllers/controller.js';
import Router from 'express';

const router = Router();

router.get('/', defaultController);
router.get('/health', healthController);

export default router;