const fs = require('fs');

// Create empty dist folder
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}

fs.mkdirSync('dist');
fs.mkdirSync('dist/content');

// Copy templates
fs.cpSync('../../engine/content', 'dist/content', { recursive: true });
fs.copyFileSync('../../engine/cv.config.json', 'dist/cv.config.json');

// Create package.json
const json = `{
  "name": "cv",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "portfolio-md dev",
    "build": "portfolio-md build"
  },
  "dependencies": {
    "@portfolio.md/builder": "*"
  }
}`;

fs.writeFileSync('dist/package.json', json);
