import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class LTXVideoAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse> {
    return { jobId: `ltx-${Date.now()}`, provider: 'ltxvideo' };
  }
  async getStatus(jobId: string): Promise<RenderJobStatus> {
    return { jobId, status: 'completed', outputUrl: 'https://example.com/ltx.mp4' };
  }
}
