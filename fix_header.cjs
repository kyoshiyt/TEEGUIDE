const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

c = c.replace(
  "import { SITE_CONFIG } from '../../config';",
  "import { SITE_CONFIG } from '../../config';\nimport { products } from '../../data/products';\nimport { articles } from '../../data/articles';"
);

const hooksStr = `  const [searchQuery, setSearchQuery] = useState('');
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
      ).slice(0, 3).map(p => ({ title: p.name, url: \`/product/\${p.slug}\`, type: 'T-Shirt' }));
      
      const matchedArticles = articles.filter(a => 
        a.title.toLowerCase().includes(lowerQuery)
      ).slice(0, 2).map(a => ({ title: a.title, url: \`/\${a.type.toLowerCase() === 'guide' ? 'guides' : 'comparisons'}/\${a.slug}\`, type: 'Article' }));
      
      setSuggestions([...matchedProducts, ...matchedArticles]);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);`;

c = c.replace(
  `  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);`,
  hooksStr
);

const desktopSearchStr = `            {isSearchOpen ? (
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
            ) : (`;

c = c.replace(
  `            {isSearchOpen ? (
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
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 ml-1 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (`,
  desktopSearchStr
);

const mobileSearchStr = `      {/* Mobile search */}
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
      )}`;

c = c.replace(
  `      {/* Mobile search */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAFAF9] p-4">
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
        </div>
      )}`,
  mobileSearchStr
);


fs.writeFileSync('src/components/layout/Header.tsx', c);
