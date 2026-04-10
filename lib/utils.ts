import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Brand Color Utilities
export const brandColors = {
  primary: '#FF6B35',
  secondary: '#2D2F36',
  accent: '#4CAF50',
  warning: '#FFC107',
  error: '#FF4444',
  dark: '#1A1A1A',
  light: '#F5F5F5',
  gray: '#757575',
} as const

// Gradient Utilities
export const gradients = {
  primary: 'bg-gradient-brand',
  secondary: 'bg-gradient-brand-dark',
  accent: 'bg-gradient-to-r from-green-400 to-green-600',
  hero: 'bg-gradient-to-br from-orange-50 to-white',
} as const

// Typography Utilities
export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-semibold tracking-tight',
  h3: 'text-2xl md:text-3xl font-semibold',
  body: 'text-sm md:text-base leading-relaxed',
  caption: 'text-xs text-gray-500',
} as const