import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

// Placeholder for PromptClip (OSS). In production, this would run local processing or call a service wraps the OSS pipeline.
export class PromptClipAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse> {
    return { jobId: `promptclip-${Date.now()}`, provider: 'promptclip' };
  }
  async getStatus(jobId: string): Promise<RenderJobStatus> {
    return { jobId, status: 'completed', outputUrl: 'https://example.com/output.mp4' };
  }
}
