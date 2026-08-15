const fs = require('fs');
let c = fs.readFileSync('src/pages/Search.tsx', 'utf8');

c = c.replace(
  `  const productResults = products.filter(p => 
    p.name.toLowerCase().includes(searchLower) || 
    p.brand.toLowerCase().includes(searchLower) ||
    p.description?.toLowerCase().includes(searchLower) ||
    p.category.toLowerCase().includes(searchLower)
  );`,
  `  const productResults = products.filter(p => {
    return p.name.toLowerCase().includes(searchLower) || 
           p.brand.toLowerCase().includes(searchLower) ||
           (p.description && p.description.toLowerCase().includes(searchLower)) ||
           (p.categoryId && p.categoryId.toLowerCase().includes(searchLower));
  });`
);

c = c.replace(
  `  const articleResults = articles.filter(a => 
    a.title.toLowerCase().includes(searchLower) || 
    a.excerpt.toLowerCase().includes(searchLower)
  );`,
  `  const articleResults = articles.filter(a => {
    return a.title.toLowerCase().includes(searchLower) || 
           (a.excerpt && a.excerpt.toLowerCase().includes(searchLower));
  });`
);

c = c.replace(
  `to={\`/\${article.type === 'guide' ? 'guides' : 'comparisons'}/\${article.slug}\`}`,
  `to={\`/\${article.type.toLowerCase() === 'guide' ? 'guides' : 'comparisons'}/\${article.slug}\`}`
);

fs.writeFileSync('src/pages/Search.tsx', c);
