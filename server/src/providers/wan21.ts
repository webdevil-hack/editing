import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class Wan21Adapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse> {
    return { jobId: `wan-${Date.now()}`, provider: 'wan21' };
  }
  async getStatus(jobId: string): Promise<RenderJobStatus> {
    return { jobId, status: 'completed', outputUrl: 'https://example.com/wan.mp4' };
  }
}
