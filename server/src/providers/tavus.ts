import axios from 'axios';
import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';

export class TavusAdapter implements ProviderAdapter {
  async createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse> {
    const resp = await axios.post('https://api.tavus.io/v2/renders', {
      script: req.prompt,
      voice: req.inputs?.voice,
      template_id: req.templateId,
    }, { headers: { Authorization: `Bearer ${apiKey}` } });
    return { jobId: resp.data.id, provider: 'tavus' };
  }
  async getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus> {
    const resp = await axios.get(`https://api.tavus.io/v2/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
    return {
      jobId,
      status: resp.data.status,
      outputUrl: resp.data.output_url,
    } as RenderJobStatus;
  }
}
