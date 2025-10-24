const express = require('express');
const { z } = require('zod');
const { authRequired } = require('../middleware/auth');
const { createJob, getJobStatus } = require('../services/jobs');

const router = express.Router();

const createJobSchema = z.object({
  provider: z.enum(['shotstack', 'creatomate', 'plainly', 'tavus']),
  prompt: z.string().min(3),
  options: z.record(z.any()).optional(),
  mock: z.boolean().optional(),
});

router.post('/create', authRequired, async (req, res) => {
  const parsed = createJobSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const job = await createJob(parsed.data, req.user);
  res.json(job);
});

router.get('/:provider/:id', authRequired, async (req, res) => {
  const provider = req.params.provider;
  const id = req.params.id;
  const status = await getJobStatus({ provider, id });
  res.json(status);
});

module.exports = router;
