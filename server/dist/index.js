import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/db.js';
import { env } from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import editorRoutes from './routes/editorRoutes.js';
import providerRoutes from './routes/providerRoutes.js';
dotenv.config();
const app = express();
app.use(cors({ origin: env.CORS_ORIGIN.split(','), credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'video-editing-app', version: '1.0.0' });
});
app.use('/api/auth', authRoutes);
app.use('/api/editor', editorRoutes);
app.use('/api/providers', providerRoutes);
const start = async () => {
    await connectToDatabase(env.MONGO_URI);
    const port = env.PORT;
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
};
start().catch((err) => {
    console.error('Fatal start error', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map