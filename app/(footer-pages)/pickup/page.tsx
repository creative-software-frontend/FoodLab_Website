import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { ShoppingBag, Clock, CheckCircle, Zap } from 'lucide-react';

export default function PickupPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Skip the Wait',
      description: 'Order ahead and pick up when it\'s ready',
    },
    {
      icon: CheckCircle,
      title: 'Ready When You Are',
      description: 'Get notified when your order is prepared',
    },
    {
      icon: Zap,
      title: 'Quick & Easy',
      description: 'Simple checkout and payment process',
    },
    {
      icon: ShoppingBag,
      title: 'Contactless Pickup',
      description: 'Safe and convenient collection',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Pick-up Service
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Order online and pick up from your favorite restaurants
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Order online and pick up from your favorite restaurants. Skip the wait and get your food when it's ready. Perfect for when you're on the go or want to save on delivery fees.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-6">How Pick-up Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary mb-1">Browse & Order</h3>
                    <p className="text-gray-600">Choose your restaurant and select "Pick-up" at checkout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary mb-1">Wait for Notification</h3>
                    <p className="text-gray-600">We'll notify you when your order is ready for pickup</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary mb-1">Pick Up & Enjoy</h3>
                    <p className="text-gray-600">Head to the restaurant and collect your order</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/"
                className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors"
              >
                Order for Pickup
              </a>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
