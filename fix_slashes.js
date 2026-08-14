const fs = require('fs');
const glob = require('glob'); // wait, glob might not be installed, let's use a simple recursive read.

function fixSlashes(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = dir + '/' + file;
    if (fs.statSync(fullPath).isDirectory()) {
      fixSlashes(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('\\${')) {
        content = content.replace(/\\\$\{/g, '${');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}
fixSlashes('src');
