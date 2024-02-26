#!/usr/bin/env node

const { spawn } = require('child_process');
const { argv } = require('process');

spawn(
  'yarn',
  ['next', argv[2], 'node_modules/@portfolio.md/builder/dist/engine'],
  {
    stdio: 'inherit',
  }
);
