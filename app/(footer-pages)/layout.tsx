import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'FoodLab - Food Delivery in Bangladesh',
    template: '%s | FoodLab',
  },
  description: 'Order food from the best restaurants and shops with FoodLab Bangladesh',
};

export default function FooterPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
