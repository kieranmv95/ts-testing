import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home | TS',
  description: 'TS Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white py-4">{children}</body>
    </html>
  );
}
