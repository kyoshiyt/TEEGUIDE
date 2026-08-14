import fs from 'fs';

const content = fs.readFileSync('src/data/articles.ts', 'utf8');
console.log(content.match(/slug/g).length);
