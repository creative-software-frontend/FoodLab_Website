import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Newspaper, Mail } from 'lucide-react';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Press & Media
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FoodLab in the news - Stay updated with our latest announcements
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Newspaper className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-secondary mb-4">About FoodLab</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    FoodLab has been featured in leading publications for revolutionizing food delivery in Bangladesh. Our innovative approach to connecting restaurants with customers has set new standards in the industry.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl p-8 mt-8">
                <h3 className="text-xl font-bold text-brand-secondary mb-4">Press Inquiries</h3>
                <p className="text-gray-700 mb-6">
                  For press inquiries, please contact our media relations team. We're happy to provide information, interviews, and press materials.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email us at</p>
                    <a href="mailto:press@foodlab.com" className="text-xl font-semibold text-brand-primary hover:underline">
                      press@foodlab.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-brand-secondary mb-6">Media Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-brand-secondary mb-2">Press Kit</h4>
                    <p className="text-sm text-gray-600">Download logos, brand guidelines, and company information</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-brand-secondary mb-2">News Releases</h4>
                    <p className="text-sm text-gray-600">Latest announcements and company updates</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-brand-secondary mb-2">Media Coverage</h4>
                    <p className="text-sm text-gray-600">Featured articles and interviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
