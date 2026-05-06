'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <div className="mb-10 text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Create Account</h1>
        <p className="text-gray-500 text-lg">Join the FoodLab community today</p>
      </div>

      <form className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            <input
              type="text"
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
              required
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Mobile Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            <input
              type="tel"
              maxLength={11}
              placeholder="01XXXXXXXXX"
              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-3 py-2 px-1">
          <button
            type="button"
            onClick={() => setAgreed(!agreed)}
            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
              agreed ? 'bg-brand-primary border-brand-primary' : 'border-gray-200 bg-white'
            }`}
          >
            {agreed && <CheckCircle2 className="w-4 h-4 text-white" />}
          </button>
          <span className="text-sm text-gray-500 font-medium">
            I agree to the <Link href="/terms" className="text-brand-primary font-bold hover:underline">Terms</Link> and <Link href="/privacy" className="text-brand-primary font-bold hover:underline">Privacy Policy</Link>
          </span>
        </div>

        <Button 
          disabled={!agreed}
          className={`w-full py-7 text-white rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 group transition-all duration-300 transform active:scale-[0.98] ${
            agreed 
              ? 'bg-brand-primary hover:bg-brand-primary/90 shadow-brand-primary/20' 
              : 'bg-gray-300 cursor-not-allowed shadow-none'
          }`}
        >
          Create Account
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-500 font-medium">
          Already have an account?{' '}
          <Link href="/signin" className="text-brand-primary font-bold hover:underline underline-offset-4 decoration-2">
            Sign In Instead
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
