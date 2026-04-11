import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Search, ShoppingCart, CreditCard, Truck } from 'lucide-react';

export default function HowFoodWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Find a Restaurant',
      description: 'Browse through thousands of restaurants and discover amazing cuisines in your area.',
      color: 'from-brand-primary to-brand-primary/70',
    },
    {
      number: 2,
      icon: ShoppingCart,
      title: 'Order What You Want',
      description: 'Explore menus, customize your order, and add your favorite dishes to cart.',
      color: 'from-brand-accent to-brand-accent/70',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Checkout & Payment',
      description: 'Choose your payment method - cash, card, or mobile wallet. Quick and secure.',
      color: 'from-brand-secondary to-brand-secondary/70',
    },
    {
      number: 4,
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Sit back and relax! Your food will be delivered to your doorstep in minutes.',
      color: 'from-brand-warning to-brand-warning/70',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              How FoodLab Works
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting your favorite food delivered is easy! Follow these simple steps.
            </p>
          </div>
        </Container>
      </Section>

      {/* Steps Section */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-brand-secondary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-primary/30"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-brand-secondary mb-4">
                  Ready to Order?
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join millions of happy customers who enjoy delicious food delivered right to their doorstep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/food-delivery"
                    className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors"
                  >
                    Order Now
                  </a>
                  <a
                    href="/download-apps"
                    className="inline-block bg-brand-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-secondary/90 transition-colors"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
