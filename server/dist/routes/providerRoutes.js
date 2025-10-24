import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getKeys, saveKeys } from '../controllers/providerController.js';
const router = Router();
router.get('/keys', requireAuth, getKeys);
router.post('/keys', requireAuth, saveKeys);
export default router;
//# sourceMappingURL=providerRoutes.js.map