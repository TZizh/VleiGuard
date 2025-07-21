import React from "react";
import { Leaf, LeafyGreen, Award, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// --- Lucide Leaf Overlay ---
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

// --- Demo activities ---
const activities = [
  {
    id: 1,
    type: "Cleanup",
    date: "2025-07-16",
    description: "Collected 20 bags of trash at Mukuvisi Wetland.",
    points: 40,
    wetland: "Mukuvisi Wetland",
    image: "/img_4302.webp",
  },
  {
    id: 2,
    type: "Report",
    date: "2025-07-14",
    description: "Reported sand poaching at Seke Mapani.",
    points: 25,
    wetland: "Seke Mapani",
    image: "/IMG_20210408_103030.jpg",
  },
  {
    id: 3,
    type: "Tree Planting",
    date: "2025-07-10",
    description: "Planted 30 indigenous trees at Upper Manyame.",
    points: 50,
    wetland: "Upper Manyame",
    image: "/monavale-storm-water.webp",
  },
];

// -- Demo stats --
const totalPoints = activities.reduce((sum, a) => sum + a.points, 0);

export default function MyActivities() {
  return (
    <div className="min-h-screen rounded-3xl mb-5 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-20 font-sans overflow-x-hidden">
      <LucideLeafPatternOverlay />

      <div className="relative z-10 max-w-3xl mx-auto w-full px-2 pt-8 pb-16">
        {/* Hero/Summary Section */}
        <section className="w-full rounded-3xl bg-[#234445] px-6 py-10 mb-10 text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
            My Activities
          </h1>
          <p className="text-base md:text-lg mb-2 text-[#e7ffe7] font-medium drop-shadow-sm">
            Track your progress, view your eco-points, and celebrate your impact.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <div className="bg-white/80 rounded-2xl shadow flex flex-col items-center px-6 py-4 min-w-[120px]">
              <Award size={32} className="text-[#8BC34A] mb-1" />
              <div className="text-2xl font-extrabold text-[#234445]">{totalPoints}</div>
              <div className="text-xs text-[#426a3d]">Eco-Points</div>
            </div>
            <div className="bg-white/80 rounded-2xl shadow flex flex-col items-center px-6 py-4 min-w-[120px]">
              <BookOpen size={30} className="text-[#5B8FB9] mb-1" />
              <div className="text-2xl font-extrabold text-[#234445]">{activities.length}</div>
              <div className="text-xs text-[#426a3d]">Activities</div>
            </div>
            <div className="bg-white/80 rounded-2xl shadow flex flex-col items-center px-6 py-4 min-w-[120px]">
              <Calendar size={30} className="text-[#836953] mb-1" />
              <div className="text-xl font-bold text-[#234445]">
                {activities.length ? activities[0].date : "N/A"}
              </div>
              <div className="text-xs text-[#426a3d]">Last Activity</div>
            </div>
          </div>
        </section>

        {/* Activity Cards */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-[#234445]">Your Recent Activities</h2>
          {activities.length === 0 ? (
            <div className="bg-white/90 rounded-xl shadow-lg p-8 text-center text-[#234445] font-medium">
              You have no activities yet. Start participating to earn Eco-Points!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {activities.map(act => (
                <div
                  key={act.id}
                  className="bg-white/95 rounded-2xl shadow flex flex-col items-center gap-4 p-4 border border-[#e7f1ec] hover:scale-[1.01] transition"
                >
                  <img
                    src={act.image}
                    alt={act.type}
                    className="w-full sm:w-28 h-24 object-cover rounded-xl border border-[#e7f1ec] shadow-sm"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-[#e7f1ec] px-2 py-1 rounded text-[#426a3d]">
                        {act.type}
                      </span>
                      <span className="text-xs text-[#836953]">{act.date}</span>
                    </div>
                    <div className="font-semibold mb-1 text-[#234445]">{act.description}</div>
                    <div className="text-xs text-[#5B8FB9] mb-1">
                      Wetland: <span className="font-medium">{act.wetland}</span>
                    </div>
                    <div className="text-xs text-[#8BC34A] font-bold">
                      +{act.points} Eco-Points
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA / Share & Learn More */}
        <section className="w-full mt-12 flex flex-col items-center gap-5">
          <Link
            to="/make-report"
            className="bg-[#8BC34A] hover:bg-green-900 text-white font-bold rounded-xl px-8 py-4 shadow-lg transition text-lg"
          >
            Log a New Activity
          </Link>
          <Link
            to="/community"
            className="text-[#5B8FB9] hover:underline text-base font-semibold"
          >
            See the Community Wall →
          </Link>
        </section>
      </div>
    </div>
  );
}
