import axios from 'axios';
export class CreatomateAdapter {
    async createJob(req, apiKey) {
        const resp = await axios.post('https://api.creatomate.com/v1/renders', {
            // Stub payload mapping
            source: req.templateId ?? 'prompt',
            modifications: req.inputs ?? {},
        }, { headers: { Authorization: `Bearer ${apiKey}` } });
        const jobId = resp.data.id;
        return { jobId, provider: 'creatomate', statusUrl: `https://api.creatomate.com/v1/renders/${jobId}` };
    }
    async getStatus(jobId, apiKey) {
        const resp = await axios.get(`https://api.creatomate.com/v1/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
        const status = resp.data.status;
        return {
            jobId,
            status: status === 'finished' ? 'completed' : status,
            outputUrl: resp.data.output_url,
        };
    }
}
//# sourceMappingURL=creatomate.js.map