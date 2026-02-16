export default function MediaPreview({ data }) {
    if (!data || !data.media || data.media.length === 0) return null;

    return (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-2xl mx-auto">
            {/* Title & Author Info */}
            <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{data.title || 'Instagram Media'}</h3>
                {data.author && (
                    <p className="text-slate-400">by @{data.author}</p>
                )}
            </div>

            <div className={`grid gap-4 ${data.media.length > 1 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 max-w-[300px] mx-auto'}`}>
                {data.media.map((item, index) => (
                    <div key={index} className="relative group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                        {item.type === 'video' ? (
                            <div className="aspect-[9/16] relative">
                                <video
                                    src={item.url}
                                    controls
                                    className="w-full h-full object-cover"
                                    poster={item.thumbnail}
                                />
                            </div>
                        ) : (
                            <div className="aspect-square relative">
                                <img
                                    src={item.url}
                                    alt={`Instagram content ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Download Button Overlay */}
                        <a
                            href={item.url}
                            download={`insta-media-${index}-${Date.now()}.${item.type === 'video' ? 'mp4' : 'jpg'}`}
                            className="absolute bottom-2 right-2 bg-white text-black p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-slate-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Download"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        </a>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <p className="text-xs text-slate-500">
                    Right-click "Download" and select "Save Link As" if it opens in a new tab.
                </p>
            </div>
        </div>
    );
}
