import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Building2, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about FoodLab and our mission to revolutionize food delivery in Bangladesh
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                FoodLab Express Limited, Food Tech Company of the US Bangladesh Group, a prominent player in the Aviation Sector, Real Estate, E-Commerce, Fashion, Technology, Education, Logistics, and Courier service, was established in 2022 and commercially launched in 2024. Our passion for food is evident as we bring a diverse range of cuisines right to your doorstep. With over 10,000+ restaurants and a selection of over 100,000+ items, a simple tap on our app unleashes a world of culinary delights. Whether you're a fan of local delicacies like Biryani, Kachchi, Khichuri, or Paneer, we've got you covered. Our dedicated team ensures that every dish is not just delicious but also visually appealing.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl">
                  <Building2 className="w-12 h-12 text-brand-primary mb-4" />
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Our Company</h3>
                  <p className="text-gray-600">
                    Part of US Bangladesh Group, a diversified conglomerate with presence across multiple industries.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-xl">
                  <Users className="w-12 h-12 text-brand-accent mb-4" />
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Our Team</h3>
                  <p className="text-gray-600">
                    Dedicated professionals working tirelessly to bring you the best food delivery experience.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 p-6 rounded-xl">
                  <Target className="w-12 h-12 text-brand-secondary mb-4" />
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To connect food lovers with the best restaurants and deliver joy to every doorstep.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-warning/10 to-brand-warning/5 p-6 rounded-xl">
                  <Award className="w-12 h-12 text-brand-warning mb-4" />
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Our Achievement</h3>
                  <p className="text-gray-600">
                    10,000+ restaurants, 100,000+ menu items, and millions of happy customers served.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
