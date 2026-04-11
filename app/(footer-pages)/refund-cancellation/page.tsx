import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { RefreshCcw } from 'lucide-react';

export default function RefundCancellationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our refund and cancellation process
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCcw className="w-8 h-8 text-brand-primary" />
                <p className="text-gray-700 text-lg">Customer satisfaction is our priority. We want to ensure you have a great experience with FoodLab.</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Cancellation Policy</h2>
                <p className="text-gray-700 mb-4">
                  You can cancel your order within 2 minutes of placing it without any charges. After 2 minutes, the restaurant may have already started preparing your order, and cancellation may not be possible.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Refund Eligibility</h2>
                <p className="text-gray-700 mb-4">
                  Refunds are processed in the following cases:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Order was cancelled by the restaurant</li>
                  <li>Order was not delivered</li>
                  <li>Wrong items were delivered</li>
                  <li>Items were missing from the order</li>
                  <li>Food quality issues (with photographic evidence)</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Refund Process</h2>
                <p className="text-gray-700 mb-4">
                  Refunds are processed within 5-7 business days. The amount will be credited back to your original payment method.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">How to Request a Refund</h2>
                <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Go to &quot;My Orders&quot; in the app</li>
                  <li>Select the order you want a refund for</li>
                  <li>Click &quot;Request Refund&quot;</li>
                  <li>Provide details and photos if applicable</li>
                  <li>Our support team will review and process your request</li>
                </ol>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Contact Support</h2>
                <p className="text-gray-700 mb-4">
                  For any refund-related queries, please contact our 24/7 support team:
                </p>
                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">support@foodlab.com</a></p>
                  <p className="text-gray-700"><strong>Hotline:</strong> <a href="tel:+8801234567890" className="text-brand-primary hover:underline">+880 1234-567890</a></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
