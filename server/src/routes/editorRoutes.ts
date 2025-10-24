import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { createJob, getJobStatus } from '../controllers/editorController.js';

const router = Router();

router.post('/jobs', requireAuth, createJob);
router.get('/jobs/:provider/:jobId', requireAuth, getJobStatus);

export default router;
