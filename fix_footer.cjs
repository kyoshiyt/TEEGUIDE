const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

c = c.replace(
  `<div className="flex items-center gap-2">
                <LogoIcon className="h-10 w-auto" isDark={true} />
                <span className="font-serif font-bold text-2xl tracking-widest text-white">
                  TEE<span className="text-[#D5A575]">GUIDE</span>
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-stone-400 pl-1">FIND. COMPARE. WEAR BETTER.</span>`,
  `<div className="flex items-center">
                <LogoIcon className="h-12 w-auto" isDark={true} />
                <div className="flex flex-col ml-3">
                  <span className="font-sans font-bold text-2xl tracking-[0.2em] text-white leading-none">
                    TEE<span className="text-[#B59A7E]">GUIDE</span>
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-[#A8A29E] mt-1 font-medium">FIND. COMPARE. WEAR BETTER.</span>
                </div>
              </div>`
);

fs.writeFileSync('src/components/layout/Footer.tsx', c);
