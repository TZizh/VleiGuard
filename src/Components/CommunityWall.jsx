import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VleiUserIcon } from "./customs/VleiUserIcon";

// Demo leaderboard data
const leaderboard = [
  { name: "Harare Youth Eco-Club", points: 1280, avatar: "/eco_club1.png" },
  { name: "Seke Mapani Women", points: 1150, avatar: "/eco_club2.png" },
  { name: "Tinashe (Solo Guardian)", points: 980, avatar: "/eco_club3.png" },
];

// Expanded demo posts/stories
const posts = [
  {
    id: 1,
    user: "Fatima, Seke Mapani",
    avatar: "/eco_club2.png",
    content: "Our first wetland cleanup! 20 bags of trash collected and 15 new indigenous trees planted. The stream is looking clearer every day.",
    image: "/full-shot-peasant-woman-working-outdoors.jpg",
    time: "1 day ago",
    points: 80,
  },
  {
    id: 2,
    user: "Harare Youth Eco-Club",
    avatar: "/eco_club1.png",
    content: "Installed new water sensors and spotted 5 rare birds. #WetlandGuardians",
    image: "/great-blue-heron-foraging-in-the-water-geostock.jpg",
    time: "3 days ago",
    points: 60,
  },
  {
    id: 3,
    user: "Tinashe",
    avatar: "/eco_club3.png",
    content: "Spoke at my school about why wetlands matter. Got 3 new volunteers! 💚",
    image: "",
    time: "4 days ago",
    points: 30,
  },
  {
    id: 4,
    user: "Kuda, Chitungwiza",
    avatar: '/mother-son-walking-through-muddy-location.jpg',
    content: "Led a bird-watching tour. 12 kids saw a kingfisher for the first time!",
    image: "/ChatGPT Image Jul 19, 2025, 09_46_18 AM.png",
    time: "6 days ago",
    points: 25,
  },
  {
    id: 5,
    user: "Mukuvisi Guardians",
    avatar: "/fgfg.jpg",
    content: "Helped fix a broken fence to stop illegal dumping. Teamwork wins!",
    image: "/ChatGPT Image Jul 19, 2025, 09_41_24 AM.png",
    time: "7 days ago",
    points: 40,
  },
  {
    id: 6,
    user: "/african-woman-pouring-water-recipient (1).jpg",
    avatar: "/eco_club2.png",
    content: "Donated boots and gloves for next weekend’s wetland clean-up.",
    image: "",
    time: "8 days ago",
    points: 15,
  },
];

export default function CommunityWall() {
  const [postText, setPostText] = useState("");
  const [feed, setFeed] = useState(posts);
  const [menuOpen, setMenuOpen] = useState(false);

  function handlePost(e) {
    e.preventDefault();
    if (!postText.trim()) return;
    setFeed([
      {
        id: feed.length + 1,
        user: "You",
        avatar: "/eco_club1.png",
        content: postText,
        image: "",
        time: "just now",
        points: 10,
      },
      ...feed,
    ]);
    setPostText("");
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f6f8f5]">
      {/* Floating Glass NavBar with Hamburger */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-20">
        <div className="
          mt-2 mx-2 max-w-6xl w-full rounded-xl bg-white/90 px-4 py-3 shadow-md border border-green-100 backdrop-blur-md
          flex items-center justify-between
        ">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vleiguard_logo_no_bg.png" alt="VleiGuard" className="w-9 h-9 rounded" />
            <span className="font-bold text-xl text-[#234445]">VleiGuard</span>
          </Link>
          {/* Hamburger Button - visible on mobile only */}
          <button
            className="sm:hidden flex items-center p-2 ml-2 rounded-lg hover:bg-[#e7f1ec] focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="w-7 h-7 text-[#234445]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
          {/* Nav Links */}
          <nav className={`flex-col sm:flex-row gap-2 sm:gap-6 text-[#234445] font-medium text-base w-full sm:w-auto
            flex 
            ${menuOpen ? 'flex' : 'hidden'} 
            absolute sm:static top-[62px] left-0 right-0 sm:top-auto sm:left-auto sm:right-auto 
            bg-white/95 sm:bg-transparent rounded-xl sm:rounded-none px-4 sm:px-0 py-2 sm:py-0
            shadow-lg sm:shadow-none
            z-20
            sm:flex
          `}>
            <Link to="/explore" className="hover:text-green-700 w-full sm:w-auto text-center py-2 sm:py-0" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link to="/restoration" className="hover:text-green-700 w-full sm:w-auto text-center py-2 sm:py-0" onClick={() => setMenuOpen(false)}>Restoration Hub</Link>
            <Link to="/reports" className="hover:text-green-700 w-full sm:w-auto text-center py-2 sm:py-0" onClick={() => setMenuOpen(false)}>Reports</Link>
            <Link to="/community" className="hover:text-green-700 font-bold w-full sm:w-auto text-center py-2 sm:py-0" onClick={() => setMenuOpen(false)}>Community Wall</Link>
            <Link to="/make-report" className="hover:bg-[#5B8FB9] hover:text-white px-4 py-2 sm:py-1 rounded-lg bg-[#8BC34A] text-white font-semibold transition w-full sm:w-auto text-center" onClick={() => setMenuOpen(false)}>
              Make a Report
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section with ONLY hero background/overlay */}
      <section
        className="w-full relative pt-28 pb-10 md:pt-32 md:pb-16 mb-8"
        style={{
          background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-b-3xl z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center px-2">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Community Wall
            </h1>
            <p className="text-base md:text-lg mb-2 text-[#e7ffe7] font-medium drop-shadow-sm">
              Share your stories, cheer each other on, and climb the eco-points leaderboard!
              Every action—big or small—builds a movement for wetlands.
            </p>
            <div className="mt-4">
              <Link
                to="/"
                className="text-[#e7ffe7] hover:underline text-sm font-semibold"
              >
                ← Back to VleiGuard Home
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <img
              src="/vleiguard_logo.jpg"
              alt="Community"
              className="rounded-2xl shadow-xl w-52 h-52 md:w-56 md:h-56 object-contain bg-white/80 p-4"
            />
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="max-w-6xl mx-auto w-full mb-10 px-2 md:px-0">
        <h2 className="text-2xl font-bold mb-6 text-[#5B8FB9]">Eco-Points Leaderboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaderboard.map((team, idx) => (
            <div key={team.name} className="bg-white/95 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src={team.avatar}
                alt={team.name}
                className="w-16 h-16 object-cover rounded-full border-4 border-[#e7f1ec] mb-2"
              />
              <div className="font-bold text-[#6AA77B]">{team.name}</div>
              <div className="text-xs text-[#836953]">Eco-Points: {team.points}</div>
              <div className="mt-2 text-xs text-gray-400">Rank #{idx + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Post Box */}
      <section className="max-w-2xl mx-auto w-full mb-8 px-1">
        <form className="bg-white/95 rounded-xl shadow p-6 mb-6" onSubmit={handlePost}>
          <h3 className="font-semibold mb-2 text-[#836953]">Share a Story or Update</h3>
          <textarea
            className="w-full border border-[#e7f1ec] rounded p-2 mb-2 focus:outline-green-400"
            rows={3}
            placeholder="What did your group achieve today? (Cleanup, tree planting, wildlife, etc.)"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#8BC34A] hover:bg-[#5B8FB9] text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition"
          >
            Post
          </button>
        </form>
      </section>

      {/* Feed Stories as 2x2 grid */}
      <section className="max-w-6xl mx-auto w-full px-2 mb-16">
        <h2 className="text-xl font-bold mb-4 text-[#234445]">Latest Community Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {feed.map((p) => (
            <div
              key={p.id}
              className="bg-white/95 rounded-2xl shadow-lg p-4 flex gap-4 min-h-[110px]"
            >
              <img
                src={p.avatar}
                alt={p.user}
                className="w-12 h-12 object-cover rounded-full border-4 border-[#e7f1ec] flex-shrink-0"
              />
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold">{p.user}</span>
                  <span className="text-xs text-[#836953]">{p.time}</span>
                  <span className="ml-2 text-xs text-[#6AA77B] font-bold">
                    +{p.points} pts
                  </span>
                </div>
                <div className="mb-1">{p.content}</div>
                {p.image && (
                  <img
                    src={p.image}
                    alt="Post"
                    className="w-full max-w-xs h-28 object-cover rounded-lg mt-2 border-2 border-[#e7f1ec]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Optional: <VleiFooter /> */}
    </div>
  );
}
