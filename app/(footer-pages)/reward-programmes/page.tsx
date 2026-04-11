import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Award, Gift, Coins, Star, TrendingUp } from 'lucide-react';

export default function RewardProgrammesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Reward Programmes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Earn points and redeem them for amazing rewards
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Earn points on every order and redeem them for discounts, free meals, and exclusive perks. The more you order, the more you save! Join our loyalty program and start earning today.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Coins, title: 'Earn Points', desc: 'Get 10 points for every 100 TK spent' },
                  { icon: Gift, title: 'Redeem Rewards', desc: 'Use points for discounts and free meals' },
                  { icon: Star, title: 'VIP Perks', desc: 'Unlock exclusive benefits as you level up' },
                  { icon: TrendingUp, title: 'Bonus Points', desc: 'Earn extra points on special promotions' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-brand-warning/10 to-brand-warning/5 p-6 rounded-xl">
                      <Icon className="w-10 h-10 text-brand-warning mb-4" />
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white rounded-xl p-8 text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Join FoodLab Rewards Today!</h3>
                <p className="text-white/90 mb-6">Start earning points with your very first order</p>
                <a href="/" className="inline-block bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Order Now & Earn Points
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
