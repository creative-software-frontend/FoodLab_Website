# 🍔 FoodLab - Food Delivery Marketplace

<div align="center">
  <img src="/public/logo.png" alt="FoodLab Logo" width="200" />
  <h3>Fast, Fresh & Right To Your Door</h3>
  <p>Bangladesh's leading food delivery platform with 10,000+ restaurants</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4)](https://tailwindcss.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-5-2D3748)](https://prisma.io/)
</div>

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Brand Colors](#brand-colors)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 About the Project

**FoodLab** is a modern, full-stack food delivery marketplace built with Next.js 15. It connects customers with their favorite restaurants, offering super-fast delivery, real-time order tracking, and a seamless user experience.

### Key Highlights:

- 🚀 **10,000+ Restaurants** partnered across Bangladesh
- ⚡ **Super-fast delivery** within 30 minutes
- 📱 **Mobile-first** responsive design
- 🎨 **Modern UI** with smooth animations
- 🔒 **Secure authentication** (Mobile/Email/Google)
- 💳 **Multiple payment options** (COD, bKash, Cards)

---

## ✨ Features

### 🏠 Landing Page
| Feature | Description |
|---------|-------------|
| Hero Section | Headline, subheadline, location selector |
| Search Bar | Search for food, restaurants, dishes |
| Service Tabs | Delivery, Pickup, Flowers, Dine-in |
| Partner Section | Restaurant partnership CTA |
| Rider Section | Delivery hero recruitment |
| Features Section | Super fast delivery, live tracking |
| Restaurants Grid | 6 featured restaurant cards |
| App Download | Google Play & App Store buttons with QR |
| Cities Grid | 12+ delivery cities with restaurant counts |

### 🍽️ Marketplace
| Feature | Description |
|---------|-------------|
| Restaurant Listing | Grid view of all restaurants |
| Search | Search by name, cuisine, dish |
| Filters | Sort by distance, rating, popularity |
| Meal Type | Breakfast, Lunch, Snacks, Dinner |
| Delivery Time | Filter by time (0-100 min) |
| Cuisine Filter | Biryani, Burger, Pizza, Chicken, etc. |

### 📱 Restaurant Details
| Feature | Description |
|---------|-------------|
| Restaurant Info | Name, rating, delivery fee, opening hours |
| Menu | Categorized menu items |
| Item Variations | Size options (250gm, 500gm, 1kg) |
| Add to Cart | Quantity selector, cart management |
| Pre-order | Date & time picker for future orders |
| Frequently Bought | Bundle recommendations |

### 🛒 Order Management
| Feature | Description |
|---------|-------------|
| Cart | Zustand state management with persist |
| Checkout | Order summary, address management |
| Order Tracking | Real-time order status |
| Order History | Past orders list |

### 👤 Authentication
| Feature | Description |
|---------|-------------|
| Sign In | Mobile number, Email, Google |
| Sign Up | Registration with OTP verification |
| Protected Routes | Auth middleware |

### 🤝 Partner Programs
| Page | Description |
|------|-------------|
| Become a Partner | Restaurant onboarding form |
| Become a Hero | Rider application form |

### 📄 Information Pages (22 Pages)
| Category | Pages |
|----------|-------|
| Company | About, Contact, Press, Careers |
| Services | Food Delivery, Pickup, Flowers, Subscription, Deals, Rewards |
| How It Works | Step-by-step guide, Download Apps |
| Legal | Terms, Privacy, Refund, Security |
| Partner | Partner With Us, Ride With Us |
| Policies | Rider Privacy, Partner Privacy, Security Policy |

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 15 (App Router) | React framework with SSR |
| **Language** | TypeScript | 5 | Type safety |
| **Styling** | Tailwind CSS | 4 | Utility-first CSS |
| **UI Components** | Shadcn/ui | Latest | Accessible components |
| **State Management** | Zustand | Latest | Client state + persist |
| **Server State** | TanStack Query | Latest | Data fetching & caching |
| **Forms** | React Hook Form | Latest | Form handling |
| **Validation** | Zod | Latest | Schema validation |
| **Icons** | Lucide React | Latest | Icon library |
| **Icons** | React Icons | Latest | Social media icons |
| **Animations** | Framer Motion | Latest | Smooth animations |
| **Date/Time** | React Day Picker | Latest | Date selection |
| **Notifications** | React Hot Toast | Latest | Toast notifications |
| **Database** | PostgreSQL | 15 | Relational database |
| **ORM** | Prisma | 5 | Type-safe database queries |
| **Authentication** | NextAuth.js | Latest | Auth provider |
| **HTTP Client** | Axios | Latest | API requests |
| **Payment** | SSLCommerz | - | Bangladesh payment gateway |

---


