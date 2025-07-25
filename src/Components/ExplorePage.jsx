import React from "react";
import { MapPin, AlertTriangle, BookOpen, Award, Leaf, LeafyGreen } from "lucide-react";

// --- Denser, Responsive Lucide Leaf Overlay ---
function LucideLeafPatternOverlay({ className = "" }) {
  // Expanded, denser pattern (mix of Leaf and LeafyGreen)
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

// --- Demo Data ---
const wetlands = [
  {
    name: "Monavale Vlei",
    location: "Harare",
    cover: "/Borrowdale-vlei-wetlands-1024x581.webp",
    description: "One of Zimbabwe's most biodiverse urban wetlands, supporting unique frogs and birds.",
    status: "Restoring",
    alert: "Water levels rising: great progress!",
    progress: 78,
    stories: 3,
  },
  {
    name: "Mukuvisi Wetland",
    location: "Harare",
    cover: "/img_4302.webp",
    description: "Restored by eco-clubs. Water clarity up, 150+ trees planted.",
    status: "Healthy",
    alert: null,
    progress: 100,
    stories: 2,
  },
];

const stories = [
  {
    wetland: "Seke Mapani",
    title: "First Sighting of Blue Heron!",
    content: "Local students spotted a rare bird species after recent clean-up.",
    image: "/great-blue-heron-foraging-in-the-water-geostock.jpg",
    date: "Jul 2025",
  },
  {
    wetland: "Monavale Vlei",
    title: "Floodplain Now Recovered",
    content: "Water returned to 80% of the floodplain, supporting new grass growth.",
    image: "/floodplains-Caprivi-Strip-Namibia.webp",
    date: "Jul 2025",
  },
];

// --- Main Component ---
export default function ExplorePage() {
  return (
    <div className="min-h-screen rounded-3xl mb-5 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-24 font-sans overflow-x-hidden">
      {/* Leaf overlay */}
      <LucideLeafPatternOverlay />

      {/* Main content wrapper for stacking on top of overlay */}
      <div className="relative z-10">

        {/* Header */}
        <header className="w-full bg-[#234445] py-12 text-center text-white mb-12 shadow">
          <h1 className="font-extrabold text-4xl md:text-5xl mb-2 tracking-tight">Explore Zimbabwe’s Wetlands</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover wetlands, track their health, see real-time progress, and read the latest stories.
          </p>
        </header>

        {/* Wetland Discovery Cards */}
        <section className="max-w-6xl mx-auto px-4 mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[#234445]">Wetlands Near You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wetlands.map((w) => (
              <div key={w.name} className="rounded-2xl bg-white/90 shadow-lg border border-green-100 overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={w.cover} alt={w.name} className="w-full h-44 object-cover" />
                  <span className="absolute top-3 left-3 bg-[#8BC34A] text-white text-xs px-3 py-1 rounded-xl shadow">
                    {w.status}
                  </span>
                  {w.alert && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 bg-[#f7ce5b] text-[#836953] text-xs px-2 py-1 rounded shadow">
                      <AlertTriangle size={15} /> {w.alert}
                    </span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[#234445]/70 mb-1">
                    <MapPin size={16} /> <span className="text-xs">{w.location}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-[#234445]">{w.name}</h3>
                  <p className="text-sm text-[#234445]/90 mb-2 flex-1">{w.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Award size={16} className="text-green-700" />
                      <span className="text-xs">{w.progress}% progress</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={16} className="text-blue-700" />
                      <span className="text-xs">{w.stories} stories</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`/wetlands/${w.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="bg-green-700 hover:bg-green-900 text-white text-center font-bold rounded-b-2xl py-3 transition"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Alerts & Progress Section */}
        <section className="max-w-6xl mx-auto px-4 mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[#234445]">Alerts & Progress</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white/90 rounded-xl shadow p-6 flex-1 border-l-4 border-[#8BC34A]">
              <div className="flex items-center gap-2 text-[#8BC34A] mb-2">
                <AlertTriangle size={22} /> <span className="font-semibold">Wetland Alert</span>
              </div>
              <p className="text-[#234445] text-base">
                <b>Monavale:</b> Water clarity up 20% this month!
              </p>
              <div className="mt-2 text-xs text-[#836953]">Updated 2 days ago</div>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 flex-1 border-l-4 border-[#5B8FB9]">
              <div className="flex items-center gap-2 text-[#5B8FB9] mb-2">
                <Award size={22} /> <span className="font-semibold">Restoration Progress</span>
              </div>
              <p className="text-[#234445] text-base">
                <b>Mukuvisi:</b> Restoration complete. New species spotted!
              </p>
              <div className="mt-2 text-xs text-[#836953]">Updated 4 days ago</div>
            </div>
          </div>
        </section>

        {/* Stories Feed */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#234445]">Latest Wetland Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-white/90 rounded-xl shadow-lg border border-green-100 p-5 flex gap-4 items-start">
                <img src={story.image} alt={story.title} className="w-20 h-20 object-cover rounded-xl border" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#8BC34A] mb-1">{story.wetland}</div>
                  <h3 className="font-bold text-lg mb-1 text-[#234445]">{story.title}</h3>
                  <p className="text-[#234445]/90 mb-2 text-sm">{story.content}</p>
                  <div className="text-xs text-[#836953]">{story.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-6xl mx-auto px-4 text-center py-10">
          <a
            href="/signup"
            className="inline-block bg-green-700 hover:bg-green-900 text-white font-bold rounded-xl px-10 py-4 shadow-lg transition text-lg"
          >
            Sign up to get personalized updates & join wetland restoration
          </a>
        </section>
      </div>
    </div>
  );
}
