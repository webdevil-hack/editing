import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { User } from '../models/User.js';
import { signJwt } from '../utils/jwt.js';
const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
});
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export async function signup(req, res) {
    const parse = signupSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.format() });
    const { email, password, name } = parse.data;
    const existing = await User.findOne({ email });
    if (existing)
        return res.status(409).json({ error: 'Email already in use' });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash, name, providers: {} });
    const token = signJwt({ userId: user.id });
    return res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });
}
export async function login(req, res) {
    const parse = loginSchema.safeParse(req.body);
    if (!parse.success)
        return res.status(400).json({ error: parse.error.format() });
    const { email, password } = parse.data;
    const user = await User.findOne({ email });
    if (!user)
        return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok)
        return res.status(401).json({ error: 'Invalid credentials' });
    const token = signJwt({ userId: user.id });
    return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}
//# sourceMappingURL=authController.js.map