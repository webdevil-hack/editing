const axios = require('axios');
const { getDecryptedKeyForUserProvider } = require('./userKeys');

async function resolveToolConfig(tool, userId) {
  // Prefer user-provided base URL saved via provider key storage
  if (userId) {
    const saved = await getDecryptedKeyForUserProvider(userId, tool);
    if (saved && /^https?:\/\//i.test(saved)) {
      return { baseUrl: saved };
    }
  }
  // Fallback to environment-based base URL
  switch (tool) {
    case 'promptclip':
      return { baseUrl: process.env.PROMPTCLIP_URL };
    case 'lucyedit':
      return { baseUrl: process.env.LUCYEDIT_URL };
    case 'ltxvideo':
      return { baseUrl: process.env.LTXVIDEO_URL };
    case 'wan2_1':
      return { baseUrl: process.env.WAN21_URL };
    default:
      throw new Error('Unknown tool');
  }
}

async function runToolJob({ tool, prompt, options = {}, mock = false }, user) {
  if (mock || process.env.MOCK_TOOLS === '1') {
    return { id: `tool_${tool}_${Date.now()}`, tool, status: 'queued', prompt };
    }
  const cfg = await resolveToolConfig(tool, user?.id);
  if (!cfg.baseUrl) {
    return { id: `tool_${tool}_${Date.now()}`, tool, status: 'queued', prompt, note: 'No tool URL set; running in mock mode' };
  }
  // Convention: POST /run { prompt, options } returns { id }
  try {
    const res = await axios.post(`${cfg.baseUrl.replace(/\/$/, '')}/run`, { prompt, options }, { timeout: 15000 });
    return { id: res.data.id || `tool_${tool}_${Date.now()}`, tool, status: 'queued', prompt };
  } catch (e) {
    return { id: `tool_${tool}_${Date.now()}`, tool, status: 'queued', prompt, note: 'Remote call failed; mock mode fallback' };
  }
}

async function getToolJobStatus({ tool, id }) {
  if (id.startsWith('tool_')) return { id, tool, status: 'processing', progress: 0.5 };
  const cfg = await resolveToolConfig(tool);
  if (!cfg.baseUrl) return { id, tool, status: 'unknown' };
  try {
    const res = await axios.get(`${cfg.baseUrl.replace(/\/$/, '')}/status/${id}`, { timeout: 10000 });
    return res.data;
  } catch (e) {
    return { id, tool, status: 'unknown' };
  }
}

module.exports = { runToolJob, getToolJobStatus };
