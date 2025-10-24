import type { Request, Response } from 'express';
import { z } from 'zod';
import { AuthRequest } from '../middleware/auth.js';
import { getAdapter } from '../providers/index.js';
import { ProviderKey } from '../providers/base.js';
import { User } from '../models/User.js';
import { decryptString } from '../utils/crypto.js';

const jobSchema = z.object({
  prompt: z.string().min(3),
  inputs: z.record(z.string(), z.unknown()).optional(),
  templateId: z.string().optional(),
  provider: z.enum([
    'shotstack',
    'creatomate',
    'plainly',
    'tavus',
    'promptclip',
    'lucyedit',
    'ltxvideo',
    'wan21',
  ] as [ProviderKey, ...ProviderKey[]]),
});

export async function createJob(req: AuthRequest, res: Response) {
  const parse = jobSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.format() });
  const { provider, prompt, inputs, templateId } = parse.data;

  const user = await User.findById(req.userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const stored = (user.providers as any)[provider] as string | undefined;
  const apiKey = stored ? decryptString(stored) : '';
  if (!apiKey && ['promptclip','lucyedit','ltxvideo','wan21'].includes(provider) === false) {
    return res.status(400).json({ error: `Missing API key for ${provider}` });
  }

  const adapter = getAdapter(provider);
  const resp = await adapter.createJob({ provider, prompt, inputs, templateId }, apiKey ?? '');
  return res.status(201).json(resp);
}

export async function getJobStatus(req: AuthRequest, res: Response) {
  const { provider, jobId } = req.params as { provider: ProviderKey; jobId: string };
  const user = await User.findById(req.userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const stored = (user.providers as any)[provider] as string | undefined;
  const apiKey = stored ? decryptString(stored) : '';
  const adapter = getAdapter(provider);
  const status = await adapter.getStatus(jobId, apiKey ?? '');
  return res.json(status);
}
