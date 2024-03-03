#!/usr/bin/env node
const fs = require('fs');
const { spawn } = require('node:child_process');
const path = require('path');

const dir = process.cwd();

console.log('Copying files to', dir);

// copy files
fs.cpSync(path.join(__dirname, '../dist'), dir, { recursive: true });

console.log('Installing packages');

// call yarn install
spawn('yarn', ['install', '--ignore-engines'], {
  stdio: 'inherit',
});

console.log('Done!');
