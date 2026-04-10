'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { width: 100, height: 32, textSize: 'text-lg' },
  md: { width: 140, height: 40, textSize: 'text-xl' },
  lg: { width: 180, height: 52, textSize: 'text-2xl' },
};

export function Logo({ variant = 'dark', className = '', showText = true, size = 'md' }: LogoProps) {
  const { width, height, textSize } = sizes[size];
  

  const logoSrc = '/FoodLabLogo.png'; 
  
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative">
        <Image
          src={logoSrc}
          alt="FoodLab Logo"
          width={width}
          height={height}
          className="object-contain transition-transform group-hover:scale-105"
          priority
        />
      </div>
      {/* {showText && (
        <span className={`font-bold text-brand-primary ${textSize}`}>
          FoodLab
        </span>
      )} */}
    </Link>
  );
}