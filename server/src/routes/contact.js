const express = require('express');
const { z } = require('zod');

const router = express.Router();

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

router.post('/', async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  // For demo, log to console. In prod, use email provider.
  console.log('Contact message:', parsed.data);
  res.json({ ok: true });
});

module.exports = router;
