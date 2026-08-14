import { articles } from '../data';
import { ArticleCard } from '../components/ui/ArticleCard';
import { SEO } from '../components/SEO';

export function ComparisonsList() {
  const comparisons = articles.filter(a => a.type === 'COMPARISON');

  return (
    <>
      <SEO 
        title="T-Shirt Comparisons: Cotton vs Polyester, Fit & More" 
        description="Head-to-head comparisons of T-shirt materials, weights, and fits to help you make the right purchasing decision." 
      />

      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-6 max-w-4xl mx-auto">
            Head-to-Head Comparisons
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Not sure which option is best? We compare materials, weights, and fits side-by-side to help you decide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {comparisons.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
