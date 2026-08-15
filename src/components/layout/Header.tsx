import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Shirt } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { SITE_CONFIG } from '../../config';
import { products } from '../../data/products';
import { articles } from '../../data/articles';
import { LogoIcon } from '../ui/LogoIcon';
import clsx from 'clsx';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{title: string, url: string, type: string}[]>([]);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const lowerQuery = searchQuery.toLowerCase();
      const matchedProducts = products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || p.brand.toLowerCase().includes(lowerQuery)
      ).slice(0, 3).map(p => ({ title: p.name, url: `/product/${p.slug}`, type: 'T-Shirt' }));
      
      const matchedArticles = articles.filter(a => 
        a.title.toLowerCase().includes(lowerQuery)
      ).slice(0, 2).map(a => ({ title: a.title, url: `/${a.type.toLowerCase() === 'guide' ? 'guides' : 'comparisons'}/${a.slug}`, type: 'Article' }));
      
      setSuggestions([...matchedProducts, ...matchedArticles]);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'T-Shirts', path: '/tshirts' },
    { name: 'Guides', path: '/guides' },
    { name: 'Comparisons', path: '/comparisons' },
    { name: 'Find Your T-Shirt', path: '/find-your-tshirt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <LogoIcon className="h-10 w-auto" />
              <div className="flex flex-col ml-2">
                <span className="font-sans font-bold text-xl tracking-[0.2em] text-[#0A1118] leading-none">
                  TEE<span className="text-[#B59A7E]">GUIDE</span>
                </span>
                <span className="text-[7px] tracking-[0.2em] text-[#0A1118] mt-1 font-medium">FIND. COMPARE. WEAR BETTER.</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-stone-900 border-b-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-900 hover:border-b-2 hover:border-stone-300 border-b-2 border-transparent'
                  )
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            ))}
          </nav>

                    {/* Right actions (Search) */}
          <div className="hidden md:flex items-center">
            {isSearchOpen ? (
              <div className="relative">
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search T-Shirts..."
                    className="w-48 px-2 py-1 text-sm border-b border-stone-400 bg-transparent focus:outline-none focus:border-stone-900 transition-all placeholder-stone-400"
                  />
                  <button 
                    type="button" 
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                    className="p-1 ml-1 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>
                {suggestions.length > 0 && (
                  <div className="absolute top-full mt-2 w-64 right-0 bg-white border border-stone-200 rounded-md shadow-lg overflow-hidden z-50">
                    <ul className="max-h-64 overflow-y-auto py-1">
                      {suggestions.map((item, idx) => (
                        <li key={idx}>
                          <button 
                            type="button"
                            className="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 focus:bg-stone-50 focus:outline-none transition-colors"
                            onClick={() => {
                              navigate(item.url);
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                          >
                            <span className="block font-medium text-stone-900 truncate">{item.title}</span>
                            <span className="block text-[10px] text-stone-500 uppercase tracking-wider mt-0.5">{item.type}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-stone-400 hover:text-stone-500 rounded-full hover:bg-stone-100 transition-colors"
              >
                <span className="sr-only">Search</span>
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

                    {/* Mobile actions */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 mr-1 text-stone-400 hover:text-stone-500 rounded-md hover:bg-stone-100 transition-colors"
            >
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 transition-colors"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

            {/* Mobile search */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAFAF9] p-4 relative">
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full relative">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, t-shirts, etc..."
              className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
            />
            <Search className="h-5 w-5 text-stone-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </form>
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mx-4 mt-1 bg-white border border-stone-200 rounded-md shadow-lg overflow-hidden z-50">
              <ul className="max-h-64 overflow-y-auto py-1">
                {suggestions.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      type="button"
                      className="w-full text-left px-4 py-3 text-sm border-b border-stone-100 last:border-0 hover:bg-stone-50 active:bg-stone-100 transition-colors"
                      onClick={() => {
                        navigate(item.url);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                    >
                      <span className="block font-medium text-stone-900">{item.title}</span>
                      <span className="block text-xs text-stone-500 uppercase tracking-wider mt-1">{item.type}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAFAF9]">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-stone-50 border-stone-900 text-stone-900'
                      : 'border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-900'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
