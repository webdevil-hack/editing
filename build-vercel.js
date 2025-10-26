const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building for Vercel deployment...');

try {
  // Install dependencies
  console.log('📦 Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('📦 Installing server dependencies...');
  execSync('cd server && npm install', { stdio: 'inherit' });

  console.log('📦 Installing client dependencies...');
  execSync('cd client && npm install', { stdio: 'inherit' });

  // Build client
  console.log('🔨 Building client...');
  execSync('cd client && npm run build', { stdio: 'inherit' });

  // Verify build
  const buildPath = path.join(__dirname, 'client', 'build', 'index.html');
  if (!fs.existsSync(buildPath)) {
    throw new Error('Build failed - index.html not found');
  }

  console.log('✅ Build successful!');
  console.log('📁 Build contents:');
  const buildDir = path.join(__dirname, 'client', 'build');
  const files = fs.readdirSync(buildDir);
  files.forEach(file => {
    console.log(`  - ${file}`);
  });

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}