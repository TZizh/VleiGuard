import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, LeafyGreen } from "lucide-react";
import { VleiUserIcon } from "./customs/VleiUserIcon";

// --- Denser Lucide Leaf Overlay ---
function LucideLeafPatternOverlay({ className = "" }) {
  const pattern = [
    { icon: Leaf, top: "3%", left: "7%", size: 42, rotate: "-14deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "7%", left: "22%", size: 54, rotate: "19deg", opacity: 0.14 },
    { icon: Leaf, top: "5%", left: "36%", size: 38, rotate: "-9deg", opacity: 0.12 },
    { icon: LeafyGreen, top: "9%", left: "61%", size: 51, rotate: "7deg", opacity: 0.13 },
    { icon: Leaf, top: "8%", left: "83%", size: 47, rotate: "-18deg", opacity: 0.14 },
    { icon: LeafyGreen, top: "16%", left: "15%", size: 42, rotate: "11deg", opacity: 0.13 },
    { icon: Leaf, top: "19%", left: "32%", size: 60, rotate: "18deg", opacity: 0.15 },
    { icon: LeafyGreen, top: "22%", left: "60%", size: 56, rotate: "14deg", opacity: 0.13 },
    { icon: Leaf, top: "24%", left: "82%", size: 36, rotate: "7deg", opacity: 0.13 },
    { icon: Leaf, top: "32%", left: "10%", size: 54, rotate: "-5deg", opacity: 0.14 },
    { icon: LeafyGreen, top: "37%", left: "26%", size: 38, rotate: "11deg", opacity: 0.13 },
    { icon: Leaf, top: "48%", left: "30%", size: 64, rotate: "8deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "43%", left: "50%", size: 46, rotate: "-10deg", opacity: 0.12 },
    { icon: Leaf, top: "38%", left: "76%", size: 48, rotate: "-15deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "60%", left: "55%", size: 52, rotate: "22deg", opacity: 0.11 },
    { icon: Leaf, top: "56%", left: "69%", size: 45, rotate: "-12deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "65%", left: "25%", size: 38, rotate: "18deg", opacity: 0.14 },
    { icon: Leaf, top: "63%", left: "80%", size: 54, rotate: "-17deg", opacity: 0.12 },
    { icon: LeafyGreen, top: "70%", left: "80%", size: 44, rotate: "-10deg", opacity: 0.12 },
    { icon: Leaf, top: "73%", left: "58%", size: 36, rotate: "14deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "80%", left: "18%", size: 48, rotate: "-19deg", opacity: 0.14 },
    { icon: Leaf, top: "82%", left: "35%", size: 42, rotate: "8deg", opacity: 0.14 },
    { icon: LeafyGreen, top: "91%", left: "72%", size: 56, rotate: "16deg", opacity: 0.13 },
    { icon: Leaf, top: "93%", left: "6%", size: 50, rotate: "-17deg", opacity: 0.13 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 w-full h-full select-none z-0 ${className}`}>
      {pattern.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Icon
            key={idx}
            size={item.size}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              opacity: item.opacity,
              transform: `rotate(${item.rotate})`,
              color: "#79b93c",
            }}
          />
        );
      })}
    </div>
  );
}

// --- Demo leaderboard data ---
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
    user: "african-woman-pouring-water-recipient",
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
    <div className="min-h-screen rounded-3xl mb-5 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-24 font-sans overflow-x-hidden">
      {/* Leaf overlay */}
      <LucideLeafPatternOverlay />

      <div className="relative z-10">
        {/* Hero/Heading Section */}
        <section className="w-full bg-[#234445] rounded-t-3xl px-4 py-12 md:py-14 mb-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Community Wall
            </h1>
            <p className="text-base md:text-lg mb-3 text-[#e7ffe7] font-medium drop-shadow-sm">
              Share your stories, cheer each other on, and climb the eco-points leaderboard!
              Every action—big or small—builds a movement for wetlands.
            </p>
            <div className="mt-2">
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
              src="/vleiguard_logo_no_bg.png"
              alt="Community"
              className="rounded-2xl shadow-xl w-40 h-40 md:w-52 md:h-52 object-contain bg-white/80 p-3"
            />
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

        {/* Feed Stories */}
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
      </div>
    </div>
  );
}
