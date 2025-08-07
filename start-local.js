#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting local development servers...');

// Start backend server
const backend = spawn('npx', ['tsx', 'server/index.ts'], {
  cwd: __dirname,
  env: { ...process.env, NODE_ENV: 'development' },
  stdio: ['inherit', 'pipe', 'pipe']
});

backend.stdout.on('data', (data) => {
  console.log(`[Backend] ${data.toString().trim()}`);
});

backend.stderr.on('data', (data) => {
  console.log(`[Backend] ${data.toString().trim()}`);
});

// Start frontend server
const frontend = spawn('npx', ['vite', '--config', 'vite.local.config.ts'], {
  cwd: __dirname,
  stdio: ['inherit', 'pipe', 'pipe']
});

frontend.stdout.on('data', (data) => {
  console.log(`[Frontend] ${data.toString().trim()}`);
});

frontend.stderr.on('data', (data) => {
  console.log(`[Frontend] ${data.toString().trim()}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});

console.log('✅ Both servers started!');
console.log('🌐 Frontend: http://localhost:5173');
console.log('🔌 Backend: http://localhost:5000');
console.log('Press Ctrl+C to stop');