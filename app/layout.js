import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://instasaver.co.in'),
  title: {
    default: 'Instagram Reels & Stories Downloader Without Watermark – Free HD Online Tool',
    template: '%s | InstaSaver – Free Instagram Downloader',
  },
  description:
    'Download Instagram Reels & Stories without watermark in full HD quality. Save Instagram videos, stories, photos, highlights & carousels instantly. 100% free, no login, no signup. Fastest Instagram downloader online.',
  keywords: [
    'instagram reels downloader',
    'instagram reels downloader without watermark',
    'download instagram reels',
    'instagram reel download',
    'reel downloader',
    'instagram video downloader',
    'save instagram reels',
    'instagram downloader online free',
    'download reels without watermark',
    'instagram reel download online free',
    'instagram photo download',
    'instagram highlights download',
    'instagram carousel download',
    'instagram stories downloader',
    'download instagram stories',
    'instagram story download',
    'save instagram stories',
    'ig story saver',
    'instagram story viewer download',
    'ig reel saver',
    'ig downloader',
    'insta saver',
    'insta reel download',
    'reel download online',
    'instagram video save',
    'download ig reels',
    'best instagram downloader',
    'instagram reels download hd',
    'save reels from instagram',
    'instagram reel saver online',
    'free instagram video downloader',
    'instagram reels download app',
    'how to download instagram reels',
    'how to download instagram stories',
    'instagram reel download without watermark free',
    'instagram downloader hd',
    'reel saver',
  ],
  openGraph: {
    title: 'Instagram Reels & Stories Downloader Without Watermark – Free HD Tool',
    description:
      'Download Instagram Reels, Stories, Videos, Photos & Highlights in HD quality. No watermark, no login, 100% free. The fastest Instagram downloader online.',
    type: 'website',
    url: 'https://instasaver.co.in',
    siteName: 'InstaSaver',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Reels & Stories Downloader – Free HD, No Watermark',
    description:
      'Save Instagram Reels, Stories & Videos in HD without watermark. Free, fast, no login required. Try InstaSaver now!',
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
  verification: {
    // Add your Google Search Console verification code here if needed
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>{children}</body>
    </html>
  );
}
