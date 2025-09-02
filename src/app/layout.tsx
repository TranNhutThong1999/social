import type { Metadata, Viewport } from 'next';
import RootLayoutTemplate from '../components/templates/RootLayoutTemplate';
import './globals.css';

export const metadata: Metadata = {
  title: 'Personal Blog - Modern Blog Application',
  description:
    'Modern blog application built with Next.js, React and TypeScript',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutTemplate>{children}</RootLayoutTemplate>;
}
