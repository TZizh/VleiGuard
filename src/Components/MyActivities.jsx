import React from "react";
import { Link } from "react-router-dom";

// Demo activities (you’d fetch this from your API/user profile)
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
  // add more as you like!
];

export default function MyActivities() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-[#f6f8f5]"
      style={{
        background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        position: "relative",
      }}
    >
      {/* Glassy Floating NavBar */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-20">
        <div className="mt-2 mx-2 max-w-4xl w-full flex flex-col sm:flex-row items-center rounded-xl bg-white/90 px-3 sm:px-6 py-2 sm:py-3 shadow-md border border-green-100 backdrop-blur-md gap-2 sm:gap-0">
          <div className="flex items-center gap-2 flex-shrink-0 mb-1 sm:mb-0">
            <img src="/vleiguard_logo_no_bg.png" alt="VleiGuard" className="w-8 h-8 sm:w-9 sm:h-9 rounded" />
            <span className="font-bold text-lg sm:text-xl text-[#234445]">VleiGuard</span>
          </div>
          <nav className="ml-0 sm:ml-auto flex flex-wrap justify-center gap-5 text-[#234445] font-medium text-base">
            <Link to="/activities" className="hover:underline font-bold">My Activities</Link>
            <Link to="/community" className="hover:underline">Community Wall</Link>
            <Link to="/restoration" className="hover:underline">Restoration Hub</Link>
            <Link to="/explore" className="hover:underline">Explore</Link>
          </nav>
        </div>
      </div>

      <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto pt-24 sm:pt-32 pb-10 px-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#426a3d] mb-7 text-center drop-shadow-lg">
          My Activities
        </h1>

        {activities.length === 0 ? (
          <div className="bg-white/90 rounded-xl shadow-lg p-8 text-center text-[#234445] font-medium">
            You have no activities yet. Start participating to earn Eco-Points!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activities.map(act => (
              <div
                key={act.id}
                className="bg-white/95 rounded-2xl shadow flex flex-col sm:flex-row items-center gap-4 p-4 border border-[#e7f1ec]"
              >
                <img
                  src={act.image}
                  alt={act.type}
                  className="w-full sm:w-28 h-24 object-cover rounded-xl border border-[#e7f1ec] shadow-sm"
                />
                <div className="flex-1">
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
      </div>
    </div>
  );
}
