import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Crown, Star, Zap, Gift, TrendingUp } from 'lucide-react';

export default function SuperFoodSubscriptionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Super Food Subscription
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Subscribe to FoodLab Super and unlock premium benefits
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Subscribe to FoodLab Super and get unlimited free delivery, exclusive discounts, and special offers. Starting from just 299 TK/month. Save more with every order and enjoy VIP treatment from your favorite restaurants.
              </p>

              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-12 h-12 text-brand-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-secondary">FoodLab Super</h3>
                    <p className="text-3xl font-bold text-brand-primary">৳299/month</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, title: 'Unlimited Free Delivery', desc: 'No delivery fees on any order' },
                    { icon: Star, title: 'Exclusive Discounts', desc: 'Up to 25% off at partner restaurants' },
                    { icon: Gift, title: 'Special Offers', desc: 'Access to member-only deals' },
                    { icon: TrendingUp, title: 'Priority Support', desc: 'Get help faster with VIP support' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                        <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-secondary mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <a href="/" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors">
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    
    </div>
  );
}
