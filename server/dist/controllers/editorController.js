import { z } from 'zod';
import { getAdapter } from '../providers/index.js';
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
    ]),
});
export async function createJob(req, res) {
    const parse = jobSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.format() });
    const { provider, prompt, inputs, templateId } = parse.data;
    const user = await User.findById(req.userId);
    if (!user)
        return res.status(401).json({ error: 'Unauthorized' });
    const stored = user.providers[provider];
    const apiKey = stored ? decryptString(stored) : '';
    if (!apiKey && ['promptclip', 'lucyedit', 'ltxvideo', 'wan21'].includes(provider) === false) {
        return res.status(400).json({ error: `Missing API key for ${provider}` });
    }
    const adapter = getAdapter(provider);
    const resp = await adapter.createJob({ provider, prompt, inputs, templateId }, apiKey ?? '');
    return res.status(201).json(resp);
}
export async function getJobStatus(req, res) {
    const { provider, jobId } = req.params;
    const user = await User.findById(req.userId);
    if (!user)
        return res.status(401).json({ error: 'Unauthorized' });
    const stored = user.providers[provider];
    const apiKey = stored ? decryptString(stored) : '';
    const adapter = getAdapter(provider);
    const status = await adapter.getStatus(jobId, apiKey ?? '');
    return res.json(status);
}
//# sourceMappingURL=editorController.js.map