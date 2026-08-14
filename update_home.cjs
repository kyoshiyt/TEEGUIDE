const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const target = `      {/* Hero Section */}
      <section className="py-24 lg:py-36 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            Find the Right T-Shirt for You
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Guides, comparisons, fit advice, and product recommendations to help you choose your next T-shirt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/guides" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-none font-semibold hover:bg-stone-800 transition-colors text-sm uppercase tracking-widest"
            >
              <BookOpen className="w-5 h-5" />
              Explore T-Shirt Guides
            </Link>
            <Link 
              to="/find-your-tshirt" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FAFAF9] text-stone-900 border border-stone-200 px-8 py-4 rounded-none font-semibold hover:bg-stone-50 transition-colors text-sm uppercase tracking-widest"
            >
              <Shirt className="w-5 h-5" />
              Find Your T-Shirt
            </Link>
          </div>
        </div>
      </section>`;

const replacement = `      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/50 text-stone-800 text-xs font-bold uppercase tracking-widest mb-6 border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-stone-900"></span>
                The Ultimate T-Shirt Resource
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight mb-6 leading-[1.05]">
                Find the Right <br className="hidden lg:block" /> T-Shirt for You
              </h1>
              <p className="text-xl text-stone-600 mb-10 max-w-xl leading-relaxed">
                Expert guides, in-depth comparisons, fit advice, and unbiased product recommendations to help you build the perfect wardrobe foundation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link 
                  to="/guides" 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 font-semibold hover:bg-stone-800 transition-colors text-sm uppercase tracking-widest"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Guides
                </Link>
                <Link 
                  to="/find-your-tshirt" 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-stone-900 border border-stone-300 px-8 py-4 font-semibold hover:bg-stone-100 transition-colors text-sm uppercase tracking-widest"
                >
                  <Shirt className="w-5 h-5" />
                  Find Your Fit
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-stone-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stone-900" /> Independent
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stone-900" /> Expert Reviewed
                </div>
              </div>
            </div>

            {/* Right Image/Graphic */}
            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] w-full">
              <div className="absolute inset-0 bg-stone-200 transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200"
                alt="A collection of perfectly folded premium t-shirts"
                className="absolute inset-0 w-full h-full object-cover border border-stone-200"
              />
            </div>
            
          </div>
        </div>
      </section>`;

c = c.replace(target, replacement);

if (!c.includes('CheckCircle2')) {
  c = c.replace("import { ArrowRight, BookOpen, Shirt, ShieldCheck }", "import { ArrowRight, BookOpen, Shirt, ShieldCheck, CheckCircle2 }");
}

fs.writeFileSync('src/pages/Home.tsx', c);
