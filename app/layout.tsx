import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import LiveChat from "@/components/LiveChat";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://idisplay.com.tr'),
  title: {
    default: 'iDisplay - Profesyonel Dijital Çözümler',
    template: '%s | iDisplay'
  },
  description: 'iDisplay - Profesyonel dijital ekran çözümleri, LED ekranlar, interaktif kiosk sistemleri ve dijital tabela hizmetleri.',
  keywords: ['dijital ekran', 'LED ekran', 'interaktif kiosk', 'dijital tabela', 'profesyonel ekran çözümleri', 'iDisplay'],
  authors: [{ name: 'iDisplay' }],
  creator: 'iDisplay',
  publisher: 'iDisplay',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://idisplay.com.tr',
    siteName: 'iDisplay',
    title: 'iDisplay - Profesyonel Dijital Çözümler',
    description: 'Profesyonel dijital ekran çözümleri, LED ekranlar, interaktif kiosk sistemleri ve dijital tabela hizmetleri.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iDisplay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iDisplay - Profesyonel Dijital Çözümler',
    description: 'Profesyonel dijital ekran çözümleri, LED ekranlar, interaktif kiosk sistemleri ve dijital tabela hizmetleri.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
