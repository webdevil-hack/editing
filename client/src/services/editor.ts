import { api } from './api';

export type ProviderKey = 'shotstack' | 'creatomate' | 'plainly' | 'tavus' | 'promptclip' | 'lucyedit' | 'ltxvideo' | 'wan21';

export interface CreateJobResponse { jobId: string; provider: ProviderKey; statusUrl?: string }
export interface JobStatus { jobId: string; status: 'queued'|'processing'|'completed'|'failed'; progress?: number; outputUrl?: string; error?: string }

export function createJob(provider: ProviderKey, prompt: string, inputs?: Record<string, unknown>) {
  return api<CreateJobResponse>('/editor/jobs', {
    method: 'POST',
    body: JSON.stringify({ provider, prompt, inputs })
  });
}

export function getJobStatus(provider: ProviderKey, jobId: string) {
  return api<JobStatus>(`/editor/jobs/${provider}/${jobId}`);
}
