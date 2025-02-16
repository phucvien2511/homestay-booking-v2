import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Homestay Booking',
  description: 'Homestay Booking v2',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="geist antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
