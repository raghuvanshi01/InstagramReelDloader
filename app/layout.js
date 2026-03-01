import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://instasaver.co.in'),
  title: {
    default: 'InstaSaver - Download Instagram Reels, Photos & Carousels Free',
    template: '%s | InstaSaver',
  },
  description:
    'Download Instagram Reels, Photos, and Carousels in HD quality. Free, fast, no watermark, no login required. Best Instagram video downloader online.',
  keywords: [
    'instagram reel download',
    'download instagram reel',
    'reel downloader',
    'instagram video downloader',
    'save instagram reels',
    'ig reel saver',
    'instagram photo download',
    'instagram carousel download',
    'download reels without watermark',
    'instagram downloader online',
    'instagram reel download online free',
    'insta saver',
    'instagram reel save',
    'reel download online',
    'instagram video save',
    'download ig reels',
    'best instagram downloader',
  ],
  openGraph: {
    title: 'InstaSaver - Best Free Instagram Reel Downloader',
    description:
      'Download Instagram Reels, Videos & Photos in HD. No watermark, no login required. Fast and free.',
    type: 'website',
    url: 'https://instasaver.co.in',
    siteName: 'InstaSaver',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaSaver - Download Instagram Reels Free',
    description:
      'Save Instagram Reels & Photos in HD. Fast, free, no watermark.',
  },
  alternates: {
    canonical: 'https://instasaver.co.in',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>{children}</body>
    </html>
  );
}
