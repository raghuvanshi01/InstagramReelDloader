import { useState, useEffect } from 'react';
import { Check, Download, Info } from 'lucide-react';

export default function MediaPreview({ data }) {
    const [downloadStarted, setDownloadStarted] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleDownload = async (mediaUrl, type, isAuto = false) => {
        try {
            if (isAuto) setShowToast(true);

            const filename = `insta-saver-${type}-${Date.now()}.${type === 'video' ? 'mp4' : 'jpg'}`;
            // Use the proxy endpoint to force download
            const response = await fetch(`/api/proxy?url=${encodeURIComponent(mediaUrl)}&filename=${filename}`);
            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            if (isAuto) {
                setTimeout(() => setShowToast(false), 3000);
            }
        } catch (err) {
            console.error('Download failed, falling back to new tab', err);
            // Fallback to opening in new tab
            window.open(mediaUrl, '_blank');
        }
    };

    useEffect(() => {
        if (data && data.media && data.media.length > 0 && !downloadStarted) {
            // Auto-download the first item
            const firstItem = data.media[0];
            handleDownload(firstItem.url, firstItem.type, true);
            setDownloadStarted(true);
        }
    }, [data, downloadStarted]);

    // Reset download status when data changes (e.g. new link)
    useEffect(() => {
        if (data) {
            setDownloadStarted(false);
        }
    }, [data?.id]); // Assuming data has an ID or unique prop, otherwise rely on data object ref

    if (!data || !data.media || data.media.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4">
                    <div className="glass-card px-6 py-3 rounded-full border border-green-500/30 flex items-center gap-3 shadow-2xl bg-slate-900/90 backdrop-blur-md">
                        <div className="bg-green-500/20 p-1.5 rounded-full">
                            <Download className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-white text-sm font-medium">Download Started Automatically...</span>
                    </div>
                </div>
            )}

            <div className="glass-card p-6 mb-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div className="bg-green-500/20 p-2 rounded-full">
                        <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">Ready to Download</h3>
                        <p className="text-xs text-slate-500 mt-1">
                            Your download should start automatically.
                        </p>
                    </div>
                </div>

                <div className={`grid gap-6 ${data.media.length > 1 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-md mx-auto'}`}>
                    {data.media.map((item, index) => (
                        <div key={index} className="relative group bg-black rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-all hover:border-slate-500/50 hover:shadow-violet-500/10">
                            {item.type === 'video' ? (
                                <div className="aspect-[9/16] relative bg-slate-900 group">
                                    <video
                                        src={item.url}
                                        poster={item.thumbnail}
                                        controls
                                        className="w-full h-full object-contain"
                                        preload="metadata"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-[4/5] relative bg-slate-900">
                                    <img
                                        src={item.url}
                                        alt="Instagram content"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col gap-2">
                                <button
                                    onClick={() => handleDownload(item.url, item.type)}
                                    className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 text-sm uppercase tracking-wide shadow-lg group-hover:translate-y-[-2px] transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    Download {item.type === 'video' ? 'Video' : 'Photo'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {data.audio && (
                    <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-violet-500/20 p-2 rounded-full">
                                <span className="text-violet-400 font-bold text-xs">AUDIO</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Download Audio Only</h4>
                                <p className="text-xs text-slate-500">Extract audio from this post ({data.audio.ext})</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDownload(data.audio.url, 'audio')}
                            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Download Audio
                        </button>
                    </div>
                )}
            </div>

            <div className="text-center">
                <button
                    onClick={() => window.location.reload()}
                    className="text-slate-400 hover:text-white text-sm transition-colors underline underline-offset-4"
                >
                    Download Another Link
                </button>
            </div>
        </div>
    );
}
