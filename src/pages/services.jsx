import React, { useState } from "react";
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";

export default function MarketplacePage() {

    const [serviceTitle, setServiceTitle] = useState("");
    const [budget, setBudget] = useState("");
    const [deadline, setDeadline] = useState("");
    const [description, setDescription] = useState("");

    const [posts, setPosts] = useState([

        {
            id: 1,
            name: "Rahul Sharma",
            role: "Startup Founder",
            location: "Bangalore, India",
            avatar: "R",
            title: "Need React Frontend Developer",
            budget: "₹10,000 - ₹25,000",
            deadline: "5 Days",
            bids: 12,
            isMine: false,
            description:
                "We are building a premium SaaS platform and are searching for a skilled React frontend developer who can create polished responsive pages with modern UI interactions. The project includes dashboard development, reusable components, animations, pricing sections, onboarding flows, and interactive user interfaces. Strong understanding of React, Tailwind CSS, and component architecture is required.",
        },

        {
            id: 2,
            name: "Priya Mehta",
            role: "Content Creator",
            location: "Mumbai, India",
            avatar: "P",
            title: "Instagram Reel Video Editor",
            budget: "₹5,000 - ₹10,000",
            deadline: "3 Days",
            bids: 21,
            isMine: false,
            description:
                "Need a creative short-form video editor for Instagram reels and YouTube shorts. The editor should understand viral editing styles, motion graphics, subtitles, transitions, sound synchronization, and audience retention strategies. We will provide raw footage and references.",
        },

        {
            id: 3,
            name: "Arjun Verma",
            role: "Product Manager",
            location: "Delhi, India",
            avatar: "A",
            title: "Need UI/UX Designer",
            budget: "₹15,000 - ₹30,000",
            deadline: "7 Days",
            bids: 8,
            isMine: false,
            description:
                "Our startup is redesigning an enterprise dashboard and requires a professional UI/UX designer to improve usability, layouts, onboarding flows, and mobile responsiveness. We are aiming for a premium modern SaaS appearance with elegant cards, typography hierarchy, and scalable design systems.",
        },

        {
            id: 4,
            name: "Neha Kapoor",
            role: "Business Owner",
            location: "Pune, India",
            avatar: "N",
            title: "WordPress Business Website",
            budget: "₹8,000 - ₹15,000",
            deadline: "6 Days",
            bids: 15,
            isMine: false,
            description:
                "Looking for a WordPress developer to build a professional business website including homepage sections, service pages, SEO optimization, responsive layouts, contact forms, and blog integration.",
        },

    ]);

    const handlePost = () => {

        if (
            !serviceTitle ||
            !budget ||
            !deadline ||
            !description
        ) {
            return;
        }

        const newPost = {
            id: Date.now(),

            name: "You",
            role: "Client",
            location: "India",
            avatar: "Y",

            title: serviceTitle,
            budget,
            deadline,
            description,

            bids: 0,

            isMine: true,
        };

        setPosts([newPost, ...posts]);

        setServiceTitle("");
        setBudget("");
        setDeadline("");
        setDescription("");
    };

    return (
        <div className="w-full min-h-screen bg-[#fffaf5] text-slate-800 flex flex-col justify-between font-sans">
            <Header2 />
            <main className="flex-grow bg-gradient-to-br from-[#fffaf5] to-[#fff3e6] p-6">

            {/* HEADER */}
            <div className="mb-10">

                <h1
                    className="
                        text-5xl
                        font-black
                        text-[#1f1308]
                    "
                >
                    Marketplace Board
                </h1>

                <p
                    className="
                        text-[#7b5d47]
                        mt-3
                        text-lg
                    "
                >
                    Post requirements and receive
                    bids from freelancers instantly.
                </p>

            </div>

            {/* MAIN */}
            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[420px_1fr]
                    gap-8
                    items-start
                "
            >

                {/* LEFT PANEL */}
                <section
                    className="
                        bg-white/90
                        backdrop-blur-md
                        border
                        border-orange-100
                        rounded-[32px]
                        p-8
                        shadow-[0_10px_40px_rgba(255,138,0,0.08)]

                        sticky
                        top-6
                        self-start
                        max-h-[95vh]
                        overflow-y-auto
                    "
                >

                    <div className="mb-8">

                        <h2
                            className="
                                text-3xl
                                font-black
                                text-[#1f1308]
                            "
                        >
                            Post Requirement
                        </h2>

                        <p
                            className="
                                text-[#7b5d47]
                                mt-2
                            "
                        >
                            Create a project request
                            and receive bids.
                        </p>

                    </div>

                    {/* FORM */}
                    <div className="space-y-6">

                        {/* TITLE */}
                        <div>

                            <label
                                className="
                                    block
                                    mb-2
                                    font-bold
                                    text-[#1f1308]
                                "
                            >
                                Service Needed
                            </label>

                            <input
                                type="text"
                                value={serviceTitle}
                                onChange={(e) =>
                                    setServiceTitle(
                                        e.target.value
                                    )
                                }
                                placeholder="Need React Developer"
                                className="
                                    w-full
                                    p-4
                                    rounded-2xl
                                    border
                                    border-orange-100
                                    bg-[#fffdfa]
                                    outline-none
                                    focus:ring-4
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* BUDGET */}
                        <div>

                            <label
                                className="
                                    block
                                    mb-2
                                    font-bold
                                    text-[#1f1308]
                                "
                            >
                                Budget
                            </label>

                            <select
                                value={budget}
                                onChange={(e) =>
                                    setBudget(
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    p-4
                                    rounded-2xl
                                    border
                                    border-orange-100
                                    bg-[#fffdfa]
                                    outline-none
                                    focus:ring-4
                                    focus:ring-orange-100
                                "
                            >

                                <option value="">
                                    Select Budget
                                </option>

                                <option>
                                    ₹1,000 - ₹5,000
                                </option>

                                <option>
                                    ₹5,000 - ₹10,000
                                </option>

                                <option>
                                    ₹10,000 - ₹25,000
                                </option>

                                <option>
                                    ₹25,000+
                                </option>

                            </select>

                        </div>

                        {/* DEADLINE */}
                        <div>

                            <label
                                className="
                                    block
                                    mb-2
                                    font-bold
                                    text-[#1f1308]
                                "
                            >
                                Deadline
                            </label>

                            <input
                                type="text"
                                value={deadline}
                                onChange={(e) =>
                                    setDeadline(
                                        e.target.value
                                    )
                                }
                                placeholder="5 Days"
                                className="
                                    w-full
                                    p-4
                                    rounded-2xl
                                    border
                                    border-orange-100
                                    bg-[#fffdfa]
                                    outline-none
                                    focus:ring-4
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* DESCRIPTION */}
                        <div>

                            <label
                                className="
                                    block
                                    mb-2
                                    font-bold
                                    text-[#1f1308]
                                "
                            >
                                Description
                            </label>

                            <textarea
                                rows="8"
                                value={description}
                                onChange={(e) =>
                                    setDescription(
                                        e.target.value
                                    )
                                }
                                placeholder="Describe your project..."
                                className="
                                    w-full
                                    p-4
                                    rounded-2xl
                                    border
                                    border-orange-100
                                    bg-[#fffdfa]
                                    outline-none
                                    resize-none
                                    focus:ring-4
                                    focus:ring-orange-100
                                "
                            />

                        </div>

                        {/* BUTTON */}
                        <button
                            onClick={handlePost}
                            className="
                                w-full
                                py-4
                                rounded-2xl
                                bg-gradient-to-r
                                from-orange-500
                                to-orange-600
                                text-white
                                font-bold
                                text-lg
                                shadow-lg
                                hover:scale-[1.02]
                                transition-all
                            "
                        >
                            Post Requirement
                        </button>

                    </div>

                </section>

                {/* RIGHT SIDE */}
                <section className="space-y-10">

                    {/* YOUR POSTS */}
                    <div
                        className="
                            flex
                            items-center
                            gap-4
                        "
                    >

                        <div
                            className="
                                h-[2px]
                                flex-1
                                bg-gradient-to-r
                                from-orange-500
                                to-orange-200
                            "
                        ></div>

                        <span
                            className="
                                px-5
                                py-2
                                rounded-full
                                bg-orange-100
                                text-orange-700
                                font-bold
                                text-sm
                            "
                        >
                            YOUR POSTS
                        </span>

                        <div
                            className="
                                h-[2px]
                                flex-1
                                bg-gradient-to-l
                                from-orange-500
                                to-orange-200
                            "
                        ></div>

                    </div>

                    {/* MY POSTS */}
                    {
                        posts
                            .filter((post) => post.isMine)
                            .map((post) => (

                                <PostCard
                                    key={post.id}
                                    post={post}
                                    myPost={true}
                                />
                            ))
                    }

                    {/* OTHER POSTS */}
                    <div
                        className="
                            flex
                            items-center
                            gap-4
                            mt-14
                        "
                    >

                        <div
                            className="
                                h-[2px]
                                flex-1
                                bg-gradient-to-r
                                from-slate-400
                                to-slate-200
                            "
                        ></div>

                        <span
                            className="
                                px-5
                                py-2
                                rounded-full
                                bg-slate-100
                                text-slate-700
                                font-bold
                                text-sm
                            "
                        >
                            OTHER REQUESTS
                        </span>

                        <div
                            className="
                                h-[2px]
                                flex-1
                                bg-gradient-to-l
                                from-slate-400
                                to-slate-200
                            "
                        ></div>

                    </div>

                    {/* OTHER CARDS */}
                    {
                        posts
                            .filter((post) => !post.isMine)
                            .map((post) => (

                                <PostCard
                                    key={post.id}
                                    post={post}
                                    myPost={false}
                                />
                            ))
                    }

                </section>

            </div>
            </main>
            <Footer2 />
        </div>
    );
}

/* CARD COMPONENT */
function PostCard({ post, myPost }) {

    return (

        <div
            className={`
                rounded-[32px]
                p-8
                shadow-[0_10px_40px_rgba(255,138,0,0.08)]
                transition-all
                hover:-translate-y-1

                ${myPost
                    ? "bg-white border-2 border-orange-300"
                    : "bg-white/95 border border-orange-100"
                }
            `}
        >

            {/* PROFILE */}
            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-6
                "
            >

                <div className="flex gap-4">

                    {/* AVATAR */}
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            bg-gradient-to-br
                            from-orange-400
                            to-orange-600
                            text-white
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-black
                            shadow-lg
                            shrink-0
                        "
                    >
                        {post.avatar}
                    </div>

                    {/* USER INFO */}
                    <div>

                        <h3
                            className="
                                text-xl
                                font-black
                                text-[#1f1308]
                            "
                        >
                            {post.name}
                        </h3>

                        <p
                            className="
                                text-[#7b5d47]
                                font-medium
                            "
                        >
                            {post.role}
                        </p>

                        <p
                            className="
                                text-sm
                                text-[#b08968]
                                mt-1
                            "
                        >
                            📍 {post.location}
                        </p>

                    </div>

                </div>

                {/* BUTTON */}
                {
                    myPost ? (

                        <button
                            className="
                                px-6
                                py-3
                                rounded-2xl
                                bg-[#fff3e3]
                                text-orange-700
                                font-bold
                                border
                                border-orange-200
                            "
                        >
                            View Bids
                        </button>

                    ) : (

                        <button
                            className="
                                px-6
                                py-3
                                rounded-2xl
                                bg-gradient-to-r
                                from-orange-500
                                to-orange-600
                                text-white
                                font-bold
                                shadow-lg
                                hover:scale-105
                                transition-all
                            "
                        >
                            Place Bid
                        </button>

                    )
                }

            </div>

            {/* TITLE */}
            <div className="mt-8">

                <h2
                    className="
                        text-3xl
                        font-black
                        text-[#1f1308]
                    "
                >
                    {post.title}
                </h2>

            </div>

            {/* TAGS */}
            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                    mt-5
                "
            >

                <span
                    className="
                        px-4
                        py-2
                        rounded-full
                        bg-orange-100
                        text-orange-700
                        font-bold
                    "
                >
                    💰 {post.budget}
                </span>

                <span
                    className="
                        px-4
                        py-2
                        rounded-full
                        bg-[#fff3e3]
                        text-[#7b5d47]
                        font-bold
                    "
                >
                    ⏳ {post.deadline}
                </span>

                <span
                    className="
                        px-4
                        py-2
                        rounded-full
                        bg-[#f5f5f5]
                        text-[#555]
                        font-bold
                    "
                >
                    📩 {post.bids} bids
                </span>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

                <p
                    className="
                        text-[#5e4635]
                        leading-9
                        text-lg
                    "
                >
                    {post.description}
                </p>

            </div>

        </div>
    );
}