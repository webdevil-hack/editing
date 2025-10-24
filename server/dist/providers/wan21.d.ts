import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';
export declare class Wan21Adapter implements ProviderAdapter {
    createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse>;
    getStatus(jobId: string): Promise<RenderJobStatus>;
}
//# sourceMappingURL=wan21.d.ts.map