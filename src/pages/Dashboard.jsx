import React, { useState } from "react";
import "../Dashboard.css";

export default function Dashboard() {
    const [activePage, setActivePage] = useState("dashboard");
    const [showSellerPopup, setShowSellerPopup] = useState(false);

    const userRole = localStorage.getItem("userRole") || "individual";

    if (userRole === "business") {
        return (
            <div className="dash-wrapper">
                <main className="dash-main">
                    <h1>Business Dashboard</h1>
                    <p>Business dashboard will be created later.</p>
                </main>
            </div>
        );
    }

    return (
        <div className="dash-wrapper">
            <aside className="dash-sidebar">
                <h2>I-COCKROACH</h2>

                <nav>
                    {[
                        ["dashboard", "Dashboard"],
                        ["profile", "My Profile"],
                        ["tasks", "Find Tasks"],
                        ["pitches", "My Pitches"],
                        ["work", "Active Work"],
                        ["payments", "Payments"],
                        ["messages", "Messages"],
                        ["settings", "Settings"],
                    ].map(([key, label]) => (
                        <button
                            key={key}
                            className={activePage === key ? "active" : ""}
                            onClick={() => setActivePage(key)}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                <div className="dash-user-mini">
                    <div className="avatar">JA</div>
                    <div>
                        <h4>John</h4>
                        <p>Student Freelancer</p>
                    </div>
                </div>
            </aside>

            <main className="dash-main">
                {activePage === "dashboard" && <DashboardHome />}
                {activePage === "profile" && (
                    <MyProfile
                        showSellerPopup={showSellerPopup}
                        setShowSellerPopup={setShowSellerPopup}
                    />
                )}
                {activePage === "tasks" && <FindTasks />}
                {activePage === "pitches" && <SimplePage title="My Pitches" text="Track pitch status and client responses." />}
                {activePage === "work" && <SimplePage title="Active Work" text="View ongoing work, milestones and deadlines." />}
                {activePage === "payments" && <SimplePage title="Payments" text="Track escrow, pending and released payments." />}
                {activePage === "messages" && <SimplePage title="Messages" text="Chat with clients and manage project communication." />}
                {activePage === "settings" && <Settings />}
            </main>
        </div>
    );
}

const monthlyProjects = [
    { month: "Jan", completed: 4, accepted: 3 },
    { month: "Feb", completed: 6, accepted: 4 },
    { month: "Mar", completed: 5, accepted: 6 },
    { month: "Apr", completed: 9, accepted: 7 },
    { month: "May", completed: 8, accepted: 9 },
    { month: "Jun", completed: 11, accepted: 9 },
    { month: "Jul", completed: 12, accepted: 10 },
];
function DashboardHome() {
    return (
        <>
            <header className="dash-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome back, John 👋</p>
                </div>

                <button className="primary-btn">Find New Tasks</button>
            </header>

            <section className="stats-grid">
                <div className="stat-card dark">
                    <p>Accepted Earnings</p>
                    <h2>₹12,500</h2>
                </div>

                <div className="stat-card">
                    <p>Pending Amount</p>
                    <h2>₹3,200</h2>
                </div>

                <div className="stat-card">
                    <p>Projects Done</p>
                    <h2>28</h2>
                </div>
            </section>

            <section className="dashboard-main-grid">
                <div className="analytics-panel">
                    <div className="panel-head">
                        <h3>Your Performance vs Platform Average</h3>
                        <span>Monthly Analytics</span>
                    </div>

                    <div className="line-chart">
                        <svg viewBox="0 0 700 260" preserveAspectRatio="none">
                            <polyline
                                points="40,185 140,145 240,165 340,95 440,115 540,65 660,40"
                                fill="none"
                                stroke="#ff8a00"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <polyline
                                points="40,205 140,190 240,150 340,140 440,95 540,100 660,70"
                                fill="none"
                                stroke="#ffc985"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {monthlyProjects.map((item, index) => {
                                const xPoints = [40, 140, 240, 340, 440, 540, 660];
                                const yourY = [185, 145, 165, 95, 115, 65, 40];
                                const avgY = [205, 190, 150, 140, 95, 100, 70];

                                return (
                                    <g key={item.month}>
                                        <g className="chart-point">
                                            <circle cx={xPoints[index]} cy={yourY[index]} r="10" />
                                            <foreignObject
                                                x={xPoints[index] - 55}
                                                y={yourY[index] - 78}
                                                width="130"
                                                height="68"
                                            >
                                                <div className="chart-tooltip">
                                                    <strong>{item.month}</strong>
                                                    <span>You: {item.completed} projects</span>
                                                </div>
                                            </foreignObject>
                                        </g>

                                        <g className="chart-point avg">
                                            <circle cx={xPoints[index]} cy={avgY[index]} r="10" />
                                            <foreignObject
                                                x={xPoints[index] - 55}
                                                y={avgY[index] - 78}
                                                width="145"
                                                height="68"
                                            >
                                                <div className="chart-tooltip">
                                                    <strong>{item.month}</strong>
                                                    <span>Average: {item.accepted} projects</span>
                                                </div>
                                            </foreignObject>
                                        </g>
                                    </g>
                                );
                            })}
                        </svg>

                        <div className="chart-labels">
                            {monthlyProjects.map((item) => (
                                <span key={item.month}>{item.month}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="badge-card">
                    <div className="trophy gold">🏆</div>
                    <h3>Gold Badge</h3>
                    <p>Based on client reviews, delivery quality and completed projects.</p>

                    <div className="badge-row">
                        <span>Client Rating</span>
                        <strong>4.9/5</strong>
                    </div>

                    <div className="badge-row">
                        <span>Successful Projects</span>
                        <strong>28</strong>
                    </div>

                    <div className="badge-row">
                        <span>On-time Delivery</span>
                        <strong>96%</strong>
                    </div>
                </div>
            </section>

            <section className="panel">
                <div className="panel-head">
                    <h3>Active Projects</h3>
                    <button>View all</button>
                </div>

                <div className="project-row heading">
                    <span>Client</span>
                    <span>Project</span>
                    <span>Budget</span>
                    <span>Progress</span>
                </div>

                <div className="project-row">
                    <span>Steven Terry</span>
                    <span>Landing Page</span>
                    <span>₹5,000</span>
                    <span>90%</span>
                </div>

                <div className="project-row">
                    <span>Audrey Jones</span>
                    <span>Social Media Kit</span>
                    <span>₹3,000</span>
                    <span>50%</span>
                </div>
            </section>
        </>
    );
}

function MyProfile({ showSellerPopup, setShowSellerPopup }) {
    const [verifyPopup, setVerifyPopup] = useState(null);

    return (
        <>
            <header className="dash-header">
                <div>
                    <h1>My Profile</h1>
                    <p>Customize your freelancer profile.</p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() => setShowSellerPopup(true)}
                >
                    Want to be a Seller?
                </button>
            </header>

            <section className="profile-card">
                <div className="profile-top">
                    <div className="profile-pic">JA</div>

                    <div>
                        <h2>John Alan</h2>
                        <p>Frontend Developer • Digital Marketer • Student Freelancer</p>
                        <span>Available for work</span>
                    </div>

                    <button className="outline-btn">Upload Picture</button>
                </div>

                <textarea defaultValue="I help small businesses build clean websites, social media creatives, automation workflows, and digital marketing systems." />

                <div className="profile-grid">
                    <input defaultValue="John Alan" />
                    <input defaultValue="Frontend Developer" />
                    <input defaultValue="New Delhi, India" />
                    <input defaultValue="₹300/hr" />
                </div>

                <button className="primary-btn profile-save-btn">Save Profile</button>
            </section>

            {showSellerPopup && (
                <div className="seller-popup-overlay">
                    <div className="seller-popup">
                        <button
                            className="seller-close"
                            onClick={() => setShowSellerPopup(false)}
                        >
                            ×
                        </button>

                        <h2>Become a Verified Seller</h2>
                        <p>
                            Complete these checks to start pitching for paid business tasks.
                        </p>

                        <div className="verification-list">
                            <div className="verification-item">
                                <span>📧</span>
                                <div>
                                    <h4>Email Verification</h4>
                                    <p>Verify your email address to secure your account.</p>
                                </div>
                                <button onClick={() => setVerifyPopup("email")}>Verify</button>
                            </div>

                            <div className="verification-item">
                                <span>📱</span>
                                <div>
                                    <h4>Mobile Verification</h4>
                                    <p>Confirm your phone number for trusted communication.</p>
                                </div>
                                <button onClick={() => setVerifyPopup("mobile")}>Verify</button>
                            </div>

                            <div className="verification-item">
                                <span>🎓</span>
                                <div>
                                    <h4>College ID Verification</h4>
                                    <p>Upload your student ID to prove your student status.</p>
                                </div>
                                <button onClick={() => setVerifyPopup("college")}>Upload</button>
                            </div>

                            <div className="verification-item">
                                <span>💼</span>
                                <div>
                                    <h4>Skill Proof</h4>
                                    <p>Add portfolio links, GitHub, LinkedIn or sample work.</p>
                                </div>
                                <button onClick={() => setVerifyPopup("skill")}>Add</button>
                            </div>
                        </div>

                        <button className="primary-btn seller-submit">
                            Submit Verification
                        </button>
                    </div>
                </div>
            )}

            {verifyPopup && (
                <div className="mini-popup-overlay">
                    <div className="mini-popup">
                        <button
                            className="seller-close"
                            onClick={() => setVerifyPopup(null)}
                        >
                            ×
                        </button>

                        {verifyPopup === "email" && (
                            <>
                                <h2>Email Verification</h2>
                                <p>Enter your email address for verification.</p>
                                <input type="email" placeholder="Enter your email" />
                                <button className="primary-btn">Send Verification Link</button>
                            </>
                        )}

                        {verifyPopup === "mobile" && (
                            <>
                                <h2>Mobile Verification</h2>
                                <p>Enter your mobile number to receive an OTP.</p>
                                <input type="tel" placeholder="Enter mobile number" />
                                <button className="primary-btn">Send OTP</button>
                            </>
                        )}

                        {verifyPopup === "college" && (
                            <>
                                <h2>College ID Verification</h2>
                                <p>Upload your college ID card for student verification.</p>
                                <input type="file" accept="image/*,.pdf" />
                                <button className="primary-btn">Upload ID</button>
                            </>
                        )}

                        {verifyPopup === "skill" && (
                            <>
                                <h2>Skill Proof</h2>
                                <p>Add your GitHub and LinkedIn profile links.</p>
                                <input type="url" placeholder="GitHub URL" />
                                <input type="url" placeholder="LinkedIn URL" />
                                <button className="primary-btn">Submit Links</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

function FindTasks() {
    return (
        <>
            <header className="dash-header">
                <div>
                    <h1>Find Tasks</h1>
                    <p>Browse digital tasks posted by businesses.</p>
                </div>
            </header>

            <div className="content-grid">
                <Task title="Instagram Poster Design" budget="₹1,500" />
                <Task title="Landing Page for Boutique" budget="₹5,000" />
                <Task title="WhatsApp Automation Setup" budget="₹3,000" />
            </div>
        </>
    );
}

function Task({ title, budget }) {
    return (
        <div className="task-card">
            <h4>{title}</h4>
            <p>Client needs fast digital execution.</p>
            <span>Budget: {budget}</span>
            <button>Pitch Now</button>
        </div>
    );
}

function SimplePage({ title, text }) {
    return (
        <>
            <header className="dash-header">
                <div>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </header>

            <section className="panel">
                <h3>{title}</h3>
                <p className="muted-text">This section can be expanded with backend data later.</p>
            </section>
        </>
    );
}
function Settings() {
    return (
        <>
            <header className="dash-header">
                <div>
                    <h1>Settings</h1>
                    <p>Manage account, privacy, visibility and preferences.</p>
                </div>
            </header>

            <section className="settings-grid">
                <div className="settings-card">
                    <h3>Profile Visibility</h3>
                    <p>Control who can discover your freelancer profile.</p>

                    <select>
                        <option>Public - visible to all businesses</option>
                        <option>Limited - visible only after pitching</option>
                        <option>Private - hidden from search</option>
                    </select>
                </div>

                <div className="settings-card">
                    <h3>Privacy Settings</h3>
                    <p>Choose what personal information clients can view.</p>

                    <label>
                        <input type="checkbox" defaultChecked />
                        Show location
                    </label>

                    <label>
                        <input type="checkbox" defaultChecked />
                        Show earnings range
                    </label>

                    <label>
                        <input type="checkbox" />
                        Show online status
                    </label>
                </div>

                <div className="settings-card">
                    <h3>Experience Level</h3>
                    <p>Set your skill level so businesses can match tasks properly.</p>

                    <div className="experience-options">
                        <label>
                            <input type="radio" name="experience" />
                            <strong>Entry</strong>
                            <span>Best for beginners building their first portfolio.</span>
                        </label>

                        <label>
                            <input type="radio" name="experience" defaultChecked />
                            <strong>Intermediate</strong>
                            <span>Good for users with some completed projects.</span>
                        </label>

                        <label>
                            <input type="radio" name="experience" />
                            <strong>Expert</strong>
                            <span>For highly skilled users with strong client reviews.</span>
                        </label>
                    </div>
                </div>

                <div className="settings-card danger-zone">
                    <h3>Account Control</h3>
                    <p>Temporarily disable or permanently delete your account.</p>

                    <button className="outline-btn">Temporarily Disable Account</button>
                    <button className="danger-btn">Delete Account</button>
                </div>
            </section>
        </>
    );
}