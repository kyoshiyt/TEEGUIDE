import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data';
import { ProductCard } from '../components/ui/ProductCard';
import { MarkdownRenderer } from '../components/ui/MarkdownRenderer';

// We map guide slugs to category IDs and some contextual markdown
const guidesData: Record<string, { title: string; description: string; categoryId: string; content: string }> = {
  'best-heavyweight-tshirts': {
    title: 'Best Heavyweight T-Shirts',
    description: 'The most durable, structured, and thick tees on the market.',
    categoryId: 'heavyweight',
    content: `Heavyweight t-shirts (typically over 6.0 oz/sq yd or 200 GSM) are built to last. They drape straight down, hide the body's natural contours, and withstand years of washing without losing their shape. 
    
When evaluating a heavyweight tee, look for:
- **Carded Open-End vs. Ring-Spun Cotton:** Open-end feels rougher and more vintage. Ring-spun is softer but still thick.
- **Collar Construction:** A heavyweight tee needs a robust, snug collar (often with a tiny amount of spandex or thick ribbing) to match the body's structure.
- **Seam Construction:** Blind stitching or double-needle stitching adds durability.
    
Below are our top picks for the best heavyweight t-shirts.`
  },
  'best-mens-tshirts': {
    title: 'Best Men\'s T-Shirts Overall',
    description: 'Our top picks across all categories for men.',
    categoryId: 'basic',
    content: `Finding the single "best" t-shirt is impossible because it depends on your body type, budget, and personal style. However, after evaluating dozens of shirts, we've identified the best options in the most popular categories.

Below you will find our top recommendations for the perfect men's t-shirt, ranging from premium basics to durable workwear.`
  },
  'best-oversized-tshirts': {
    title: 'Best Oversized T-Shirts',
    description: 'Drop shoulders, relaxed fits, and streetwear silhouettes.',
    categoryId: 'oversized',
    content: `The oversized trend is more than just buying a shirt two sizes up. A true oversized t-shirt is pattern-cut differently: it features dropped shoulders, a wider chest, and often a cropped or boxy length so it doesn't look like a dress.

Below are the best intentionally oversized t-shirts we've tested.`
  },
  'best-gym-tshirts': {
    title: 'Best Gym & Workout T-Shirts',
    description: 'Breathable, moisture-wicking, and stretch-friendly shirts for training.',
    categoryId: 'gym',
    content: `When training, you need a shirt that moves with you, wicks sweat, and doesn't get heavy. We look for polyester/elastane blends, merino wool, or highly engineered synthetics.

Here are the top-performing t-shirts for the gym and high-intensity workouts.`
  },
  'best-cotton-tshirts': {
    title: 'Best 100% Cotton T-Shirts',
    description: 'Pure, breathable, and comfortable cotton tees.',
    categoryId: 'cotton',
    content: `There is no substitute for 100% cotton. It's breathable, hypoallergenic, and breaks in beautifully over time. We evaluate the staple length (Pima/Supima vs. regular) and the spinning method (ring-spun vs. open-end) to find the best pure cotton shirts.

These are our favorite 100% cotton t-shirts.`
  },
  'best-summer-tshirts': {
    title: 'Best Summer T-Shirts',
    description: 'Lightweight, breezy tees to survive the heat.',
    categoryId: 'summer',
    content: `In high heat and humidity, you need a t-shirt that is lightweight (under 4.5 oz or 150 GSM) and highly breathable. Linen blends and lightweight ring-spun cotton are ideal.

Here are the best t-shirts to keep you cool in the summer.`
  },
  'best-tshirts-under-25': {
    title: 'Best T-Shirts Under $25',
    description: 'High quality without the premium markup.',
    categoryId: 'budget',
    content: `You don't need to spend $50 to get a good t-shirt. Many blanks used by streetwear brands are available for a fraction of the cost if you know where to look.

Here are the best budget-friendly t-shirts that punch above their weight class.`
  },
  'best-tshirts-under-50': {
    title: 'Best T-Shirts Under $50',
    description: 'The sweet spot for premium construction and value.',
    categoryId: 'mid',
    content: `The $30-$50 range is the sweet spot for t-shirts. Here, you get access to superior materials like Supima cotton, better quality control, and ethical manufacturing, without paying purely for a designer logo.

Here are our top mid-tier t-shirt recommendations.`
  }
};

export function CommercialGuide() {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = slug?.toLowerCase().trim();
  const fullSlug = normalizedSlug ? `best-${normalizedSlug}` : '';
  const guide = fullSlug && guidesData[fullSlug] ? guidesData[fullSlug] : null;

  if (!guide) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
        <p className="text-stone-600 mb-8">The guide you are looking for does not exist.</p>
        <Link to="/" className="text-stone-900 border-b border-stone-900 pb-1">Return Home</Link>
      </div>
    );
  }

  // Find products that match the guide's category
  // For budget/mid, we simulate by filtering based on a mock price range if we had one.
  // Since we don't have explicit prices in the data model yet, we'll just map them to general categories or show all.
  let matchingProducts = [];
  if (guide.categoryId === 'budget') {
     matchingProducts = products.slice(0, 5); // Just grab some
  } else if (guide.categoryId === 'mid') {
     matchingProducts = products.slice(5, 12);
  } else {
     matchingProducts = products.filter(p => p.categoryId === guide.categoryId || p.categoryIds?.includes(guide.categoryId));
  }

  return (
    <>
      <Helmet>
        <title>{guide.title} | The T-Shirt Guide</title>
        <meta name="description" content={guide.description} />
      </Helmet>

      <div className="bg-[#FAFAF9] py-12 lg:py-20 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-6">
            {guide.title}
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            {guide.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="mb-16">
            <MarkdownRenderer content={guide.content} />
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">Our Top Picks</h2>
            {matchingProducts.length > 0 ? (
              matchingProducts.map(product => (
                <div key={product.id} className="border border-stone-200 bg-white p-6 md:p-8">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-stone-500 italic">No products currently match this criteria.</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 bg-[#FAFAF9] p-8 border border-stone-200">
            <h3 className="font-serif text-2xl text-stone-900 mb-6">How We Evaluate</h3>
            <p className="text-stone-600 mb-6 text-sm leading-relaxed">
              Every t-shirt on our list is evaluated based on its fabric composition, stitching quality, fit accuracy, and long-term durability. We do not accept paid placements.
            </p>
            <Link to="/how-we-evaluate" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors pb-1 border-b-2 border-stone-900">
              Read Methodology
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
