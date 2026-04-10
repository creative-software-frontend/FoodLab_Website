'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark' | 'icon';
  className?: string;
  linkClassName?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: {
    width: 100,
    height: 32,
    textSize: 'text-lg',
  },
  md: {
    width: 140,
    height: 40,
    textSize: 'text-xl',
  },
  lg: {
    width: 180,
    height: 52,
    textSize: 'text-2xl',
  },
};

export function Logo({ variant = 'dark', className, linkClassName, showText = true, size = 'md' }: LogoProps) {
  const logoSrc = variant === 'dark' ? '/logo-dark.svg' : '/logo.svg';
  const { width, height, textSize } = sizes[size];

  return (
    <Link href="/" className={cn('flex items-center gap-2 group', linkClassName)}>
      <div className={cn('relative', className)}>
        <Image
          src={logoSrc}
          alt="FoodLab Logo"
          width={width}
          height={height}
          className="object-contain transition-transform group-hover:scale-105"
          priority
        />
      </div>
    </Link>
  );
}