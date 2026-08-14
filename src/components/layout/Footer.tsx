import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config';
import { LogoIcon } from '../ui/LogoIcon';

export function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 flex flex-col items-start gap-2">
              <div className="flex items-center">
                <LogoIcon className="h-12 w-auto" isDark={true} />
                <div className="flex flex-col ml-3">
                  <span className="font-sans font-bold text-2xl tracking-[0.2em] text-white leading-none">
                    TEE<span className="text-[#B59A7E]">GUIDE</span>
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-[#A8A29E] mt-1 font-medium">FIND. COMPARE. WEAR BETTER.</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-400 mb-6">
              Independent research, guides, and recommendations to help you find the perfect T-shirt.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Content</h3>
            <ul className="space-y-3">
              <li><Link to="/tshirts" className="text-sm text-stone-400 hover:text-white transition-colors">T-Shirt Reviews</Link></li>
              <li><Link to="/guides" className="text-sm text-stone-400 hover:text-white transition-colors">Buying Guides</Link></li>
              <li><Link to="/comparisons" className="text-sm text-stone-400 hover:text-white transition-colors">Comparisons</Link></li>
              <li><Link to="/find-your-tshirt" className="text-sm text-stone-400 hover:text-white transition-colors">Find Your T-Shirt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/how-we-evaluate" className="text-sm text-stone-400 hover:text-white transition-colors">How We Evaluate</Link></li>
              <li><Link to="/editorial-policy" className="text-sm text-stone-400 hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link to="/contact" className="text-sm text-stone-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-stone-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-stone-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/cookies" className="text-sm text-stone-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-sm text-stone-400 hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="bg-stone-800/50 p-4 rounded-sm mb-8 text-sm text-stone-400 leading-relaxed border border-stone-700/50">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
            When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission.
            However, our reviews and comparisons are driven by our independent research and editorial standards.
          </div>
          <p className="text-base text-stone-500 text-center">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
