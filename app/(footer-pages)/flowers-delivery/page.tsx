import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Flower2, Heart, Truck, Gift } from 'lucide-react';

export default function FlowersDeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Flowers Delivery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Send beautiful flowers to your loved ones on special occasions
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Send beautiful flowers to your loved ones on special occasions. We deliver fresh flowers across all major cities in Bangladesh. Whether it's a birthday, anniversary, Valentine's Day, or just to say &quot;I care,&quot; our curated flower arrangements are perfect for any moment.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Flower2, title: 'Fresh Flowers', desc: 'Hand-picked daily for maximum freshness' },
                  { icon: Heart, title: 'Beautiful Arrangements', desc: 'Designed by expert florists' },
                  { icon: Truck, title: 'Same Day Delivery', desc: 'Order before 2 PM for same-day delivery' },
                  { icon: Gift, title: 'Gift Options', desc: 'Add chocolates, cakes, and cards' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-6 rounded-xl">
                      <Icon className="w-10 h-10 text-pink-500 mb-4" />
                      <h3 className="font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <a href="/" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors">
                Send Flowers Now
              </a>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
