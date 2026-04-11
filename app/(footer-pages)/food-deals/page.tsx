import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Tag, Percent, TrendingDown, Clock } from 'lucide-react';

export default function FoodDealsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Food Deals & Offers
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover amazing deals and save on your favorite meals
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Discover amazing deals and discounts from top restaurants. Save up to 50% on your favorite meals. We update our offers daily so there's always something delicious at a great price!
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Percent, title: 'Up to 50% Off', desc: 'Massive discounts at selected restaurants', color: 'from-brand-primary to-brand-primary/70' },
                  { icon: Tag, title: 'Daily Deals', desc: 'New offers added every day', color: 'from-brand-accent to-brand-accent/70' },
                  { icon: TrendingDown, title: 'Combo Offers', desc: 'Save more with meal combos', color: 'from-brand-secondary to-brand-secondary/70' },
                  { icon: Clock, title: 'Flash Sales', desc: 'Limited-time offers you don\'t want to miss', color: 'from-brand-warning to-brand-warning/70' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-xl`}>
                      <Icon className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Pro Tip</h3>
                <p className="text-gray-700">Subscribe to FoodLab Super for exclusive deals and unlimited free delivery!</p>
              </div>
            </div>

            <div className="text-center">
              <a href="/" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors">
                Browse Deals
              </a>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
