import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { products } from '../data/products';
import { articles } from '../data/articles';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const searchLower = query.toLowerCase();

  // Very basic search implementation
  const productResults = products.filter(p => {
    return p.name.toLowerCase().includes(searchLower) || 
           p.brand.toLowerCase().includes(searchLower) ||
           (p.description && p.description.toLowerCase().includes(searchLower)) ||
           (p.categoryId && p.categoryId.toLowerCase().includes(searchLower));
  });

  const articleResults = articles.filter(a => {
    return a.title.toLowerCase().includes(searchLower) || 
           (a.excerpt && a.excerpt.toLowerCase().includes(searchLower));
  });

  return (
    <>
      <Helmet>
        <title>Search Results for "{query}" | {SITE_CONFIG.siteName}</title>
      </Helmet>

      <div className="bg-stone-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-stone-500 mb-4">
            <SearchIcon className="h-6 w-6" />
            <h1 className="text-3xl font-serif font-bold text-stone-900">
              Search Results
            </h1>
          </div>
          <p className="text-lg text-stone-600">
            {query ? `Showing results for "${query}"` : "Please enter a search term."}
          </p>
        </div>
      </div>

      {query && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {productResults.length === 0 && articleResults.length === 0 && (
            <div className="text-center py-16 bg-white border border-stone-200 rounded-lg">
              <p className="text-stone-500 text-lg">No results found matching your query.</p>
              <p className="text-stone-400 mt-2">Try checking for typos or using different keywords.</p>
            </div>
          )}

          {articleResults.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">
                Guides & Articles ({articleResults.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articleResults.map(article => (
                  <Link 
                    key={article.id} 
                    to={`/${article.type.toLowerCase() === 'guide' ? 'guides' : 'comparisons'}/${article.slug}`}
                    className="group block border border-stone-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                  >
                    {article.featuredImage && (
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img 
                          src={article.featuredImage} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="text-xs font-bold tracking-wider text-[#B59A7E] uppercase mb-2">
                        {article.type}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-stone-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="text-[#B59A7E] font-medium text-sm inline-flex items-center group-hover:text-stone-900 transition-colors">
                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {productResults.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">
                T-Shirts ({productResults.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {productResults.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/5] w-full bg-stone-100 rounded-lg overflow-hidden mb-3 relative">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-stone-500 mb-1">{product.brand}</span>
                      <h3 className="text-sm font-medium text-stone-900 group-hover:text-stone-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <span className="text-sm font-semibold text-stone-900 mt-1">
                        Check price on Amazon
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </>
  );
}
