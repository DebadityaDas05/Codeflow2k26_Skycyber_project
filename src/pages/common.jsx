import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Updated Work Scope Categorization (Digital Problems)
const domains = [
    {
        id: "all",
        name: "All Domains",
        description: "Explore all freelance categories",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
        )
    },
    {
        id: "social",
        name: "Social Media",
        description: "5 Instagram posts, story creatives, caption writing, DM reply management, hashtag research, page optimization, 1-week posting schedules, engagement handling.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742a3 3 0 11-1.368-2.738 3.5 3.5 0 003.184 1.368M12 21a9.003 9.003 0 008.354-5.646 9.003 9.003 0 00-8.354-5.646M12 21a9.003 9.003 0 01-8.354-5.646 9.003 9.003 0 018.354-5.646m0 11.292V9M12 3a9 9 0 00-3.354 17.354 9 9 0 006.708 0A9 9 0 0012 3z"></path>
            </svg>
        )
    },
    {
        id: "branding",
        name: "Branding",
        description: "Logo redesign, packaging, brochures, visiting cards, offer banners, catalogues, menu designs, flyers.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
        )
    },
    {
        id: "video",
        name: "Video / Editing",
        description: "Reel edits, short-form content, YouTube shorts, subtitle editing, podcast clips, promo videos, before/after transformation edits.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
        )
    },
    {
        id: "growth",
        name: "Growth / Outreach",
        description: "Influencer mapping, sponsor outreach, college activations, event promotions, partnership outreach, community building, lead generation.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
        )
    },
    {
        id: "automation",
        name: "Automation / Tech",
        description: "WhatsApp bot setup, chatbot integration, CRM cleanup, Google Sheets automation, email automation, lead forms, landing pages, website fixes, SEO updates.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        )
    },
    {
        id: "research",
        name: "Research / Ops",
        description: "Competitor or pricing research, product listing uploads, catalog cleanups, survey deployment, market research, customer data tagging.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
        )
    }
];

// Student Freelancer Gig Services matching the Work Scope
const gigsData = [
    {
        id: 1,
        category: "social",
        title: "I will design 5 high-converting Instagram posts and write engaging captions",
        rating: 4.9,
        reviews: 38,
        price: 45,
        seller: {
            name: "Rohan Kapoor",
            avatar: "RK",
            level: "Level 2 Seller",
            badgeColor: "bg-orange-50 text-orange-700 border-orange-100"
        },
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        category: "branding",
        title: "I will redesign your brand logo and design professional visiting cards",
        rating: 5.0,
        reviews: 24,
        price: 75,
        seller: {
            name: "Aanya Sharma",
            avatar: "AS",
            level: "Top Rated",
            badgeColor: "bg-amber-50 text-amber-700 border-amber-100"
        },
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        category: "video",
        title: "I will edit high-retention reel clips and YouTube shorts with visual subtitles",
        rating: 4.8,
        reviews: 56,
        price: 30,
        seller: {
            name: "Kabir Mehta",
            avatar: "KM",
            level: "Level 1 Seller",
            badgeColor: "bg-blue-50 text-blue-700 border-blue-100"
        },
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        category: "growth",
        title: "I will build a targeted local sponsor and college outreach list",
        rating: 4.9,
        reviews: 19,
        price: 55,
        seller: {
            name: "Neha Patel",
            avatar: "NP",
            level: "Pro Seller",
            badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100"
        },
        image: "https://images.unsplash.com/photo-1552581230-c015914626ed?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        category: "automation",
        title: "I will automate your leads pipeline using WhatsApp bots and CRM integration",
        rating: 5.0,
        reviews: 31,
        price: 110,
        seller: {
            name: "Amit Verma",
            avatar: "AV",
            level: "Level 2 Seller",
            badgeColor: "bg-orange-50 text-orange-700 border-orange-100"
        },
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        category: "research",
        title: "I will conduct extensive competitor pricing and survey market research",
        rating: 4.7,
        reviews: 14,
        price: 50,
        seller: {
            name: "Priya Rao",
            avatar: "PR",
            level: "Level 2 Seller",
            badgeColor: "bg-orange-50 text-orange-700 border-orange-100"
        },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60"
    }
];

export default function Common() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [budgetFilter, setBudgetFilter] = useState("all");

    // Handle Quick Search tags
    const handleQuickSearch = (tag) => {
        setSearchQuery(tag);
    };

    // Filter Gigs according to category, search text, and budget filter
    const filteredGigs = useMemo(() => {
        return gigsData.filter((gig) => {
            // Category filter
            const matchesCategory = selectedCategory === "all" || gig.category === selectedCategory;

            // Search query filter
            const matchesSearch = searchQuery === "" || 
                gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                gig.seller.name.toLowerCase().includes(searchQuery.toLowerCase());

            // Budget filter
            let matchesBudget = true;
            if (budgetFilter === "under50") matchesBudget = gig.price < 50;
            else if (budgetFilter === "50to100") matchesBudget = gig.price >= 50 && gig.price <= 100;
            else if (budgetFilter === "over100") matchesBudget = gig.price > 100;

            return matchesCategory && matchesSearch && matchesBudget;
        });
    }, [searchQuery, selectedCategory, budgetFilter]);

    // Find the currently active category metadata (to display description dynamically)
    const activeCategoryMetadata = useMemo(() => {
        return domains.find(d => d.id === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="w-full bg-white text-slate-800 pb-20">
            <Header />

            {/* Premium Header/Hero Section matching Orange/Vibrant Aesthetics */}
            <section className="relative bg-slate-950 text-white py-20 px-6 sm:px-12 md:py-24 overflow-hidden border-b border-slate-900">
                {/* Visual Glare elements with Orange / Amber gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-600/5 blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start text-left space-y-8">
                    <div className="space-y-4 max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 tracking-wide uppercase border border-orange-500/20">
                            Hyperlocal Talent Network
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
                            Solve your digital problems with <span className="text-orange-500">student freelancers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                            Structured work categories. Verified local student executors. Direct zero-friction matching.
                        </p>
                    </div>

                    {/* Highly Polished Search Bar - Orange Theme */}
                    <div className="w-full max-w-2xl">
                        <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl overflow-hidden shadow-2xl p-1.5 gap-1.5 border border-slate-800/10">
                            <div className="flex-1 flex items-center px-4 gap-3">
                                <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Try "Instagram posts" or "logo redesign"'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-3 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none font-semibold text-base"
                                />
                            </div>
                            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-200 active:scale-[0.98] shrink-0 text-base shadow-lg shadow-orange-500/20">
                                Search
                            </button>
                        </div>

                        {/* Popular Search tags with Orange border transitions */}
                        <div className="flex flex-wrap items-center mt-4 gap-2 text-sm font-semibold text-slate-300">
                            <span>Popular:</span>
                            {["Instagram posts", "Logo redesign", "Reel edits", "WhatsApp bot"].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleQuickSearch(tag)}
                                    className="px-3 py-1 rounded-full border border-slate-800 hover:bg-slate-900 hover:border-orange-500/50 hover:text-white transition-all duration-200"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Categorization & Choose Domains Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12">
                <div className="text-left space-y-2">
                    <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Work Scope Categorization</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Choose your domain</h2>
                    <p className="text-slate-500 font-semibold">Select a category below to solve specialized digital problems instantly.</p>
                </div>

                {/* Domain Category Selector - Orange Style */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                    {domains.map((domain) => {
                        const isSelected = selectedCategory === domain.id;
                        return (
                            <button
                                key={domain.id}
                                onClick={() => setSelectedCategory(domain.id)}
                                className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-300 gap-3 group relative overflow-hidden ${
                                    isSelected
                                        ? "bg-orange-50/50 border-orange-500 text-orange-600 shadow-md shadow-orange-50/50"
                                        : "bg-white border-slate-100 hover:border-orange-500/30 hover:bg-slate-50/30 hover:shadow-lg text-slate-700"
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                                    isSelected ? "bg-orange-100 text-orange-600" : "bg-slate-50 text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-600"
                                }`}>
                                    {domain.icon}
                                </div>
                                <span className="font-bold text-xs tracking-wide leading-tight">{domain.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Dynamic Category Detail Box - Orange styling */}
                <div className="p-6 rounded-2xl bg-orange-50/30 border border-orange-100/50 text-left space-y-2 max-w-5xl">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Included Scope of Work ({activeCategoryMetadata?.name}):</span>
                    </h4>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed pl-7">
                        {activeCategoryMetadata?.description}
                    </p>
                </div>
            </section>

            {/* Filter Toolbar & Student Gig Listings */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
                <hr className="border-slate-100" />

                {/* Filter Toolbar */}
                <div className="flex flex-wrap justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Budget Filter - Tailored to Student budgets */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Budget Limit:</span>
                            <select
                                value={budgetFilter}
                                onChange={(e) => setBudgetFilter(e.target.value)}
                                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2 font-semibold text-sm text-slate-700 focus:outline-none focus:border-orange-500 transition-colors"
                            >
                                <option value="all">Any Price</option>
                                <option value="under50">Under $50</option>
                                <option value="50to100">$50 - $100</option>
                                <option value="over100">Over $100</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-sm font-bold text-slate-500">
                        Available services in this scope: <span className="text-orange-600">{filteredGigs.length}</span>
                    </div>
                </div>

                {/* Gigs List Cards Grid - Orange Highlight theme */}
                {filteredGigs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredGigs.map((gig) => (
                            <div
                                key={gig.id}
                                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500/10 hover:scale-[1.01] transition-all duration-300 flex flex-col group"
                            >
                                {/* Service Image */}
                                <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={gig.image}
                                        alt={gig.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-orange-600 shadow-sm uppercase tracking-wide">
                                        {gig.category}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                                    {/* Seller Profile row */}
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm">
                                                {gig.seller.avatar}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 leading-tight">{gig.seller.name}</p>
                                                <span className={`inline-block px-2 py-0.5 mt-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${gig.seller.badgeColor}`}>
                                                    {gig.seller.level}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gig Title */}
                                    <p className="font-bold text-slate-800 text-base leading-snug group-hover:text-orange-600 transition-colors duration-200 flex-1 text-left">
                                        {gig.title}
                                    </p>

                                    <hr className="border-slate-50" />

                                    {/* Ratings & Price footer */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
                                            <svg className="w-4 h-4 text-orange-500 shrink-0 fill-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <span>{gig.rating.toFixed(1)}</span>
                                            <span className="text-slate-400 font-medium">({gig.reviews})</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider leading-none text-right">Starting At</p>
                                            <p className="text-xl font-bold text-slate-900 text-right mt-0.5">${gig.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">No services match this scope</h3>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto">Try clearing your search query or selecting a different category from above.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setBudgetFilter("all"); }}
                            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all duration-200"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
