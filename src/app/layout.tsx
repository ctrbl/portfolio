import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

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


