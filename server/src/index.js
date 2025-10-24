const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { connectDb } = require('./lib/db');
const authRoutes = require('./routes/auth');
const providerRoutes = require('./routes/providers');
const jobRoutes = require('./routes/jobs');
const toolRoutes = require('./routes/tools');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'ai-video-editor-server', time: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 4000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err?.message || err);
    app.listen(PORT, () => {
      console.log(`Server running (DB not connected) on http://localhost:${PORT}`);
    });
  });
