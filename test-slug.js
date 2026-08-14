import fs from 'fs';
const file = fs.readFileSync('src/data/articles.ts', 'utf-8');
const articles = eval(file.replace(/import .*;/, '').replace('export const articles: Article[] = ', ''));
console.log(articles.map(a => a.slug));
