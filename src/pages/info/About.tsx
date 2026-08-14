import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | {SITE_CONFIG.siteName}</title>
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">About Us</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>
            Welcome to {SITE_CONFIG.siteName}. We are an independent editorial publication dedicated to helping men and women find the perfect t-shirt.
          </p>
          <p>
            What started as a frustration with inconsistent sizing, degrading fabric quality, and misleading marketing has evolved into a comprehensive database of t-shirt knowledge. We believe that a t-shirt is the foundational garment of the modern wardrobe, and finding the right one should not require endless trial and error.
          </p>
          
          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Our Mission</h2>
          <p>
            Our mission is simple: cut through the marketing jargon and provide objective, structured, and highly detailed evaluations of basic apparel. We measure, weigh, and analyze fabrics so you know exactly what you are buying before you spend your hard-earned money.
          </p>
          
          <h2 className="text-2xl font-serif text-stone-900 mt-12 mb-6">Who We Are</h2>
          <p>
            This site is maintained by {SITE_CONFIG.ownerName} [UPDATE IN CONFIG], an apparel enthusiast who got tired of wasting money on shirts that shrunk after one wash or lost their shape. Our small team is entirely independent, and our loyalty lies exclusively with our readers.
          </p>
        </div>
      </main>
    </>
  );
}
