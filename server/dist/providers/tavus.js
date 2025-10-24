import axios from 'axios';
export class TavusAdapter {
    async createJob(req, apiKey) {
        const resp = await axios.post('https://api.tavus.io/v2/renders', {
            script: req.prompt,
            voice: req.inputs?.voice,
            template_id: req.templateId,
        }, { headers: { Authorization: `Bearer ${apiKey}` } });
        return { jobId: resp.data.id, provider: 'tavus' };
    }
    async getStatus(jobId, apiKey) {
        const resp = await axios.get(`https://api.tavus.io/v2/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
        return {
            jobId,
            status: resp.data.status,
            outputUrl: resp.data.output_url,
        };
    }
}
//# sourceMappingURL=tavus.js.map