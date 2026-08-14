const fs = require('fs');
const file = 'src/components/ui/ArticleCard.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/to=\{\`\/guides\/\$\{article\.slug\}\`\}/g, "to={`/${article.type === 'COMPARISON' ? 'comparisons' : 'guides'}/${article.slug}`}");
fs.writeFileSync(file, content);
