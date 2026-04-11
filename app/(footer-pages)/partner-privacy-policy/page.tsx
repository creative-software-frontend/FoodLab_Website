import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Shield, Store } from 'lucide-react';

export default function PartnerPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Partner Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Privacy policy for restaurant partners
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This Partner Privacy Policy explains how FoodLab collects, uses, and protects the information of our restaurant and business partners.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect the following information from our partners:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Business name, registration, and license information</li>
                  <li>Owner/manager contact details</li>
                  <li>Bank account information for settlements</li>
                  <li>Menu items, pricing, and availability data</li>
                  <li>Sales and performance metrics</li>
                  <li>Customer feedback and ratings</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use partner information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Verify business legitimacy and compliance</li>
                  <li>Process payments and settlements</li>
                  <li>Display your restaurant on our platform</li>
                  <li>Provide analytics and insights</li>
                  <li>Improve platform features</li>
                  <li>Communicate updates and promotions</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Data Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share your business information with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Customers (restaurant name, menu, ratings)</li>
                  <li>Delivery partners (for order fulfillment)</li>
                  <li>Payment processors (for transactions)</li>
                  <li>Regulatory authorities (when required by law)</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We use industry-standard security measures to protect your business data, including encryption and access controls.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Analytics and Reporting</h2>
                <p className="text-gray-700 mb-4">
                  We provide you with detailed analytics about your performance, customer preferences, and sales trends to help grow your business.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Contact Us</h2>
                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:partner-support@foodlab.com" className="text-brand-primary hover:underline">partner-support@foodlab.com</a>
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
