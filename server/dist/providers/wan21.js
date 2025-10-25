export class Wan21Adapter {
    async createJob(req, _apiKey) {
        return { jobId: `wan-${Date.now()}`, provider: 'wan21' };
    }
    async getStatus(jobId) {
        return { jobId, status: 'completed', outputUrl: 'https://example.com/wan.mp4' };
    }
}
//# sourceMappingURL=wan21.js.map