import type { Metadata } from 'next';
import {
  Luxurious_Script,
  Open_Sans,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  weight: ['400', '700'],
});

const openSans = Open_Sans({
  variable: '--font-openSans',
  weight: ['400', '600'],
});

const luxurious = Luxurious_Script({
  variable: '--font-luxurious',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'PatekPhilippe',
  description: '파텍필립 웹사이트',
  icons: {
    icon: './img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${openSans.variable} ${luxurious.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
