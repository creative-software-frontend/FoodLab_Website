import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Store, TrendingUp, Users, Globe, Megaphone } from 'lucide-react';

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Partner With Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              List your restaurant on FoodLab and reach millions of customers
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                List your restaurant on FoodLab and reach millions of customers. Join our growing network of 10,000+ restaurants and grow your business with Bangladesh&apos;s leading food delivery platform.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Store, title: 'Increase Revenue', desc: 'Reach 3x more customers with online delivery' },
                  { icon: TrendingUp, title: 'Grow Your Business', desc: 'Access data insights and marketing tools' },
                  { icon: Users, title: 'Millions of Users', desc: 'Connect with active food lovers in your area' },
                  { icon: Globe, title: 'Wide Coverage', desc: 'Available in 12+ cities across Bangladesh' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl">
                      <Icon className="w-10 h-10 text-brand-primary mb-4" />
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/80 text-white rounded-xl p-8 text-center">
                <Megaphone className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">Join FoodLab today and start reaching more customers</p>
                <a href="/contact" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors">
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
