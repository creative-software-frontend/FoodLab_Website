import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Bike, Wallet, Clock, MapPin, Star } from 'lucide-react';

export default function RideWithUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Ride With Us (Become a Delivery Hero)
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our delivery fleet and earn up to 25,000 TK per month
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Join our delivery fleet and earn up to 25,000 TK per month. Flexible hours, good earnings, and be your own boss. Become a FoodLab Hero and bring joy to customers doorsteps while earning a great income.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Wallet, title: 'Good Earnings', desc: 'Earn up to 25,000 TK/month with incentives' },
                  { icon: Clock, title: 'Flexible Hours', desc: 'Work when you want, be your own boss' },
                  { icon: MapPin, title: 'Your Area', desc: 'Deliver in areas you know best' },
                  { icon: Star, title: 'Bonus Rewards', desc: 'Extra bonuses for top performers' },
                  { icon: Bike, title: 'Easy to Start', desc: 'Just need a bike and smartphone' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-xl">
                      <Icon className="w-10 h-10 text-brand-accent mb-4" />
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white rounded-xl p-8 text-center">
                <Bike className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Ready to Become a Hero?</h3>
                <p className="text-white/90 mb-6">Sign up today and start earning this week!</p>
                <a href="/contact" className="inline-block bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
