export type ProviderKey = 'shotstack' | 'creatomate' | 'plainly' | 'tavus' | 'promptclip' | 'lucyedit' | 'ltxvideo' | 'wan21';
export interface RenderJobRequest {
    prompt: string;
    inputs?: Record<string, unknown>;
    templateId?: string;
    provider: ProviderKey;
}
export interface RenderJobResponse {
    jobId: string;
    provider: ProviderKey;
    statusUrl?: string;
}
export interface RenderJobStatus {
    jobId: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    progress?: number;
    outputUrl?: string;
    error?: string;
}
export interface ProviderAdapter {
    createJob(req: RenderJobRequest, apiKey: string): Promise<RenderJobResponse>;
    getStatus(jobId: string, apiKey: string): Promise<RenderJobStatus>;
}
//# sourceMappingURL=base.d.ts.map