import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { SITE_CONFIG, isAffiliateMode } from '../../config';
import { ArrowRight, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
}

export function ProductCard({ product, className, featured = false }: ProductCardProps) {
  const showAffiliate = isAffiliateMode() && product.affiliateEnabled;
  const ctaUrl = showAffiliate ? product.affiliateUrlPlaceholder : `/product/${product.slug}`;
  const ctaText = showAffiliate ? 'View on Amazon' : 'Read the guide';

  return (
    <div className={clsx("flex flex-col bg-white rounded-none border border-stone-200 overflow-hidden hover:border-stone-300 transition-all hover:shadow-sm", className)}>
      <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-stone-50 overflow-hidden group border-b border-stone-200">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-bold text-stone-900 uppercase tracking-widest border border-stone-200">
          {product.brand}
        </div>
      </Link>
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <Link to={`/product/${product.slug}`} className="hover:text-stone-600 transition-colors">
            <h3 className="text-2xl font-serif text-stone-900 mb-3 leading-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-stone-600 mb-5 line-clamp-2">
            {product.description}
          </p>
          
          <div className="grid grid-cols-2 gap-y-3 text-sm mb-6 pb-6 border-b border-stone-100">
            <div className="text-stone-500 tracking-wide uppercase text-xs font-semibold">Fit</div>
            <div className="font-medium text-stone-900 text-right">{product.fit}</div>
            <div className="text-stone-500 tracking-wide uppercase text-xs font-semibold">Weight</div>
            <div className="font-medium text-stone-900 text-right">{product.weight}</div>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          {showAffiliate ? (
            <a 
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-4 py-3 rounded-none font-semibold hover:bg-stone-800 transition-colors text-sm tracking-wide uppercase"
            >
              {ctaText}
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <Link 
              to={ctaUrl}
              className="flex-1 inline-flex justify-center items-center gap-2 bg-[#FAFAF9] border border-stone-200 text-stone-900 px-4 py-3 rounded-none font-semibold hover:bg-stone-50 transition-colors text-sm tracking-wide uppercase"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
