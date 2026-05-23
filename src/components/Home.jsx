import React from 'react';

export default function Home() {
    return (
        <div className="w-full flex-grow flex items-center justify-center py-24 px-6 bg-white text-slate-800 font-sans">
            <div className="max-w-md text-center space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-800 tracking-wide uppercase">
                    Landing Page
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Home Content Cleared</h2>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                    All landing page contents have been cleared from this view as requested.
                </p>
            </div>
        </div>
    );
}