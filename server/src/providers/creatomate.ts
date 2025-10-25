import axios from 'axios';
import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class CreatomateAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse> {
    const resp = await axios.post('https://api.creatomate.com/v1/renders', {
      // Stub payload mapping
      source: req.templateId ?? 'prompt',
      modifications: req.inputs ?? {},
    }, { headers: { Authorization: `Bearer ${apiKey}` } });
    const jobId = resp.data.id;
    return { jobId, provider: 'creatomate', statusUrl: `https://api.creatomate.com/v1/renders/${jobId}` };
  }
  async getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus> {
    const resp = await axios.get(`https://api.creatomate.com/v1/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
    const status: string = resp.data.status;
    return {
      jobId,
      status: status === 'finished' ? 'completed' : (status as any),
      outputUrl: resp.data.output_url,
    } as RenderJobStatus;
  }
}
