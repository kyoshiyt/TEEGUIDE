import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | {SITE_CONFIG.siteName}</title>
      </Helmet>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Contact Us</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed mb-12">
          <p>
            Have a question about a specific t-shirt? Notice an error in our database? Want us to review a new release? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#FAFAF9] border border-stone-200 p-8 md:p-12">
          <h2 className="text-2xl font-serif text-stone-900 mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div>
              <strong className="block text-stone-900 font-bold uppercase tracking-widest text-xs mb-2">Email Inquiries</strong>
              <a href="mailto:hello@example.com" className="text-stone-600 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors">
                hello@[YOUR_DOMAIN].com
              </a>
            </div>
            
            <div>
              <strong className="block text-stone-900 font-bold uppercase tracking-widest text-xs mb-2">Mailing Address</strong>
              <p className="text-stone-600">
                [YOUR COMPANY NAME]<br />
                [YOUR STREET ADDRESS]<br />
                [YOUR CITY, STATE, ZIP]<br />
                [YOUR COUNTRY]
              </p>
            </div>
          </div>
          
          <p className="text-sm text-stone-500 mt-12 pt-8 border-t border-stone-200">
            Please allow 24-48 hours for a response to editorial inquiries. We do not accept paid guest posts or sponsored links.
          </p>
        </div>
      </main>
    </>
  );
}
