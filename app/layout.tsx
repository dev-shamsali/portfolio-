import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | MERN Stack Developer',
  description: 'Portfolio of a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB. Full-stack web applications and modern UI/UX.',
  keywords: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'Full Stack Developer', 'Web Development'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe | MERN Stack Developer',
    description: 'Portfolio of a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.',
    type: 'website',
    // TODO: Replace with your actual domain
    url: 'https://yourportfolio.vercel.app',
    // TODO: Replace with your actual Open Graph image
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - MERN Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | MERN Stack Developer',
    description: 'Portfolio of a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.',
    // TODO: Replace with your Twitter handle
    creator: '@yourtwitterhandle',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}

