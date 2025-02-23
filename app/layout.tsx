import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { HeroProviders } from '../provider/HeroProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Homestay Booking',
  description: 'Homestay Booking v2',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="geist antialiased">
        <HeroProviders>
          {children}
          <Footer />
        </HeroProviders>
      </body>
    </html>
  );
}
