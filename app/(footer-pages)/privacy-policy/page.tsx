import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-brand-primary" />
                <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  FoodLab Express Limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Name, email address, phone number, and delivery address</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Device information and usage data</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Process and deliver your orders</li>
                  <li>Communicate with you about your orders</li>
                  <li>Improve our services and user experience</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information with restaurant partners and delivery personnel solely for the purpose of fulfilling your orders.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or delete your personal information. Contact us at support@foodlab.com to exercise these rights.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Contact Us</h2>
                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700">
                    If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">support@foodlab.com</a>
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
