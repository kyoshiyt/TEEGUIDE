import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config';

export function EditorialPolicy() {
  return (
    <>
      <Helmet>
        <title>Editorial Policy | {SITE_CONFIG.siteName}</title>
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Editorial Policy</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>
            At {SITE_CONFIG.siteName}, editorial integrity is our highest priority. Our readers must trust that our recommendations are objective, honest, and free from undue influence.
          </p>
          
          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Independence</h2>
          <p>
            Our editorial content is entirely independent of our affiliate partnerships. Brands cannot pay for placement in our buying guides, nor can they dictate our reviews. If a product fails to meet our standards, we will state that clearly, regardless of any affiliate relationship.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Accuracy and Updates</h2>
          <p>
            Apparel brands frequently change their manufacturing processes, sizing, and materials without notice. We are committed to keeping our database as accurate as possible. You will notice a "Last Verified Date" on our product pages, indicating exactly when we last checked the specifications.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Corrections</h2>
          <p>
            If we make a factual error in our reporting or if a brand's specifications change substantially, we will update the relevant article or product page promptly and transparently.
          </p>
        </div>
      </main>
    </>
  );
}
