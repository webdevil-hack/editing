// Simple serverless function for Vercel
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET' && req.url === '/api/health') {
    res.status(200).json({
      status: 'ok',
      service: 'ai-video-editor-server',
      time: new Date().toISOString(),
      message: 'Server is running successfully!'
    });
  } else if (req.method === 'GET' && req.url === '/api/test') {
    res.status(200).json({
      message: 'API is working!',
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}