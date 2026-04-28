import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Visit Nepal | Futuristic Tourism Guide',
  description:
    'An immersive tourism guide to Nepal with itineraries, facts, destinations, food, culture, and travel planning insights.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
