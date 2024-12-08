import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TS - Testing',
  description: 'Te - Testing Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
