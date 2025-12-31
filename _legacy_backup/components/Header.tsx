import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Facilities', href: '#facilities' }, // Renamed from Locations/Fleet
  { label: 'Team', href: '#team' },
];

interface HeaderProps {
  theme?: 'light' | 'dark'; // Kept for interface compatibility but forcing white theme
  toggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo theme="light" />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-xs font-bold uppercase tracking-[0.15em] text-navy hover:text-teal transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className="ml-4">
              Partner With Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              className="p-2 text-navy hover:text-teal transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-navy pt-24 px-6 lg:hidden">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold uppercase tracking-widest text-white hover:text-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <Button variant="white" size="lg" className="mt-8 w-full">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};