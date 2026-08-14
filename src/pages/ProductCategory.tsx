import { Link, useParams } from 'react-router-dom';
import { categories, products } from '../data';
import { ProductCard } from '../components/ui/ProductCard';
import { SEO } from '../components/SEO';
import { ArrowLeft, Filter } from 'lucide-react';

export function ProductCategory() {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = slug?.toLowerCase().trim();
  const category = categories.find(c => c.slug.toLowerCase() === normalizedSlug);
  
  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <Link to="/tshirts" className="text-blue-600 hover:underline">Browse all T-shirts</Link>
      </div>
    );
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id || p.categoryIds?.includes(category.id));

  return (
    <>
      <SEO 
        title={`Best ${category.name}`} 
        description={category.description} 
      />

      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/tshirts`} className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-100">
          <div className="text-stone-600 font-medium">
            Showing {categoryProducts.length} recommended products
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-stone-600 px-4 py-2 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-stone-50 rounded-none border border-stone-100">
            <p className="text-lg text-stone-600">We are currently evaluating products for this category.</p>
            <p className="text-stone-500 mt-2">Check back soon for our recommendations.</p>
          </div>
        )}
      </div>
    </>
  );
}
