#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Deployment Configuration...\n');

// Check required files
const requiredFiles = [
  'vercel.json',
  'package.json',
  'client/package.json',
  'server/package.json',
  'server/src/index.js',
  'client/vite.config.ts'
];

let allFilesExist = true;

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

// Check client build directory
const clientBuildExists = fs.existsSync(path.join(__dirname, 'client/build'));
console.log(`${clientBuildExists ? '✅' : '⚠️'} client/build directory ${clientBuildExists ? 'exists' : 'missing (run npm run build in client/)'}`);

// Check package.json scripts
console.log('\n📦 Checking package.json scripts:');
const rootPackage = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const hasVercelBuild = rootPackage.scripts && rootPackage.scripts['vercel-build'];
console.log(`${hasVercelBuild ? '✅' : '❌'} vercel-build script in root package.json`);

const clientPackage = JSON.parse(fs.readFileSync(path.join(__dirname, 'client/package.json'), 'utf8'));
const hasBuildScript = clientPackage.scripts && clientPackage.scripts['build'];
console.log(`${hasBuildScript ? '✅' : '❌'} build script in client/package.json`);

// Check vercel.json configuration
console.log('\n⚙️ Checking vercel.json configuration:');
const vercelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'vercel.json'), 'utf8'));
const hasBuilds = vercelConfig.builds && vercelConfig.builds.length > 0;
const hasRoutes = vercelConfig.routes && vercelConfig.routes.length > 0;
console.log(`${hasBuilds ? '✅' : '❌'} builds configuration`);
console.log(`${hasRoutes ? '✅' : '❌'} routes configuration`);

// Environment variables checklist
console.log('\n🔐 Environment Variables Checklist:');
const requiredEnvVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'CLIENT_ORIGIN',
  'SHOTSTACK_API_KEY',
  'TAVUS_API_KEY',
  'PLAINLY_API_KEY',
  'CREATOMATE_API_KEY',
  'NODE_ENV'
];

console.log('Make sure these are set in Vercel Dashboard:');
requiredEnvVars.forEach(envVar => {
  console.log(`📝 ${envVar}`);
});

console.log('\n' + '='.repeat(50));
if (allFilesExist && hasVercelBuild && hasBuildScript && hasBuilds && hasRoutes) {
  console.log('🎉 Configuration looks good! Ready for Vercel deployment.');
  console.log('\nNext steps:');
  console.log('1. Push code to GitHub');
  console.log('2. Import project in Vercel Dashboard');
  console.log('3. Set environment variables');
  console.log('4. Deploy!');
} else {
  console.log('⚠️ Some configuration issues found. Please fix them before deploying.');
}
console.log('='.repeat(50));