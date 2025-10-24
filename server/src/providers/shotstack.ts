import axios from 'axios';
import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class ShotstackAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse> {
    const resp = await axios.post('https://api.shotstack.io/v1/render', {
      timeline: { background: '#000000', tracks: [] },
      output: { format: 'mp4', resolution: 'hd' },
      // Minimal stub; real integration would map req.prompt/templates to timeline
    }, { headers: { 'x-api-key': apiKey } });
    const jobId = resp.data.response.id ?? resp.data.id ?? resp.data.response?.id;
    return { jobId, provider: 'shotstack', statusUrl: `https://api.shotstack.io/v1/render/${jobId}` };
  }

  async getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus> {
    const resp = await axios.get(`https://api.shotstack.io/v1/render/${jobId}`, { headers: { 'x-api-key': apiKey } });
    const status = resp.data.response.status ?? resp.data.status;
    return {
      jobId,
      status: status === 'done' ? 'completed' : status,
      progress: resp.data.response?.progress,
      outputUrl: resp.data.response?.url,
      error: resp.data.response?.error,
    } as RenderJobStatus;
  }
}
