import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Truck, Clock, Star, MapPin } from 'lucide-react';

export default function FoodDeliveryPage() {
  const features = [
    {
      icon: Truck,
      title: 'Super-Fast Delivery',
      description: 'Average delivery time of just 30 minutes',
      color: 'from-brand-primary to-brand-primary/70',
    },
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Track your order from restaurant to doorstep',
      color: 'from-brand-accent to-brand-accent/70',
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Food arrives hot, fresh, and delicious',
      color: 'from-brand-warning to-brand-warning/70',
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Available in 12+ cities across Bangladesh',
      color: 'from-brand-secondary to-brand-secondary/70',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Food Delivery Service
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get your favorite meals delivered fast and fresh to your doorstep
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
                Get your favorite meals delivered fast and fresh. Our super-fast delivery service ensures your food arrives hot and on time. Average delivery time: 30 minutes.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-brand-secondary mb-4">
                Ready to Order?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Browse thousands of restaurants and order your favorite meals now!
              </p>
              <a
                href="/"
                className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
