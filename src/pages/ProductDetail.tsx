import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data';
import { SEO } from '../components/SEO';
import { isAffiliateMode } from '../config';
import { ArrowLeft, ExternalLink, Check, X, ShieldCheck } from 'lucide-react';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>(); console.log("Product Slug from router:", slug, "Available products:", products.map(p => p.slug));
  const normalizedSlug = slug?.toLowerCase().trim();
  const product = products.find(p => p.slug.toLowerCase() === normalizedSlug);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/tshirts" className="text-blue-600 hover:underline">Browse all T-shirts</Link>
      </div>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  const showAffiliate = isAffiliateMode() && product.affiliateEnabled;
  const ctaUrl = showAffiliate ? product.affiliateUrlPlaceholder : '#';
  
  return (
    <>
      <SEO 
        title={`${product.brand} ${product.name} Review`} 
        description={product.description} 
      />

      <div className="bg-[#FAFAF9] border-b border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/tshirts`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors pb-1 border-b border-transparent hover:border-stone-900">
            <ArrowLeft className="w-4 h-4" />
            Back to all T-shirts
          </Link>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Image */}
          <div>
            <div className="relative w-full aspect-[3/4] bg-[#FAFAF9] rounded-none border border-stone-200 sticky top-24 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-900">
                  {product.brand}
                </span>
                {category && (
                  <Link to={`/tshirts/${category.slug}`} className="text-[10px] font-bold uppercase tracking-widest text-stone-900 border border-stone-300 px-2 py-1 hover:bg-stone-100 transition-colors">
                    {category.name}
                  </Link>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-[1.1] mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-10">
                {product.description}
              </p>
              
              {/* Commercial CTA */}
              <div className="bg-[#FAFAF9] rounded-none border border-stone-200 p-8 shadow-sm mb-12">
                {showAffiliate ? (
                  <div className="space-y-4">
                    <a 
                      href={ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-5 rounded-none font-bold hover:bg-stone-800 transition-colors text-sm uppercase tracking-widest"
                    >
                      Check Price on Amazon
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <p className="text-xs text-center font-semibold tracking-wide uppercase text-stone-500">
                      As an Amazon Associate we earn from qualifying purchases.
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-6 bg-white rounded-none border border-stone-200">
                    <p className="text-stone-900 font-bold uppercase tracking-widest text-sm mb-2">Currently being evaluated</p>
                    <p className="text-sm text-stone-500">Read our comprehensive guide below.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-16">
              <div className="bg-[#FAFAF9] p-6">
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-2">Material</div>
                <div className="font-semibold text-stone-900">{product.material}</div>
              </div>
              <div className="bg-[#FAFAF9] p-6">
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-2">Fit</div>
                <div className="font-semibold text-stone-900">{product.fit}</div>
              </div>
              <div className="bg-[#FAFAF9] p-6">
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-2">Weight</div>
                <div className="font-semibold text-stone-900">{product.weight} {product.gsm ? `(${product.gsm} GSM)` : ''}</div>
              </div>
              <div className="bg-[#FAFAF9] p-6">
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-2">Status</div>
                <div className="font-semibold flex items-center gap-1 text-stone-900">
                  <ShieldCheck className="w-4 h-4 text-stone-400" /> {product.verificationStatus}
                </div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
                  <span className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center"><Check className="w-4 h-4" /></span>
                  Pros
                </h3>
                <ul className="space-y-4">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-700 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-stone-900 flex-shrink-0"></span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
                  <span className="w-8 h-8 bg-stone-100 border border-stone-300 text-stone-900 flex items-center justify-center"><X className="w-4 h-4" /></span>
                  Cons
                </h3>
                <ul className="space-y-4">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-700 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-stone-300 flex-shrink-0"></span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-12">
              <section className="border-t border-stone-200 pt-8">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Best Used For</h2>
                <div className="flex flex-wrap gap-2">
                  {product.intendedUse.map((use, i) => (
                    <span key={i} className="px-4 py-2 border border-stone-200 bg-[#FAFAF9] text-stone-900 text-xs font-bold uppercase tracking-widest">
                      {use}
                    </span>
                  ))}
                </div>
              </section>

              <section className="border-t border-stone-200 pt-8">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Available Colors</h2>
                <p className="text-stone-600 mb-4">Typically available in:</p>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors.map((color, i) => (
                    <span key={i} className="px-4 py-2 border border-stone-200 bg-white text-stone-900 text-xs font-bold uppercase tracking-widest">
                      {color}
                    </span>
                  ))}
                </div>
              </section>

              <section className="border-t border-stone-200 pt-8">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Sizing Profile</h2>
                <p className="text-stone-600 mb-4">Typically ranges from:</p>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size, i) => (
                    <span key={i} className="w-12 h-12 flex items-center justify-center border border-stone-200 bg-[#FAFAF9] text-stone-900 font-bold uppercase tracking-widest text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="mt-16 pt-8 border-t border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500">
              <p>Last verified: {product.lastVerifiedDate}</p>
              <p className="mt-4"><Link to="/how-we-evaluate" className="text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 transition-colors">Learn how we evaluate products</Link></p>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
