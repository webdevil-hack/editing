// Placeholder for PromptClip (OSS). In production, this would run local processing or call a service wraps the OSS pipeline.
export class PromptClipAdapter {
    async createJob(req, _apiKey) {
        return { jobId: `promptclip-${Date.now()}`, provider: 'promptclip' };
    }
    async getStatus(jobId) {
        return { jobId, status: 'completed', outputUrl: 'https://example.com/output.mp4' };
    }
}
//# sourceMappingURL=promptclip.js.map