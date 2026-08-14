import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X, Shirt } from 'lucide-react';
import { useState } from 'react';
import { SITE_CONFIG } from '../../config';
import { LogoIcon } from '../ui/LogoIcon';
import clsx from 'clsx';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <button className="p-2 text-stone-400 hover:text-stone-500 rounded-full hover:bg-stone-100 transition-colors">
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
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
