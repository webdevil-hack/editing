import axios from 'axios';
export class ShotstackAdapter {
    async createJob(req, apiKey) {
        const resp = await axios.post('https://api.shotstack.io/v1/render', {
            timeline: { background: '#000000', tracks: [] },
            output: { format: 'mp4', resolution: 'hd' },
            // Minimal stub; real integration would map req.prompt/templates to timeline
        }, { headers: { 'x-api-key': apiKey } });
        const jobId = resp.data.response.id ?? resp.data.id ?? resp.data.response?.id;
        return { jobId, provider: 'shotstack', statusUrl: `https://api.shotstack.io/v1/render/${jobId}` };
    }
    async getStatus(jobId, apiKey) {
        const resp = await axios.get(`https://api.shotstack.io/v1/render/${jobId}`, { headers: { 'x-api-key': apiKey } });
        const status = resp.data.response.status ?? resp.data.status;
        return {
            jobId,
            status: status === 'done' ? 'completed' : status,
            progress: resp.data.response?.progress,
            outputUrl: resp.data.response?.url,
            error: resp.data.response?.error,
        };
    }
}
//# sourceMappingURL=shotstack.js.map