import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Smartphone, QrCode, Star, Zap, MapPin } from 'lucide-react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function DownloadAppsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Download Our App
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the best food delivery experience on your mobile device
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* App Info */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Smartphone className="w-16 h-16 text-brand-primary mb-6" />
                  <h2 className="text-3xl font-bold text-brand-secondary mb-4">
                    Download FoodLab App
                  </h2>
                  <p className="text-gray-700 text-lg mb-8">
                    Download FoodLab app from Google Play Store or Apple App Store. Get exclusive deals, faster checkout, and real-time order tracking.
                  </p>

                  <div className="space-y-4 mb-8">
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-gray-100 hover:bg-brand-primary hover:text-white transition-colors rounded-xl p-4 group"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <FaGooglePlay className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 group-hover:text-white/70">Get it on</div>
                        <div className="font-bold text-lg">Google Play</div>
                      </div>
                    </a>

                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-gray-100 hover:bg-brand-primary hover:text-white transition-colors rounded-xl p-4 group"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <FaApple className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 group-hover:text-white/70">Download on the</div>
                        <div className="font-bold text-lg">App Store</div>
                      </div>
                    </a>
                  </div>

                  {/* QR Code */}
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <QrCode className="w-24 h-24 mx-auto mb-3 text-brand-secondary" />
                    <p className="text-sm text-gray-600">Scan to Download</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-secondary mb-6">Why Download Our App?</h3>
                
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-2">Exclusive Deals</h4>
                      <p className="text-gray-600">Get access to app-only discounts and special offers not available on web.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-2">Faster Checkout</h4>
                      <p className="text-gray-600">Save your payment details and order your favorite meals in just one tap.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-2">Real-time Tracking</h4>
                      <p className="text-gray-600">Track your order from restaurant to your doorstep with live updates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
