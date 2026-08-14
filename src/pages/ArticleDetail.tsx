import { useParams, Link } from 'react-router-dom';
import { articles, authors, categories, products } from '../data';
import { SEO } from '../components/SEO';
import { MarkdownRenderer } from '../components/ui/MarkdownRenderer';
import { ArticleCard } from '../components/ui/ArticleCard';
import { ProductCard } from '../components/ui/ProductCard';
import { format } from 'date-fns';
import { ArrowLeft, User, Clock } from 'lucide-react';

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>(); console.log("Slug from router:", slug, "Available slugs:", articles.map(a => a.slug));
  const normalizedSlug = slug?.toLowerCase().trim();
  const article = articles.find(a => a.slug.toLowerCase().trim() === normalizedSlug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/guides" className="text-stone-900 border-b border-stone-900 pb-1">Return to guides</Link>
      </div>
    );
  }

  const author = authors[article.authorId];
  const category = categories.find(c => c.id === article.categoryId);
  const relatedArticles = articles.filter(a => article.relatedArticleIds?.includes(a.id));
  const relatedProducts = products.filter(p => article.relatedProductIds?.includes(p.id));
  const publishedDate = format(new Date(article.publishedDate), 'MMMM d, yyyy');
  const updatedDate = format(new Date(article.lastUpdatedDate), 'MMMM d, yyyy');

  return (
    <>
      <SEO 
        title={article.title} 
        description={article.excerpt} 
        type="article"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <Link to={article.type === 'GUIDE' ? '/guides' : '/comparisons'} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors mb-10 pb-1 border-b border-transparent hover:border-stone-900">
          <ArrowLeft className="w-4 h-4" />
          Back to {article.type === 'GUIDE' ? 'Guides' : 'Comparisons'}
        </Link>

        <header className="mb-12">
          {category && (
            <Link to={`/tshirts/${category.slug}`} className="inline-block text-[10px] font-bold uppercase tracking-widest text-stone-900 border border-stone-300 px-3 py-1 mb-6 hover:bg-stone-100 transition-colors">
              {category.name}
            </Link>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1] mb-8">
            {article.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 py-6 border-y border-stone-200">
            {author && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center text-stone-500 border border-stone-200">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide uppercase text-stone-900">{author.name}</div>
                  <div className="text-xs text-stone-500 tracking-wider uppercase">Editorial Team</div>
                </div>
              </div>
            )}
            
            <div className="hidden sm:block w-px h-10 bg-stone-200"></div>
            
            <div className="text-xs text-stone-500 font-semibold tracking-widest uppercase">
              <div>Published: {publishedDate}</div>
              {article.lastUpdatedDate !== article.publishedDate && (
                <div className="mt-1 text-stone-400">Updated: {updatedDate}</div>
              )}
            </div>

            {article.readingTime && (
              <>
                <div className="hidden sm:block w-px h-10 bg-stone-200"></div>
                <div className="flex items-center gap-2 text-xs text-stone-500 font-semibold tracking-widest uppercase">
                  <Clock className="w-4 h-4" />
                  <span>{article.readingTime}</span>
                </div>
              </>
            )}
          </div>
        </header>

        {article.featuredImage && (
          <div className="mb-16">
            <img 
              src={article.featuredImage} 
              alt={article.title} 
              className="w-full h-auto object-cover border border-stone-200"
              style={{ maxHeight: '600px' }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <MarkdownRenderer content={article.content} />
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            {/* Sidebar Author Box */}
            {author && (
              <div className="bg-[#FAFAF9] p-8 border border-stone-200">
                <h3 className="font-serif text-2xl text-stone-900 mb-4">About the Author</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">{author.bio}</p>
                <Link to="/about" className="text-xs font-bold tracking-widest uppercase text-stone-900 hover:text-stone-600 border-b border-stone-900 pb-1">Read Editorial Policy</Link>
              </div>
            )}
            
            {/* Sidebar Disclosure */}
            <div className="bg-[#FAFAF9] p-8 border border-stone-200 text-sm text-stone-500 leading-relaxed">
              <strong className="text-stone-900 font-bold block mb-2 tracking-wide uppercase text-xs">Affiliate Disclosure</strong> As an Amazon Associate we earn from qualifying purchases. This does not affect our editorial independence or the price you pay.
            </div>
          </div>
        </div>
      </article>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="bg-white py-20 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Featured in this Article</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="bg-[#FAFAF9] py-20 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Related Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.slice(0, 3).map(related => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
