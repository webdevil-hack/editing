import axios from 'axios';
export class PlainlyAdapter {
    async createJob(req, apiKey) {
        const resp = await axios.post('https://api.plainlyvideos.com/v1/renders', {
            template_id: req.templateId,
            data: req.inputs ?? {},
        }, { headers: { Authorization: `Bearer ${apiKey}` } });
        return { jobId: resp.data.id, provider: 'plainly' };
    }
    async getStatus(jobId, apiKey) {
        const resp = await axios.get(`https://api.plainlyvideos.com/v1/renders/${jobId}`, { headers: { Authorization: `Bearer ${apiKey}` } });
        return {
            jobId,
            status: resp.data.status,
            outputUrl: resp.data.output_url,
            error: resp.data.error,
        };
    }
}
//# sourceMappingURL=plainly.js.map