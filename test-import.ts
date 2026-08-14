// Mock import.meta.env
globalThis.import = { meta: { env: { VITE_SITE_MODE: 'PRE_APPROVAL' } } };

import { articles, products, categories, authors } from './src/data/index.js';
console.log('Articles:', articles?.length);
console.log('Products:', products?.length);
console.log('Categories:', categories?.length);
console.log('Authors:', Object.keys(authors)?.length);
