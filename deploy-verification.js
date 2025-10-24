#!/usr/bin/env node

/**
 * AI Video Editor - Deployment Verification Script
 * This script verifies that all components are ready for Vercel deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 AI Video Editor - Deployment Verification\n');

// Check if required files exist
const requiredFiles = [
  'vercel.json',
  'package.json',
  'client/package.json',
  'client/build',
  'server/package.json',
  'server/index.js',
  'client/src/services/api.js',
  'DEPLOYMENT.md'
];

console.log('📁 Checking required files...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check if client build exists and has content
console.log('\n🏗️  Checking build artifacts...');
if (fs.existsSync('client/build')) {
  const buildFiles = fs.readdirSync('client/build');
  if (buildFiles.length > 0) {
    console.log('✅ Client build directory exists with files');
  } else {
    console.log('❌ Client build directory is empty');
    allFilesExist = false;
  }
} else {
  console.log('❌ Client build directory not found');
  allFilesExist = false;
}

// Check package.json scripts
console.log('\n📦 Checking package.json configurations...');
try {
  const rootPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (rootPackage.scripts && rootPackage.scripts['vercel-build']) {
    console.log('✅ Root package.json has vercel-build script');
  } else {
    console.log('❌ Root package.json missing vercel-build script');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading root package.json');
  allFilesExist = false;
}

// Check server package.json
try {
  const serverPackage = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));
  if (serverPackage.dependencies && serverPackage.dependencies.express) {
    console.log('✅ Server has Express dependency');
  } else {
    console.log('❌ Server missing Express dependency');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading server package.json');
  allFilesExist = false;
}

// Check client package.json
try {
  const clientPackage = JSON.parse(fs.readFileSync('client/package.json', 'utf8'));
  if (clientPackage.scripts && clientPackage.scripts.build) {
    console.log('✅ Client has build script');
  } else {
    console.log('❌ Client missing build script');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading client package.json');
  allFilesExist = false;
}

// Check vercel.json configuration
console.log('\n⚙️  Checking Vercel configuration...');
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  if (vercelConfig.builds && vercelConfig.routes) {
    console.log('✅ Vercel configuration is valid');
  } else {
    console.log('❌ Vercel configuration is incomplete');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading vercel.json');
  allFilesExist = false;
}

// Check environment files
console.log('\n🔐 Checking environment configuration...');
if (fs.existsSync('.env.production')) {
  console.log('✅ Production environment file exists');
} else {
  console.log('⚠️  Production environment file not found (will be set in Vercel)');
}

if (fs.existsSync('client/.env.production')) {
  console.log('✅ Client production environment file exists');
} else {
  console.log('⚠️  Client production environment file not found (will be set in Vercel)');
}

// Final result
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 DEPLOYMENT READY!');
  console.log('\n✅ All required files and configurations are in place');
  console.log('✅ Client build is complete');
  console.log('✅ Server configuration is valid');
  console.log('✅ Vercel configuration is ready');
  console.log('\n📋 Next steps:');
  console.log('1. Push code to GitHub repository');
  console.log('2. Connect repository to Vercel');
  console.log('3. Set environment variables in Vercel dashboard');
  console.log('4. Deploy!');
  console.log('\n📖 See DEPLOYMENT.md for detailed instructions');
} else {
  console.log('❌ DEPLOYMENT NOT READY');
  console.log('\n⚠️  Some required files or configurations are missing');
  console.log('Please fix the issues above before deploying');
  process.exit(1);
}

console.log('\n🚀 Happy Deploying!');