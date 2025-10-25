import { Response } from 'express';
import { z } from 'zod';
import { AuthRequest } from '../middleware/auth.js';
import { encryptString } from '../utils/crypto.js';
import { User } from '../models/User.js';

const keysSchema = z.object({
  shotstack: z.string().optional(),
  creatomate: z.string().optional(),
  plainly: z.string().optional(),
  tavus: z.string().optional(),
});

export async function getKeys(req: AuthRequest, res: Response) {
  const user = await User.findById(req.userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const { providers } = user;
  return res.json({ providers: {
    shotstack: Boolean(providers.shotstack),
    creatomate: Boolean(providers.creatomate),
    plainly: Boolean(providers.plainly),
    tavus: Boolean(providers.tavus),
  }});
}

export async function saveKeys(req: AuthRequest, res: Response) {
  const parse = keysSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.format() });
  const user = await User.findById(req.userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const newKeys = Object.fromEntries(Object.entries(parse.data).map(([k, v]) => [k, v ? encryptString(v) : v]));
  user.providers = { ...user.providers, ...newKeys } as any;
  await user.save();
  return res.json({ ok: true });
}
