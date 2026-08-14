import { Link } from 'react-router-dom';
import { articles, products, categories } from '../data';

export function Diagnostics() {
  return (
    <div className="max-w-7xl mx-auto p-12">
      <h1 className="text-3xl font-bold mb-8">Diagnostics</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Articles ({articles.length})</h2>
        <ul className="space-y-2">
          {articles.map(a => (
            <li key={a.id}>
              <Link to={a.type === 'GUIDE' ? `/guides/${a.slug}` : `/comparisons/${a.slug}`} className="text-blue-600 hover:underline">
                {a.type}: {a.slug}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Products ({products.length})</h2>
        <ul className="space-y-2">
          {products.map(p => (
            <li key={p.id}>
              <Link to={`/product/${p.slug}`} className="text-blue-600 hover:underline">
                {p.slug}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Categories ({categories.length})</h2>
        <ul className="space-y-2">
          {categories.map(c => (
            <li key={c.id}>
              <Link to={`/tshirts/${c.slug}`} className="text-blue-600 hover:underline">
                {c.slug}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
