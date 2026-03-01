import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy',
    description:
        'Read the InstaSaver privacy policy to understand how we handle your data when you use our Instagram downloader.',
    alternates: {
        canonical: 'https://instasaver.co.in/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-6 sm:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="z-10 w-full max-w-3xl">
                <Link href="/" className="text-slate-400 hover:text-white transition text-sm mb-8 inline-block">
                    ← Back to InstaSaver
                </Link>

                <h1 className="text-4xl font-bold mb-8 tracking-tight text-white">Privacy Policy</h1>
                <p className="text-slate-400 mb-8">Last updated: March 1, 2026</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                        <p>
                            InstaSaver does <strong>not</strong> collect personal information. We do not require you to create an account,
                            sign in, or provide any personal data. The only data processed by our service is the Instagram URL you submit,
                            which is used solely to fetch the requested media.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Cookies & Analytics</h2>
                        <p>
                            We may use basic analytics tools (such as Google Analytics) to understand site traffic and improve our service.
                            These tools may use cookies to collect anonymous usage data such as pages viewed, time spent, and device type.
                            No personally identifiable information is collected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage</h2>
                        <p>
                            We do not store any downloaded media on our servers. All processing is done in real-time, and media files are
                            streamed directly from Instagram to your device. URLs you submit are not logged or stored.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
                        <p>
                            InstaSaver interacts with Instagram's public infrastructure to fetch media. We are not affiliated with,
                            endorsed by, or connected to Instagram or Meta Platforms, Inc. in any way.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Children's Privacy</h2>
                        <p>
                            Our service is not directed to children under the age of 13. We do not knowingly collect or process
                            data from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with
                            an updated date. Your continued use of InstaSaver after any changes constitutes acceptance of the
                            updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please reach out to us through our website.
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
