import axios from 'axios';
import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class PlainlyAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse> {
    const resp = await axios.post('https://api.plainlyvideos.com/v1/renders', {
      template_id: req.templateId,
      data: req.inputs ?? {},
    }, { headers: { Authorization: `Bearer ${apiKey}` } });
    return { jobId: resp.data.id, provider: 'plainly' };
  }
  async getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus> {
    const resp = await axios.get(`https://api.plainlyvideos.com/v1/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
    return {
      jobId,
      status: resp.data.status,
      outputUrl: resp.data.output_url,
      error: resp.data.error,
    } as RenderJobStatus;
  }
}
