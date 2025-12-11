/**
 * Root Layout for Client Web App 1
 * Tangerine Navigator Theme
 */

import './globals.css';
import '../styles/tangerine-navigator-theme.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Web - Tangerine Navigator',
  description: 'Navigate your business with precision and confidence',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
