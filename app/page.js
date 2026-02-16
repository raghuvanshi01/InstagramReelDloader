'use client';

import { useState } from 'react';
import { Download, Loader2, Link as LinkIcon, AlertCircle, CheckCircle } from 'lucide-react';
import MediaPreview from '../components/MediaPreview';
import Tabs from '../components/Tabs';
import JsonLd from '../components/JsonLd';
import ThemeSelector from '../components/ThemeSelector';

export default function Home() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [mediaData, setMediaData] = useState(null);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('reels');
    const [cooldown, setCooldown] = useState(0);
    const [currentTheme, setCurrentTheme] = useState('default');

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!url) return;

        // Rate Limiting Check
        if (cooldown > 0) {
            setError(`Please wait ${cooldown} seconds before downloading again.`);
            return;
        }

        setLoading(true);
        setError(null);
        setMediaData(null);

        try {
            const res = await fetch('/api/download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch media');
            }

            setMediaData(data);

            // Start Cooldown (5 seconds)
            setCooldown(5);
            const timer = setInterval(() => {
                setCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getPlaceholder = () => {
        switch (activeTab) {
            case 'photos': return 'Paste Instagram Photo Link...';
            case 'stories': return 'Paste Story Link (Coming Soon)...';
            default: return 'Paste Instagram Reel Link...';
        }
    };

    return (
        <main className={`flex min-h-screen flex-col items-center p-4 sm:p-24 relative overflow-hidden ${currentTheme}`}>
            <JsonLd />
            <ThemeSelector currentTheme={currentTheme} setTheme={setCurrentTheme} />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm flex-col">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
                        Insta<span className="gradient-text">Saver</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Download Instagram Reels, Photos & Carousels.
                        <br />Fast, free, and premium quality.
                    </p>
                </div>

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="glass-card p-8 w-full">
                    <form onSubmit={handleDownload} className="flex flex-col gap-4">
                        <div className="relative">
                            <LinkIcon className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder={getPlaceholder()}
                                className="input-field pl-12 mb-0"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !url || cooldown > 0}
                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Processing...
                                </>
                            ) : cooldown > 0 ? (
                                `Wait ${cooldown}s`
                            ) : (
                                <>
                                    <Download className="w-5 h-5" />
                                    Download {activeTab === 'photos' ? 'Photo' : 'Video'}
                                </>
                            )}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    <MediaPreview data={mediaData} />
                </div>
            </div>

            {/* SEO Content Section */}
            <section className="w-full max-w-4xl mt-24 text-slate-300">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Download Instagram Reels & Photos</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-black/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                        <div className="bg-violet-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-violet-400 font-bold text-xl">1</div>
                        <h3 className="text-xl font-semibold text-white mb-2">Copy Link</h3>
                        <p>Open Instagram, find the Reel or Photo you want to save, click the three dots/share icon and select "Copy Link".</p>
                    </div>
                    <div className="bg-black/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                        <div className="bg-pink-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-pink-400 font-bold text-xl">2</div>
                        <h3 className="text-xl font-semibold text-white mb-2">Paste URL</h3>
                        <p>Return to InstaSaver and paste the link into the input field above. Select the correct tab (Reels or Photos).</p>
                    </div>
                    <div className="bg-black/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                        <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-cyan-400 font-bold text-xl">3</div>
                        <h3 className="text-xl font-semibold text-white mb-2">Download</h3>
                        <p>Click the "Download" button. Wait for the processing to finish, then click the download button on the preview.</p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <details className="group bg-black/60 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
                            <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:bg-black/80 transition">
                                Is InstaSaver free to use?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400">
                                Yes, InstaSaver is completely free to use. You can download as many Reels and Photos as you like without any cost.
                            </div>
                        </details>
                        <details className="group bg-black/60 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
                            <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:bg-black/80 transition">
                                Do I need to login to Instagram?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400">
                                No, you do not need to log in to your Instagram account to use our downloader. Using a logged-in account is safer and more anonymous.
                            </div>
                        </details>
                        <details className="group bg-black/60 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
                            <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:bg-black/80 transition">
                                Can I download from private accounts?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400">
                                No, currently we only support downloading media from public Instagram accounts to respect user privacy.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <footer className="mt-24 text-slate-500 text-sm border-t border-slate-800 w-full text-center pt-8">
                <p className="mb-2">© {new Date().getFullYear()} InstaSaver. Not affiliated with Instagram/Meta.</p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </div>
            </footer>
        </main>
    );
}
