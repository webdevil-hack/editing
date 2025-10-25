export class LTXVideoAdapter {
    async createJob(req, _apiKey) {
        return { jobId: `ltx-${Date.now()}`, provider: 'ltxvideo' };
    }
    async getStatus(jobId) {
        return { jobId, status: 'completed', outputUrl: 'https://example.com/ltx.mp4' };
    }
}
//# sourceMappingURL=ltxvideo.js.map