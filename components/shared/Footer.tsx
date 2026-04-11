'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from './Container';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const companyLinks: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Press', href: '/press' },
  { label: 'How food works', href: '/how-it-works' },
  { label: 'Download apps', href: '/download' },
  { label: 'Careers', href: '/careers' },
  { label: 'Help & support', href: '/support' },
];

const servicesLinks: FooterLink[] = [
  { label: 'Food delivery', href: '/services/delivery' },
  { label: 'Pick-up', href: '/services/pickup' },
  { label: 'Flowers delivery', href: '/services/flowers' },
  { label: 'Super food subscription', href: '/services/subscription' },
  { label: 'Food deals', href: '/deals' },
  { label: 'Reward programmes', href: '/rewards' },
  { label: 'Terms Of Referral and Condition', href: '/terms/referral' },
];

const partnerLinks: FooterLink[] = [
  { label: 'Partner with us', href: '/partner' },
  { label: 'Ride with us', href: '/rider' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'Refund & cancellation', href: '/refund' },
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Rider Privacy policy', href: '/privacy/rider' },
  { label: 'Partner Privacy policy', href: '/privacy/partner' },
  { label: 'Security policy', href: '/security' },
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
    <footer className="bg-brand-secondary text-white">
      <Container maxWidth="2xl">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo & Description Section */}
            <div className="lg:col-span-1">
              <Logo variant="light" size="md" className="mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Order food from the best restaurants and shops with FoodLab Bangladesh. 
                Bangladesh&apos;s leading food delivery app with over 10,000+ restaurants 
                along with amazing deals and services.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hotline</p>
                    <a href="tel:+8801234567890" className="text-sm hover:text-brand-primary transition-colors">
                      +880 1234-567890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:support@foodlab.com" className="text-sm hover:text-brand-primary transition-colors">
                      support@foodlab.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Corporate Office</p>
                    <p className="text-sm text-gray-400">
                      House 123, Road 456<br />
                      Banani, Dhaka 1213<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Partners</h3>
              <ul className="space-y-3">
                {partnerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Apps (Additional Column) */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Download App</h3>
              <div className="space-y-3">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 hover:bg-brand-primary transition-colors rounded-lg p-3"
                >
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 hover:bg-brand-primary transition-colors rounded-lg p-3"
                >
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; Copyright 2026 FoodLab Express Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-brand-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-brand-primary transition-colors">
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
