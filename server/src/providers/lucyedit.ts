import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class LucyEditAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse> {
    return { jobId: `lucy-${Date.now()}`, provider: 'lucyedit' };
  }
  async getStatus(jobId: string): Promise<RenderJobStatus> {
    return { jobId, status: 'completed', outputUrl: 'https://example.com/lucy.mp4' };
  }
}
