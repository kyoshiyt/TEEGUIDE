import { articles } from '../data';
import { ArticleCard } from '../components/ui/ArticleCard';
import { SEO } from '../components/SEO';

export function GuidesList() {
  const guides = articles.filter(a => a.type === 'GUIDE');

  return (
    <>
      <SEO 
        title="T-Shirt Buying Guides & Education" 
        description="Learn how to choose the right T-shirt. Read our in-depth guides on fit, fabric weight, construction, and care." 
      />

      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-6 max-w-4xl mx-auto">
            T-Shirt Guides
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Everything you need to know before you buy. Learn about fabrics, fits, and how to build a better wardrobe.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {guides.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
