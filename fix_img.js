const fs = require('fs');
let c = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf8');
c = c.replace(
  '<div className="bg-[#FAFAF9] rounded-none border border-stone-200 p-8 lg:p-12 sticky top-24">\\n              <img \\n                src={product.imageUrl} \\n                alt={product.name} \\n                className="w-full h-auto object-cover rounded-none"\\n              />\\n            </div>',
  '<div className="bg-[#FAFAF9] rounded-none border border-stone-200 sticky top-24 aspect-[3/4] overflow-hidden">\\n              <img \\n                src={product.imageUrl} \\n                alt={product.name} \\n                className="w-full h-full object-cover"\\n              />\\n            </div>'
);
fs.writeFileSync('src/pages/ProductDetail.tsx', c);
