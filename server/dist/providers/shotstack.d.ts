import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';
export declare class ShotstackAdapter implements ProviderAdapter {
    createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse>;
    getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus>;
}
//# sourceMappingURL=shotstack.d.ts.map