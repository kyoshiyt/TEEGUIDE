const fs = require('fs');
let c = fs.readFileSync('src/types.ts', 'utf8');
c = c.replace(/metaDescription: string;/g, "metaDescription: string;\n  excerpt?: string;");
c = c.replace(/relatedArticleIds: string\[\];/g, "relatedArticleIds: string[];\n  relatedProductIds?: string[];\n  readingTime?: string;\n  featuredImage?: string;");
fs.writeFileSync('src/types.ts', c);
