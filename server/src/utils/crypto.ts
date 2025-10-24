import crypto from 'crypto';
import { env } from '../config/env.js';

const ENC_KEY = process.env.ENC_KEY || '';

export function encryptString(plaintext: string): string {
  if (!ENC_KEY) return plaintext;
  const key = crypto.createHash('sha256').update(ENC_KEY).digest();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]).toString('base64');
}

export function decryptString(data: string): string {
  if (!ENC_KEY) return data;
  const raw = Buffer.from(data, 'base64');
  const iv = raw.subarray(0, 12);
  const tag = raw.subarray(12, 28);
  const ciphertext = raw.subarray(28);
  const key = crypto.createHash('sha256').update(ENC_KEY).digest();
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
  return plaintext;
}
