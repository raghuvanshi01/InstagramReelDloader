import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'InstaSaver - Download Instagram Reels, Photos & Carousels',
  description: 'Fastest Instagram Downloader. Save Reels, Photos, and Carousel posts from Instagram in high quality (1080p). No watermark, free, and unlimited.',
  keywords: ['instagram downloader', 'reel saver', 'ig photo download', 'no watermark', 'instagram carousel download', 'fastest instagram downloader'],
  openGraph: {
    title: 'InstaSaver - Premium Instagram Downloader',
    description: 'Download Instagram Reels and Photos in high quality for free.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
