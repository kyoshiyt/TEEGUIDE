import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArticleCard } from '../components/ui/ArticleCard';
import { ProductCard } from '../components/ui/ProductCard';
import { articles, categories, products } from '../data';
import { ArrowRight, BookOpen, Shirt, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Home() {
  const latestGuides = articles.filter(a => a.type === 'GUIDE').slice(0, 3);
  const latestComparisons = articles.filter(a => a.type === 'COMPARISON').slice(0, 2);
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <SEO 
        title="Find the Right T-Shirt for You" 
        description="Guides, comparisons, fit advice, and product recommendations to help you choose your next T-shirt."
      />
      
      {/* Hero Section */}
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
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200"
                alt="A collection of perfectly folded premium t-shirts"
                className="absolute inset-0 w-full h-full object-cover border border-stone-200"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-4">
          <h2 className="text-4xl font-serif text-stone-900">Popular Categories</h2>
          <Link to="/tshirts" className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors">
            View all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
          {categories.slice(0, 8).map(category => (
            <Link 
              key={category.id} 
              to={`/tshirts/${category.slug}`}
              className="group block p-8 bg-[#FAFAF9] hover:bg-white transition-all text-center"
            >
              <h3 className="font-semibold text-stone-900 uppercase tracking-widest group-hover:text-stone-600 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-24 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-stone-900 mb-4">T-Shirt Education</h2>
              <p className="text-lg text-stone-600">Everything you need to know before you buy.</p>
            </div>
            <Link to="/guides" className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors">
              View all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {latestGuides.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Popular Comparisons</h2>
            <p className="text-lg text-stone-600">Head-to-head guides to help you decide.</p>
          </div>
          <Link to="/comparisons" className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors">
            View all comparisons <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {latestComparisons.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 border-b border-stone-800 pb-12">
            <h2 className="text-5xl font-serif mb-6">Editor's Picks</h2>
            <p className="text-xl text-stone-400">Our top recommended T-shirts across various categories, evaluated for fit, fabric, and value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-stone-200">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 text-stone-900 mb-8 border border-stone-200">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-4xl font-serif text-stone-900 mb-6">How We Evaluate Products</h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          We use a strict editorial methodology to evaluate T-shirts based on fabric quality, fit, construction, comfort, durability, and value. Our recommendations are driven by independent research, not sponsorships.
        </p>
        <Link 
          to="/how-we-evaluate" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors pb-1 border-b-2 border-stone-900"
        >
          Read our full methodology <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">Get New T-Shirt Guides</h2>
          <p className="text-xl text-stone-400 mb-10">
            Join our newsletter to receive the latest T-shirt comparisons, fit advice, and recommendations.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 bg-[#FAFAF9] text-stone-900 border-none focus:outline-none focus:ring-0 rounded-none text-sm tracking-wide"
              required
            />
            <button 
              type="submit"
              className="bg-stone-700 text-white px-8 py-4 font-bold hover:bg-stone-600 transition-colors whitespace-nowrap rounded-none uppercase tracking-widest text-sm"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-stone-500 mt-6 tracking-wide">We respect your inbox. No spam, ever.</p>
        </div>
      </section>
    </>
  );
}
