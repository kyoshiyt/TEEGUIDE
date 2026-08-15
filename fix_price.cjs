const fs = require('fs');
let c = fs.readFileSync('src/pages/Search.tsx', 'utf8');

c = c.replace(
  /\\$\\{product\.price\.toFixed\\(2\\)\\}/g,
  "Check price on Amazon"
);

// wait, the sed replacement or javascript replacement?
c = c.replace(
  '${product.price.toFixed(2)}',
  'Check price on Amazon'
);
fs.writeFileSync('src/pages/Search.tsx', c);
