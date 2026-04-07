import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abetnego Kristiawan — WordPress & Web Developer',
  description:
    'Portfolio of Abetnego Kristiawan Takaredase — WordPress developer with 5+ years of experience in custom themes, plugins, and performance optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
