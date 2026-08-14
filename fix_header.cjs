const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

c = c.replace(
  `<LogoIcon className="h-8 w-auto" />
              <span className="font-serif font-bold text-xl tracking-widest text-stone-900 ml-1">
                TEE<span className="text-[#D5A575]">GUIDE</span>
              </span>`,
  `<LogoIcon className="h-10 w-auto" />
              <div className="flex flex-col ml-2">
                <span className="font-sans font-bold text-xl tracking-[0.2em] text-[#0A1118] leading-none">
                  TEE<span className="text-[#B59A7E]">GUIDE</span>
                </span>
                <span className="text-[7px] tracking-[0.2em] text-[#0A1118] mt-1 font-medium">FIND. COMPARE. WEAR BETTER.</span>
              </div>`
);

fs.writeFileSync('src/components/layout/Header.tsx', c);
