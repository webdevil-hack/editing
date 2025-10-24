export class LucyEditAdapter {
    async createJob(req, _apiKey) {
        return { jobId: `lucy-${Date.now()}`, provider: 'lucyedit' };
    }
    async getStatus(jobId) {
        return { jobId, status: 'completed', outputUrl: 'https://example.com/lucy.mp4' };
    }
}
//# sourceMappingURL=lucyedit.js.map