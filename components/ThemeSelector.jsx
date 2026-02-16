'use client';

import { Palette } from 'lucide-react';

export default function ThemeSelector({ currentTheme, setTheme }) {
    const themes = [
        { id: 'default', name: 'Midnight', color: 'bg-violet-500' },
        { id: 'theme-ocean', name: 'Ocean', color: 'bg-cyan-500' },
        { id: 'theme-sunset', name: 'Sunset', color: 'bg-orange-500' },
        { id: 'theme-forest', name: 'Forest', color: 'bg-green-500' },
    ];

    return (
        <div className="absolute top-4 right-4 z-50">
            <div className="group relative">
                <button className="p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all">
                    <Palette className="w-5 h-5 text-slate-300" />
                </button>

                <div className="absolute right-0 mt-2 w-48 py-2 bg-slate-900/95 border border-slate-700/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Theme</p>
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => setTheme(theme.id)}
                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-slate-800/50 transition-colors ${currentTheme === theme.id ? 'text-white' : 'text-slate-400'
                                }`}
                        >
                            <div className={`w-3 h-3 rounded-full ${theme.color}`}></div>
                            {theme.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
