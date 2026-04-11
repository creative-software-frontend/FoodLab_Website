import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { FileText } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Terms of service for using FoodLab platform
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-brand-primary" />
                <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Welcome to FoodLab. These Terms and Conditions govern your use of our platform, including our website and mobile applications. By accessing or using FoodLab services, you agree to be bound by these Terms.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By using our services, you agree to comply with and be bound by these terms. If you disagree with any part of the terms, you may not use our services.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. Use of Services</h2>
                <p className="text-gray-700 mb-4">
                  FoodLab provides a platform connecting customers with restaurants and delivery partners. You must be at least 18 years old to use our services.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Orders and Payments</h2>
                <p className="text-gray-700 mb-4">
                  All orders placed through our platform are subject to availability. Prices are displayed in Bangladeshi Taka (BDT). Payment must be made at the time of order or upon delivery.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Delivery</h2>
                <p className="text-gray-700 mb-4">
                  We strive to deliver orders within the estimated time, but delivery times may vary based on restaurant preparation, traffic, and weather conditions.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Cancellation and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  Orders can be cancelled within 2 minutes of placement. Refunds are processed according to our Refund Policy.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  FoodLab shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>

                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700">
                    <strong>Contact Us:</strong> If you have any questions about these Terms, please contact us at <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">support@foodlab.com</a>
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
