import { inter } from './ui/fonts';
import '@/app/ui/global.css';
import setupLocatorUI from '@locator/runtime';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === 'development') {
    setupLocatorUI();
  }
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
