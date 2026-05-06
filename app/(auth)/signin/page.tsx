'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Lock, Eye, EyeOff, ArrowRight, ChevronLeft, ShieldCheck, Smartphone } from 'lucide-react';

type AuthView = 'login' | 'forgot-password';
type LoginMethod = 'email' | 'mobile';
type MobileLoginStep = 'input-number' | 'verify-otp';
type ForgotStep = 'input-mobile' | 'verify-otp' | 'reset-password';

export default function SignInPage() {
  const [view, setView] = useState<AuthView>('login');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
  const [mobileLoginStep, setMobileLoginStep] = useState<MobileLoginStep>('input-number');
  const [forgotStep, setForgotStep] = useState<ForgotStep>('input-mobile');
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {view === 'login' ? (
          <motion.div
            key="login-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mb-10 text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Welcome Back</h1>
              <p className="text-gray-500 text-lg">Sign in to continue your journey with FoodLab</p>
            </div>

            {/* Method Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-2xl mb-8">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                  loginMethod === 'email' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button
                onClick={() => setLoginMethod('mobile')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                  loginMethod === 'mobile' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Phone className="w-4 h-4" />
                Mobile
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {loginMethod === 'email' ? (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                      <input
                        type="email"
                        placeholder="hello@foodlab.com"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-sm font-semibold text-gray-700">Password</label>
                      <button 
                        type="button"
                        onClick={() => setView('forgot-password')}
                        className="text-xs font-bold text-brand-primary hover:text-brand-primary/80 transition-colors"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="w-full pl-12 pr-12 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
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
                  <Button className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group transition-all duration-300 transform active:scale-[0.98]">
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                /* Mobile Login Flow - Updated as per request */
                <div className="space-y-5">
                  <AnimatePresence mode="wait">
                    {mobileLoginStep === 'input-number' ? (
                      <motion.div
                        key="mb-input"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 ml-1">Mobile Number</label>
                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                            <input
                              type="tel"
                              maxLength={11}
                              placeholder="01XXXXXXXXX"
                              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
                            />
                          </div>
                        </div>
                        <Button 
                          onClick={() => setMobileLoginStep('verify-otp')}
                          className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group transition-all transform active:scale-[0.98]"
                        >
                          Send OTP
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mb-otp"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="text-center space-y-4">
                          <button 
                            onClick={() => setMobileLoginStep('input-number')}
                            className="text-xs font-bold text-gray-400 hover:text-brand-primary flex items-center gap-1"
                          >
                             <ChevronLeft className="w-3 h-3" /> Change Number
                          </button>
                          <p className="text-gray-600 font-medium px-4">Enter the 6-digit code sent to your mobile</p>
                          <div className="flex justify-center gap-2 sm:gap-3">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-10 h-14 sm:w-12 sm:h-16 text-center bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all font-bold text-2xl text-brand-primary"
                              />
                            ))}
                          </div>
                        </div>
                        <Button className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 transition-all transform active:scale-[0.98]">
                          Sign In
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </form>

            <div className="mt-10 text-center">
              <p className="text-gray-500 font-medium">
                New to FoodLab?{' '}
                <Link href="/signup" className="text-brand-primary font-bold hover:underline underline-offset-4 decoration-2">
                  Create an account
                </Link>
              </p>
            </div>
          </motion.div>
        ) : (
          /* Forgot Password View - Updated with BD format */
          <motion.div
            key="forgot-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div>
              <button 
                onClick={() => setView('login')}
                className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-primary transition-colors mb-6 group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Sign In
              </button>
              <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Reset Password</h1>
              <p className="text-gray-500 text-lg">We'll help you get back into your account</p>
            </div>

            <AnimatePresence mode="wait">
              {forgotStep === 'input-mobile' && (
                <motion.div
                  key="step-mobile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Mobile Number</label>
                    <div className="relative group">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                      <input
                        type="tel"
                        maxLength={11}
                        placeholder="01XXXXXXXXX"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
                      />
                    </div>
                  </div>
                  <Button 
                    onClick={() => setForgotStep('verify-otp')}
                    className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 transition-all transform active:scale-[0.98]"
                  >
                    Send Verification Code
                  </Button>
                </motion.div>
              )}

              {forgotStep === 'verify-otp' && (
                <motion.div
                  key="step-otp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full text-brand-primary mb-2">
                       <ShieldCheck className="w-8 h-8" />
                    </div>
                    <p className="text-gray-600 font-medium px-4">Enter the 6-digit code sent to your mobile</p>
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-10 h-14 sm:w-12 sm:h-16 text-center bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all font-bold text-2xl text-brand-primary"
                        />
                      ))}
                    </div>
                    <button className="text-sm font-bold text-brand-primary hover:underline">
                      Resend Code
                    </button>
                  </div>
                  <Button 
                    onClick={() => setForgotStep('reset-password')}
                    className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 transition-all transform active:scale-[0.98]"
                  >
                    Verify Code
                  </Button>
                </motion.div>
              )}

              {forgotStep === 'reset-password' && (
                <motion.div
                  key="step-reset"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Old Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">New Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-gray-900 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setView('login')}
                    className="w-full py-7 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 transition-all transform active:scale-[0.98]"
                  >
                    Update Password & Sign In
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
