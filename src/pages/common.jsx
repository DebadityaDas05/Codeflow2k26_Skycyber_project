import React from 'react';
import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';

export default function Common() {
    return (
        <div className="w-full min-h-screen bg-white text-slate-800 flex flex-col justify-between font-sans">
            <Header2 />

            <main className="flex-grow flex items-center justify-center py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03),transparent_60%)]"></div>
                <div className="max-w-md text-center space-y-4 relative z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-800 tracking-wide uppercase">
                        Marketplace Portal
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Marketplace Cleared</h2>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                        All talent directory and search functions have been cleared as requested.
                    </p>
                </div>
            </main>

            <Footer2 />
        </div>
    );
}
