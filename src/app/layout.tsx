import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'T.H. Plumbing & Heating Hub',
  description:
    'Trusted Plumbing Solutions for Your Home or Business in Central Massachusetts.',
  keywords: 'plumbing, heating, furnace, boiler, faucet, installation, repair, Gas Piping, leak, water, home, business, residential, commercial, service, local, free estimates, Holden, Princeton'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >

         {children}
       
     
        
        <Toaster />
      </body>
    </html>
  );
}
