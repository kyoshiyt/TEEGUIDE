import { Link } from 'react-router-dom';
import { categories, products } from '../data';
import { SEO } from '../components/SEO';

export function AllCategories() {
  return (
    <>
      <SEO 
        title="T-Shirt Categories & Reviews" 
        description="Browse our comprehensive reviews and recommendations across all T-shirt categories, from heavyweight cotton to performance blends." 
      />

      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-6 max-w-4xl mx-auto">
            Find Your T-Shirt
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Browse our recommendations by category to find the perfect fit, fabric, and style for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map(category => {
            const count = products.filter(p => p.categoryId === category.id || p.categoryIds?.includes(category.id)).length;
            return (
              <Link 
                key={category.id} 
                to={`/tshirts/${category.slug}`}
                className="group flex flex-col p-8 bg-white border border-stone-200 rounded-none hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h2 className="text-2xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors mb-3">
                  {category.name}
                </h2>
                <p className="text-stone-600 flex-grow mb-6">
                  {category.description}
                </p>
                <div className="text-sm font-semibold text-stone-400 mt-auto">
                  {count} {count === 1 ? 'Product' : 'Products'} Evaluated
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
