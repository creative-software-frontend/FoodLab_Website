import { cn } from '@/lib/utils';
import { Container } from '../shared/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'brand' | 'gradient';
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  brand: 'bg-brand-primary/5',
  gradient: 'bg-gradient-to-b from-white to-orange-50',
};

export function Section({ children, className, containerClassName, background = 'white' }: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', backgrounds[background], className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}