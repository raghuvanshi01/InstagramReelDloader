import Link from 'next/link';

export const metadata = {
    title: 'Frequently Asked Questions',
    description:
        'Find answers to common questions about InstaSaver — how to download Instagram Reels, supported formats, privacy, and more.',
    alternates: {
        canonical: 'https://instasaver.co.in/faq',
    },
};

const faqs = [
    {
        question: 'How do I download an Instagram Reel?',
        answer: 'Open Instagram, find the Reel you want to save, tap the three-dot menu or share icon and select "Copy Link". Then come back to InstaSaver, paste the link, and hit Download.',
    },
    {
        question: 'Is InstaSaver free?',
        answer: 'Yes, InstaSaver is 100% free. There are no hidden charges, no subscriptions, and no limits on how many Reels or Photos you can download.',
    },
    {
        question: 'Do I need to log in to Instagram?',
        answer: 'No. You do not need to provide your Instagram credentials. Just paste a public post link and download.',
    },
    {
        question: 'Can I download Reels without watermark?',
        answer: 'Yes! InstaSaver downloads the original video file exactly as uploaded — no watermarks are added.',
    },
    {
        question: 'Does it work on iPhone and Android?',
        answer: 'Absolutely. InstaSaver is a web app that works on any device with a browser — iPhones, Android phones, iPads, tablets, and desktop computers.',
    },
    {
        question: 'Can I download from private accounts?',
        answer: 'No. We only support downloading from public Instagram accounts to respect user privacy and Instagram\'s policies.',
    },
    {
        question: 'What media types can I download?',
        answer: 'You can download Instagram Reels (MP4 video), Photos (JPG/PNG), and Carousel posts (multiple images). Stories support is coming soon.',
    },
    {
        question: 'What quality are the downloads?',
        answer: 'Downloads are in the highest quality available — typically 1080p for Reels and full resolution for Photos.',
    },
    {
        question: 'Is it safe to use InstaSaver?',
        answer: 'Yes. We do not store your data, we do not ask for your Instagram login, and we do not install anything on your device. Everything runs in your browser.',
    },
    {
        question: 'Why did my download fail?',
        answer: 'This can happen if the post is from a private account, has been deleted, or if Instagram temporarily blocks our servers. Try again in a few minutes or make sure the link is from a public account.',
    },
];

export default function FAQPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-6 sm:p-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="z-10 w-full max-w-3xl">
                <div className="text-center mb-12">
                    <Link href="/" className="text-slate-400 hover:text-white transition text-sm mb-4 inline-block">
                        ← Back to InstaSaver
                    </Link>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
                        <span className="gradient-text">Frequently Asked Questions</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Everything you need to know about downloading Instagram Reels with InstaSaver.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-black/60 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm"
                        >
                            <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:bg-black/80 transition">
                                {faq.question}
                                <span className="transition group-open:rotate-180 ml-4 flex-shrink-0">▼</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400">{faq.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8"
                    >
                        Start Downloading →
                    </Link>
                </div>
            </div>

            <footer className="mt-24 text-slate-500 text-sm border-t border-slate-800 w-full text-center pt-8">
                <p className="mb-2">© {new Date().getFullYear()} InstaSaver. Not affiliated with Instagram/Meta.</p>
                <div className="flex justify-center gap-4">
                    <Link href="/faq" className="hover:text-white transition">FAQ</Link>
                    <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </footer>
        </main>
    );
}
