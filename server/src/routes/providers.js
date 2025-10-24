const express = require('express');
const { z } = require('zod');
const User = require('../models/User');
const { encryptSecret } = require('../lib/crypto');
const { authRequired } = require('../middleware/auth');
const { testProviderKey } = require('../services/providers');

const router = express.Router();

const saveKeySchema = z.object({
  provider: z.enum(['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucyedit', 'ltxvideo', 'wan2_1']),
  apiKey: z.string().min(1),
  label: z.string().optional(),
});

router.post('/save-key', authRequired, async (req, res) => {
  const parsed = saveKeySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { provider, apiKey, label } = parsed.data;

  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const keyEnc = encryptSecret(apiKey);
  const idx = user.apiKeys.findIndex((k) => k.provider === provider);
  const entry = { provider, keyEnc, label, lastValidatedAt: null };
  if (idx >= 0) user.apiKeys[idx] = entry; else user.apiKeys.push(entry);
  await user.save();
  res.json({ ok: true });
});

router.post('/test-key', authRequired, async (req, res) => {
  const parsed = saveKeySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { provider, apiKey } = parsed.data;
  try {
    const ok = await testProviderKey(provider, apiKey);
    res.json({ ok });
  } catch (e) {
    res.status(400).json({ ok: false, error: e?.message || 'Validation failed' });
  }
});

module.exports = router;
