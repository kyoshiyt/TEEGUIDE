import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config';

export function HowWeEvaluate() {
  return (
    <>
      <Helmet>
        <title>How We Evaluate | {SITE_CONFIG.siteName}</title>
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">How We Evaluate Products</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>
            Our product recommendations are not arbitrary. We utilize a structured methodology to evaluate every garment that appears on {SITE_CONFIG.siteName}. 
          </p>
          
          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">1. Fabric Analysis</h2>
          <p>
            The foundation of any t-shirt is the fabric. We look beyond basic "100% cotton" labels to assess the yarn type (ring-spun vs. carded open-end), the fabric weight (GSM or ounces per square yard), and the knitting technique.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">2. Construction and Stitching</h2>
          <p>
            A high-quality fabric is useless if the seams fall apart. We evaluate:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Collar Integrity:</strong> Does it use a ribbed knit with spandex to maintain shape? Is it bound or taped?</li>
            <li><strong>Seam Type:</strong> Is the shirt tubular (no side seams) or cut-and-sew (side-seamed for better drape)?</li>
            <li><strong>Stitch Density:</strong> Higher stitches per inch (SPI) indicates better durability and attention to detail.</li>
          </ul>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">3. Fit and Proportion</h2>
          <p>
            We classify fits rigorously into categories like Classic, Relaxed, Oversized, and Tailored. We analyze the shoulder drop, sleeve width, and overall drape to ensure our fit descriptions match reality, not just the marketing copy.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">4. Value for Money</h2>
          <p>
            We do not assume that more expensive means better. We weigh the material quality and construction against the retail price to determine if a product represents genuine value or simply a brand markup.
          </p>
        </div>
      </main>
    </>
  );
}
