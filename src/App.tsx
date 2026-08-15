import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { AllCategories } from './pages/AllCategories';
import { ProductCategory } from './pages/ProductCategory';
import { ProductDetail } from './pages/ProductDetail';
import { GuidesList } from './pages/GuidesList';
import { ComparisonsList } from './pages/ComparisonsList';
import { ArticleDetail } from './pages/ArticleDetail';
import { Quiz } from './pages/Quiz';
import { Search } from './pages/Search';

// Info Pages
import { About } from './pages/info/About';
import { AffiliateDisclosure } from './pages/info/AffiliateDisclosure';
import { HowWeEvaluate } from './pages/info/HowWeEvaluate';
import { EditorialPolicy } from './pages/info/EditorialPolicy';
import { Contact } from './pages/info/Contact';
import { Privacy } from './pages/info/Privacy';
import { Terms } from './pages/info/Terms';
import { Cookies } from './pages/info/Cookies';

import { CommercialGuide } from './pages/CommercialGuide';

// Simple placeholder component for pages not fully implemented yet
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-stone-600">This page is currently under construction.</p>
    </div>
  );
}

import { Diagnostics } from "./pages/Diagnostics";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="tshirts">
              <Route index element={<AllCategories />} />
              <Route path=":slug" element={<ProductCategory />} />
            </Route>

            {/* In a real app, products might have their own route separate from category */}
            {/* But for this architecture, we'll route products under /tshirts as well for simplicity, 
                assuming product slugs don't conflict with category slugs. 
                Alternatively, we could use /product/:slug */}
            <Route path="tshirts/product/:slug" element={<ProductDetail />} />
            {/* Since we linked to /tshirts/:slug for products in the ProductCard, let's add a check inside ProductCategory or just use a distinct path.
                Actually, let's fix ProductCard to link to /product/:slug and add the route here. */}
            <Route path="product/:slug" element={<ProductDetail />} />
            
            <Route path="guides">
              <Route index element={<GuidesList />} />
              <Route path=":slug" element={<ArticleDetail />} />
            </Route>
            
            <Route path="comparisons">
              <Route index element={<ComparisonsList />} />
              <Route path=":slug" element={<ArticleDetail />} />
            </Route>

            {/* Commercial Buying Guides */}
            <Route path="best-:slug" element={<CommercialGuide />} />
            
            <Route path="find-your-tshirt" element={<Quiz />} />
            <Route path="search" element={<Search />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            
            {/* Info Pages */}
            <Route path="about" element={<About />} />
            <Route path="affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="how-we-evaluate" element={<HowWeEvaluate />} />
            <Route path="editorial-policy" element={<EditorialPolicy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />

            {/* 404 */}
            <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
