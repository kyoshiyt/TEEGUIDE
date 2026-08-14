import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config';

export function AffiliateDisclosure() {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | {SITE_CONFIG.siteName}</title>
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Affiliate Disclosure</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>
            In the interest of transparency, {SITE_CONFIG.siteName} maintains affiliate relationships with various retailers, including the Amazon Services LLC Associates Program.
          </p>
          
          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">How It Works</h2>
          <p>
            When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. This comes at absolutely no additional cost to you.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Amazon Associates Program</h2>
          <p>
            {SITE_CONFIG.siteName} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>

          <p className="mt-8 italic text-stone-500">
            Note: As the site is currently in the PRE_APPROVAL phase, actual affiliate links may not be active yet. Placeholders are used until the relevant programs are fully approved and integrated.
          </p>
        </div>
      </main>
    </>
  );
}
