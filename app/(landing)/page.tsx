'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Search,
  UtensilsCrossed,
  ShoppingBag,
  Flower2,
  Clock,
  Star,
  Navigation,
  Truck,
  TrendingUp,
  Smartphone,
  ChevronDown,
  ExternalLink,
  Store,
} from 'lucide-react';

import { FaGooglePlay, FaApple } from 'react-icons/fa';

// Restaurant data 
const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 50,
  },
  {
    id: 2,
    name: 'Burger House',
    cuisine: 'American, Burgers',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 40,
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese, Sushi',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 60,
  },
  {
    id: 4,
    name: 'Spice Garden',
    cuisine: 'Indian, Curry',
    rating: 4.7,
    deliveryTime: '35-45 min',
    deliveryFee: 45,
  },
  {
    id: 5,
    name: 'Noodle Bar',
    cuisine: 'Chinese, Noodles',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: 35,
  },
  {
    id: 6,
    name: 'Cafe Delight',
    cuisine: 'Cafe, Desserts',
    rating: 4.8,
    deliveryTime: '15-25 min',
    deliveryFee: 30,
  },
];

// Cities data
const cities = [
  { name: 'Dhaka', restaurants: '3.2k' },
  { name: 'Chattogram', restaurants: '3.5k' },
  { name: 'Narayanganj', restaurants: '1.8k' },
  { name: 'Sylhet', restaurants: '4.6k' },
  { name: 'Khulna', restaurants: '4.6k' },
  { name: 'Bogra', restaurants: '1.7k' },
  { name: 'Rajshahi', restaurants: '1.2k' },
  { name: 'Cumilla', restaurants: '0.6k' },
  { name: 'Mymensingh', restaurants: '0.7k' },
  { name: 'Tangail', restaurants: '0.9k' },
  { name: 'Gazipur', restaurants: '0.9k' },
  { name: "Cox's Bazar", restaurants: '2.5k' },
];

// Service tabs
const serviceTabs = [
  { id: 'delivery', label: 'Food Delivery', icon: Truck },
  { id: 'pickup', label: 'Pickup', icon: ShoppingBag },
  { id: 'flowers', label: 'Flowers', icon: Flower2 },
  { id: 'dinein', label: 'Dine-in', icon: UtensilsCrossed },
];

export default function LandingPage() {
  const [activeService, setActiveService] = useState('delivery');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo size="md" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-brand-secondary hover:text-brand-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/restaurants" className="text-brand-secondary hover:text-brand-primary transition-colors font-medium">
                Restaurants
              </Link>
              <Link href="/partner" className="text-brand-secondary hover:text-brand-primary transition-colors font-medium">
                Partner
              </Link>
              <Link href="/become-hero" className="text-brand-secondary hover:text-brand-primary transition-colors font-medium">
                Become a Hero
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden sm:flex">
                Sign In
              </Button>
              <Button className="bg-brand-primary hover:bg-brand-primary/90">
                Sign Up
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <Section background="white" className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary mb-6">
              Fast, Fresh & Right To Your Door
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Order dishes from favorite restaurants near you.
            </p>

            {/* Location Selector */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-secondary font-medium">Narayanganj, Bangladesh</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Search Bar - Fully responsive same height */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for food, restaurants..."
                  className="w-full pl-12 pr-4 border-2 border-gray-200 rounded-xl focus:border-brand-primary focus:outline-none transition-colors h-14 text-base"
                />
              </div>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 px-8 text-base font-semibold rounded-xl h-14">
                Find Food
              </Button>
            </div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveService(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeService === tab.id
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-white text-brand-secondary border-2 border-gray-200 hover:border-brand-primary'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Partner Section */}
      <Section background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              List Your Restaurant on FoodLab
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Would you like millions of new customers to enjoy your amazing food and groceries?
              Let's start our partnership today!
            </p>
            <Button className="bg-brand-secondary hover:bg-brand-secondary/90 px-8 py-6 text-lg font-semibold">
              Become a Partner
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hero (Rider) Section */}
      <Section background="brand">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Navigation className="w-10 h-10 text-brand-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
                Become A FoodLab Hero
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Are you a man of speed and a master of navigation? Become a FoodLab hero and earn up to
              25,000 TK each month while spreading joy to the doorsteps.
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-6 text-lg font-semibold">
              Become a Hero
            </Button>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Truck className="w-16 h-16 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
              Super fast Delivery
            </h2>
            <p className="text-lg text-gray-600">
              If faster than your cravings can blink, experience the super-fast delivery and get fresh food.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-primary transition-all hover:shadow-xl">
              <Clock className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Live Order Tracking</h3>
              <p className="text-gray-600">
                Track your order in real-time from restaurant to your doorstep with live updates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-primary transition-all hover:shadow-xl">
              <TrendingUp className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Average delivery time of 30 minutes or less, guaranteed fresh and hot.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-primary transition-all hover:shadow-xl">
              <Star className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Top Quality</h3>
              <p className="text-gray-600">
                Partnered with the best restaurants to ensure premium food quality.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Favorite Restaurants */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
              Your Favorite Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              Discover the best restaurants in your area
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                {/* ইমেজের জায়গায় প্লেসহোল্ডার */}
                <div className="relative h-48 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                  <Store className="w-16 h-16 text-brand-primary/50" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-brand-secondary">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">৳{restaurant.deliveryFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="px-8 py-6 text-lg font-semibold">
              View All Restaurants
            </Button>
          </div>
        </Container>
      </Section>

      {/* App Download Section */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto ">
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                    For better experience, Download the FoodLab app now
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Get exclusive deals, faster checkout, and real-time order tracking.
                  </p>
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
                      <div className="w-8 h-8 bg-gray-200 rounded-lg bg-brand-primary flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <FaApple className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 group-hover:text-white/70">Download on the</div>
                        <div className="font-semibold text-sm">App Store</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-brand-primary w-48 h-48 flex items-center justify-center rounded-2xl shadow-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Scan to Download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Delivery Cities Grid */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
              We deliver to:
            </h2>
            <p className="text-lg text-gray-600">
              Available in major cities across Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="bg-white p-6 rounded-xl hover:bg-brand-primary/5 transition-all cursor-pointer group border-2 border-gray-100 hover:border-brand-primary"
              >
                <h3 className="text-lg font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {city.restaurants} Restaurants
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
            >
              Show More 15 Cities
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>

    </div>
  );
}