'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { Logo } from './Logo';
import { Container } from './Container';
import { Button } from '@/components/ui/button';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Restaurants', href: '/restaurants' },
  { label: 'Partner', href: '/partner-with-us' },
  { label: 'Become a Hero', href: '/ride-with-us' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getTotalItems());

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-brand-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth & Cart - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-brand-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <Link href="/signin">
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-md shadow-brand-primary/20 transition-all duration-300">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-gray-600 hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full py-6 bg-brand-primary text-white font-bold rounded-xl">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full py-6 border-brand-primary text-brand-primary font-bold rounded-xl">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}