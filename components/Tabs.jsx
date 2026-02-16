'use client';

export default function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'reels', label: 'Reels' },
        { id: 'photos', label: 'Photos' },
        { id: 'stories', label: 'Stories' },
    ];

    return (
        <div className="flex justify-center mb-8">
            <div className="bg-black/60 p-1 rounded-md flex gap-1 border border-slate-700/50 backdrop-blur-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
