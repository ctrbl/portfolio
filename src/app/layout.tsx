import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

const title = 'Chau Nguyen | Personal Portfolio';
const description =
  'A Computer Science student looking for Full-time SWE position!';
const url = 'https://minhchau.me';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Software Developer',
    'Mobile Developer',
  ],
  creator: 'Chau Nguyen',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // openGraph: {
  //   type: 'website',
  //   url,
  //   title,
  //   description,
  //   siteName: title,
  //   images: [
  //     {
  //       url: '/images/open-graph-chau.png',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title,
  //   description,
  //   creator: '@ctrbl',
  //   images: '/images/open-graph-chau.png',
  // },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {/* <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}> */}
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <Providers>
          <ActiveSectionContextProvider>
            <Header />
            <main className="flex min-h-screen max-w-screen w-full flex-col">{children}</main>
            <Footer />
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}


