'use client';

import { useState } from 'react';
import { Download, Loader2, Link as LinkIcon, AlertCircle } from 'lucide-react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);
    const [error, setError] = useState(null);

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setError(null);
        setVideoData(null);

        try {
            const res = await fetch('/api/download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch video');
            }

            setVideoData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="z-10 w-full max-w-xl items-center justify-between font-mono text-sm lg:flex-col">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">
                        Insta<span className="gradient-text">Saver</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Download Instagram Reels without watermarks.
                        <br />Fast, free, and premium quality.
                    </p>
                </div>

                <div className="glass-card p-8 w-full">
                    <form onSubmit={handleDownload} className="flex flex-col gap-4">
                        <div className="relative">
                            <LinkIcon className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Paste Instagram Reel Link here..."
                                className="input-field pl-10 mb-0"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !url}
                            className="btn-primary w-full flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Download className="w-5 h-5" />
                                    Download Video
                                </>
                            )}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    {videoData && (
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="aspect-[9/16] w-full max-w-[300px] mx-auto bg-black rounded-lg overflow-hidden border border-slate-700 shadow-2xl relative group">
                                <video
                                    src={videoData.videoUrl}
                                    controls
                                    className="w-full h-full object-cover"
                                    poster={videoData.thumbnail}
                                />
                                <a
                                    href={videoData.videoUrl}
                                    download={`reel-${Date.now()}.mp4`}
                                    className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href={videoData.videoUrl}
                                    className="text-sm text-slate-400 hover:text-white underline decoration-dotted"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Direct Download Link
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className="mt-16 text-slate-500 text-sm">
                © {new Date().getFullYear()} InstaSaver. All rights reserved.
            </footer>
        </main>
    );
}
