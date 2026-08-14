const fs = require('fs');
let c = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf8');
const target = `<div className="bg-[#FAFAF9] rounded-none border border-stone-200 p-8 lg:p-12 sticky top-24">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-none"
              />
            </div>`;
const replacement = `<div className="bg-[#FAFAF9] rounded-none border border-stone-200 sticky top-24 aspect-[3/4] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>`;
c = c.replace(target, replacement);
fs.writeFileSync('src/pages/ProductDetail.tsx', c);
