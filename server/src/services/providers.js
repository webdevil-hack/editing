const axios = require('axios');

// Basic test to validate API key formats using a harmless request when possible
async function testProviderKey(provider, apiKey) {
  switch (provider) {
    case 'shotstack':
      // Shotstack: use GET /render/v1/templates (requires key in header x-api-key)
      try {
        await axios.get('https://api.shotstack.io/v1/templates', {
          headers: { 'x-api-key': apiKey },
          timeout: 5000,
        });
        return true;
      } catch (e) {
        if (e.response && e.response.status !== 401) return true; // consider network OK
        throw new Error('Shotstack key invalid');
      }
    case 'creatomate':
      try {
        await axios.get('https://api.creatomate.com/v1/projects', {
          headers: { Authorization: `Bearer ${apiKey}` },
          timeout: 5000,
        });
        return true;
      } catch (e) {
        if (e.response && e.response.status !== 401) return true;
        throw new Error('Creatomate key invalid');
      }
    case 'plainly':
      // Plainly Videos — docs vary; we ping a presumed endpoint
      try {
        await axios.get('https://api.plainlyvideos.com/v1/templates', {
          headers: { Authorization: `Bearer ${apiKey}` },
          timeout: 5000,
        });
        return true;
      } catch (e) {
        if (e.response && e.response.status !== 401) return true;
        throw new Error('Plainly Videos key invalid');
      }
    case 'tavus':
      try {
        await axios.get('https://api.tavus.io/v2/avatars', {
          headers: { Authorization: `Bearer ${apiKey}` },
          timeout: 5000,
        });
        return true;
      } catch (e) {
        if (e.response && e.response.status !== 401) return true;
        throw new Error('Tavus key invalid');
      }
    default:
      return true;
  }
}

async function createJob({ provider, prompt, options = {}, mock = false }, user) {
  if (mock || process.env.MOCK_PROVIDERS === '1') {
    return {
      id: `mock_${Date.now()}`,
      provider,
      status: 'queued',
      prompt,
      etaSeconds: 15,
    };
  }
  switch (provider) {
    case 'shotstack':
      // This is a placeholder; real integration would map prompt->timeline JSON
      return { id: `shot_${Date.now()}`, provider, status: 'queued', prompt };
    case 'creatomate':
      return { id: `crea_${Date.now()}`, provider, status: 'queued', prompt };
    case 'plainly':
      return { id: `plan_${Date.now()}`, provider, status: 'queued', prompt };
    case 'tavus':
      return { id: `tav_${Date.now()}`, provider, status: 'queued', prompt };
    default:
      throw new Error('Unsupported provider');
  }
}

async function getJobStatus({ provider, id }) {
  if (id.startsWith('mock_') || id.startsWith('shot_') || id.startsWith('crea_') || id.startsWith('plan_') || id.startsWith('tav_')) {
    return { id, provider, status: 'processing', progress: 0.5 };
  }
  return { id, provider, status: 'unknown' };
}

module.exports = { testProviderKey, createJob, getJobStatus };
