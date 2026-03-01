import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service',
    description:
        'Read the terms of service for using InstaSaver, the free online Instagram Reel and Photo downloader.',
    alternates: {
        canonical: 'https://instasaver.co.in/terms',
    },
};

export default function TermsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-6 sm:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="z-10 w-full max-w-3xl">
                <Link href="/" className="text-slate-400 hover:text-white transition text-sm mb-8 inline-block">
                    ← Back to InstaSaver
                </Link>

                <h1 className="text-4xl font-bold mb-8 tracking-tight text-white">Terms of Service</h1>
                <p className="text-slate-400 mb-8">Last updated: March 1, 2026</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By using InstaSaver ("the Service"), you agree to be bound by these Terms of Service. If you do not
                            agree with any part of these terms, please do not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
                        <p>
                            InstaSaver is a free online tool that allows users to download publicly available Instagram Reels,
                            Photos, and Carousel posts. The service acts as an intermediary that fetches media from public
                            Instagram URLs provided by the user.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>You must only download content that you have the right to access.</li>
                            <li>You are responsible for respecting copyright and intellectual property rights of content creators.</li>
                            <li>You must not use the Service for any illegal purpose.</li>
                            <li>You must not use the Service to download content from private accounts.</li>
                            <li>Downloaded content should be for personal use only unless you have permission from the content creator.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
                        <p>
                            All content downloaded through InstaSaver remains the intellectual property of the original content
                            creators. InstaSaver does not claim ownership of any downloaded media. We respect the rights of
                            content creators and encourage users to do the same.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
                        <p>
                            The Service is provided "as is" and "as available" without warranties of any kind, either express or
                            implied. We do not guarantee that the Service will be uninterrupted, error-free, or available at all times.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
                        <p>
                            InstaSaver shall not be held liable for any damages arising from the use of the Service, including
                            but not limited to direct, indirect, incidental, or consequential damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Changes will be posted on this page.
                            Continued use of the Service after changes constitutes acceptance of the revised Terms.
                        </p>
                    </section>
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
