const User = require('../models/User');
const { decryptSecret } = require('../lib/crypto');

async function getDecryptedKeyForUserProvider(userId, provider) {
  const user = await User.findById(userId).lean();
  if (!user) return null;
  const entry = (user.apiKeys || []).find((k) => k.provider === provider);
  if (!entry) return null;
  try {
    return decryptSecret(entry.keyEnc);
  } catch {
    return null;
  }
}

module.exports = { getDecryptedKeyForUserProvider };
