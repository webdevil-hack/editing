import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';
export declare class TavusAdapter implements ProviderAdapter {
    createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse>;
    getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus>;
}
//# sourceMappingURL=tavus.d.ts.map