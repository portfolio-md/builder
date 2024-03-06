const fs = require('fs');

// Create empty dist folder
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}

fs.mkdirSync('dist');
fs.mkdirSync('dist/content');

// Copy templates
fs.cpSync('../../engine/content', 'dist/content', { recursive: true });
fs.copyFileSync('../../engine/cv.config.ts', 'dist/cv.config.ts');

// Get builder version
const packageJson = JSON.parse(
  fs.readFileSync('../../package.json').toString('utf-8')
);
const builderVersion = packageJson.version;

// Create package.json
const json = `{
  "name": "portfolio.md",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "portfolio-md dev",
    "build": "portfolio-md build"
  },
  "dependencies": {
    "@portfolio.md/builder": "${builderVersion}"
  }
}`;

fs.writeFileSync('dist/package.json', json);
