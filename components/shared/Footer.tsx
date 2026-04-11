'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from './Container';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

// Company Links
const companyLinks: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Press', href: '/press' },
  { label: 'How food works', href: '/how-food-works' },
  { label: 'Download apps', href: '/download-apps' },
  { label: 'Careers', href: '/careers' },
  { label: 'Help & support', href: '/help-support' },
];

// Services Links 
const servicesLinks: FooterLink[] = [
  { label: 'Food delivery', href: '/food-delivery' },
  { label: 'Pick-up', href: '/pickup' },
  { label: 'Flowers delivery', href: '/flowers-delivery' },
  { label: 'Super food subscription', href: '/super-food-subscription' },
  { label: 'Food deals', href: '/food-deals' },
  { label: 'Reward programmes', href: '/reward-programmes' },
  { label: 'Terms Of Referral', href: '/terms-of-referral' },
];

// Partners Links
const partnerLinks: FooterLink[] = [
  { label: 'Partner with us', href: '/partner-with-us' },
  { label: 'Ride with us', href: '/ride-with-us' },
  { label: 'Terms & conditions', href: '/terms-conditions' },
  { label: 'Refund & cancellation', href: '/refund-cancellation' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Rider Privacy policy', href: '/rider-privacy-policy' },
  { label: 'Partner Privacy policy', href: '/partner-privacy-policy' },
  { label: 'Security policy', href: '/security-policy' },
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/8801234567890', label: 'WhatsApp' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container maxWidth="2xl">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

            {/* Column 1: Logo & Info */}
            <div className="lg:col-span-3">
              <Logo variant="dark" size="md" className="mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Order food from the best restaurants and shops with FoodLab Bangladesh.
                Bangladesh's leading food delivery app with over 10,000+ restaurants.
              </p>

              {/* Social Icons - No emoji */}
              <div className="mb-4">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Follow Us</h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white hover:scale-110 transition-all duration-300 text-gray-500"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info - No emoji */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <a href="tel:+8801234567890" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">
                    +880 1234-567890
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <a href="mailto:support@foodlab.com" className="text-sm text-gray-500 hover:text-brand-primary transition-colors">
                    support@foodlab.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    House 123, Road 456, Banani, Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-brand-secondary font-semibold text-base mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services Links - Single column (no grid) */}
            <div className="lg:col-span-2">
              <h3 className="text-brand-secondary font-semibold text-base mb-4">Services</h3>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Partners Links */}
            <div className="lg:col-span-2">
              <h3 className="text-brand-secondary font-semibold text-base mb-4">Partners</h3>
              <ul className="space-y-2">
                {partnerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Download App */}
            <div className="lg:col-span-3">
              <h3 className="text-brand-secondary font-semibold text-base mb-4">Download App</h3>
              <div className="space-y-3">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-100 hover:bg-brand-primary hover:text-white transition-colors rounded-lg p-3 group"
                >
                  {/* Google Play Icon */}
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <FaGooglePlay className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 group-hover:text-white/70">Get it on</div>
                    <div className="font-semibold text-sm">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-100 hover:bg-brand-primary hover:text-white transition-colors rounded-lg p-3 group"
                >
                  {/* Apple App Store Icon */}
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <FaApple className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 group-hover:text-white/70">Download on the</div>
                    <div className="font-semibold text-sm">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; Copyright 2026 FoodLab Express Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-brand-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-brand-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-brand-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}