#!/usr/bin/env node

const { spawn } = require('child_process');
const { argv } = require('process');
const fs = require('fs');

// TODO: Validate this
const command = argv[2];
const srcDir = 'node_modules/@portfolio.md/builder/dist/engine/out';
const destDir = './dist';

spawn(
  'node',
  [
    'node_modules/.bin/next',
    command,
    'node_modules/@portfolio.md/builder/dist/engine',
  ],
  {
    stdio: 'inherit',
  }
).on('close', () => {
  if (command !== 'build') {
    return;
  }

  if (fs.existsSync(srcDir)) {
    // clean destination dir before copying
    if (fs.existsSync(destDir)) {
      fs.rmSync(destDir, {
        recursive: true,
      });
    }

    fs.cpSync(srcDir, destDir, {
      recursive: true,
    });
  }
});
