import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Auth Forms */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 relative">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          {children}
        </div>


      </div>

      {/* Right Side: Decorative Image & Branding */}
      <div className="hidden lg:flex flex-1 relative bg-brand-secondary overflow-hidden">
        <Image
          src="/auth-bg.png"
          alt="Premium Food"
          fill
          className="object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-[10s] ease-linear"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-20 left-20 right-20 text-white z-10 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Elevating Your <br />
            <span className="text-brand-primary">Dining Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-md leading-relaxed">
            Discover the finest local restaurants and get gourmet meals delivered straight to your doorstep.
          </p>

          <div className="mt-12 flex gap-4">
            <div className="w-12 h-1 bg-brand-primary rounded-full" />
            <div className="w-4 h-1 bg-white/30 rounded-full" />
            <div className="w-4 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
