import { Link } from 'react-router-dom';
import { Article, Category } from '../../types';
import { categories } from '../../data';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface ArticleCardProps {
  article: Article;
  className?: string;
  featured?: boolean;
}

export function ArticleCard({ article, className, featured = false }: ArticleCardProps) {
  const category = categories.find(c => c.id === article.categoryId);
  const formattedDate = format(new Date(article.publishedDate), 'MMM d, yyyy');

  return (
    <article className={clsx("flex flex-col group", className)}>
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-4">
          {category && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900 border border-stone-300 px-2 py-1">
              {category.name}
            </span>
          )}
          <time dateTime={article.publishedDate} className="text-xs font-semibold tracking-widest uppercase text-stone-500">
            {formattedDate}
          </time>
        </div>
        
        <Link to={`/${article.type === 'COMPARISON' ? 'comparisons' : 'guides'}/${article.slug}`} className="block group-hover:text-stone-600 transition-colors">
          <h3 className={clsx("font-serif text-stone-900 mb-3 leading-tight", featured ? "text-3xl md:text-4xl" : "text-2xl")}>
            {article.title}
          </h3>
        </Link>
        
        <p className="text-stone-600 mb-5 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
      
      <div className="mt-auto pt-2">
        <Link 
          to={`/${article.type === 'COMPARISON' ? 'comparisons' : 'guides'}/${article.slug}`} 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 group-hover:text-stone-600 transition-colors pb-1 border-b border-stone-900"
        >
          Read Article
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
