'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              Sign In
            </Button>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
              Sign Up
            </Button>
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
                  className="text-gray-600 hover:text-brand-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full border-brand-primary text-brand-primary">
                  Sign In
                </Button>
                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}