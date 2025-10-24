import { ProviderAdapter, RenderJobRequest, RenderJobResponse, RenderJobStatus } from './base.js';
export declare class PromptClipAdapter implements ProviderAdapter {
    createJob(req: RenderJobRequest, _apiKey: string): Promise<RenderJobResponse>;
    getStatus(jobId: string): Promise<RenderJobStatus>;
}
//# sourceMappingURL=promptclip.d.ts.map