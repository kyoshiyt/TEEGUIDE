const fs = require('fs');
let c = fs.readFileSync('src/components/ui/ArticleCard.tsx', 'utf8');
console.log("Has backslash:", c.includes('\\${'));
