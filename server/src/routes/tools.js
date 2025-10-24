const express = require('express');
const { z } = require('zod');
const { runToolJob, getToolJobStatus } = require('../services/tools');
const { authRequired } = require('../middleware/auth');

const router = express.Router();

const runSchema = z.object({
  tool: z.enum(['promptclip', 'lucyedit', 'ltxvideo', 'wan2_1']),
  prompt: z.string().min(3),
  options: z.record(z.any()).optional(),
  mock: z.boolean().optional(),
});

router.post('/run', authRequired, async (req, res) => {
  const parsed = runSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const job = await runToolJob(parsed.data, req.user);
  res.json(job);
});

router.get('/:tool/:id', authRequired, async (req, res) => {
  const tool = req.params.tool;
  const id = req.params.id;
  const status = await getToolJobStatus({ tool, id });
  res.json(status);
});

module.exports = router;
