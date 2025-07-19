import React, { useState } from "react";
import {
  Download,
  MapPin,
  Activity,
  TrendingUp,
  BookOpenCheck,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import VleiFooter from "./VleiFooter";
import { Link } from "react-router-dom";

// Sample data with ecoPoints included in reports
const wetland = {
  name: "Monavale Vlei",
  location: "Harare",
  image: "/Borrowdale-vlei-wetlands-1024x581.webp",
  description:
    "One of Zimbabwe's largest urban wetlands, home to rare bird and frog species.",
  status: "Restoring",
  progress: 74,
  health: "Improving",
  lastReport: "2025-07-19",
  stats: {
    area: "12.3 ha",
    treesPlanted: 1500,
    co2: "220t",
    community: 420,
  },
  reports: [
    {
      id: 1,
      date: "2025-07-19",
      author: "EcoClub Mukuvisi",
      summary:
        "Water quality improved by 15%. New frogs sighted. Trash clean-up completed.",
      tags: ["Water", "Wildlife", "Clean-up"],
      file: "#",
      ecoPoints: 18,
    },
    {
      id: 2,
      date: "2025-06-21",
      author: "ZimWetlands Youth",
      summary: "Planted 250 indigenous trees in buffer zone. Weed removal ongoing.",
      tags: ["Restoration", "Planting"],
      file: "#",
      ecoPoints: 22,
    },
    {
      id: 3,
      date: "2025-06-06",
      author: "Harare Wetland Authority",
      summary:
        "Sewage spill detected, resulting in fish die-off and odor issues in the southern marsh.",
      tags: ["Pollution", "Incident", "Urgent"],
      file: "#",
      ecoPoints: -14,
    },
    {
      id: 4,
      date: "2025-05-30",
      author: "EnviroMon Team",
      summary:
        "Illegal sand mining detected. Alert issued to city authorities. Area flagged for increased patrol.",
      tags: ["Threat", "Mining", "Alert"],
      file: "#",
      ecoPoints: -8,
    },
    {
      id: 5,
      date: "2025-05-10",
      author: "Friends of Monavale",
      summary:
        "New walking trail completed; over 90 community volunteers participated. Wetland awareness campaign launched.",
      tags: ["Community", "Trail", "Awareness"],
      file: "#",
      ecoPoints: 25,
    },
    {
      id: 6,
      date: "2025-04-28",
      author: "BirdLife Zimbabwe",
      summary:
        "Endangered Wattled Crane pair observed nesting. Habitat quality rated as 'good.' Monitoring continues.",
      tags: ["Wildlife", "Birds", "Monitoring"],
      file: "#",
      ecoPoints: 15,
    },
    {
      id: 7,
      date: "2025-04-10",
      author: "Harare Water Dept.",
      summary:
        "Water table readings taken. Moderate recharge after recent rains. No contamination detected.",
      tags: ["Hydrology", "Monitoring"],
      file: "#",
      ecoPoints: 12,
    },
    {
      id: 8,
      date: "2025-03-21",
      author: "Community Scouts",
      summary:
        "Small fire outbreak burned 0.4ha before rains put it out. Area now under observation.",
      tags: ["Fire", "Incident", "Monitoring"],
      file: "#",
      ecoPoints: -6,
    },
    {
      id: 9,
      date: "2025-03-15",
      author: "Eco-Schools",
      summary: "School learners planted 80 new reeds and removed invasive species.",
      tags: ["Education", "Planting"],
      file: "#",
      ecoPoints: 20,
    },
    {
      id: 10,
      date: "2025-02-23",
      author: "Wetland Rangers",
      summary:
        "Weekly patrol: no new dumping detected, signage remains visible. Continued community vigilance advised.",
      tags: ["Patrol", "Clean-up"],
      file: "#",
      ecoPoints: 13,
    },
    {
      id: 11,
      date: "2025-02-04",
      author: "Mukuvisi Residents Assoc.",
      summary: "Dry spell: wetland area shrank by 7%. Drought watch in effect.",
      tags: ["Drought", "Alert", "Climate"],
      file: "#",
      ecoPoints: -10,
    },
  ],
};

// Prepare cumulative data for health trend
const healthTrendData = wetland.reports
  .slice()
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .reduce((acc, curr, idx) => {
    const prev = idx === 0 ? 0 : acc[idx - 1].points;
    acc.push({
      date: curr.date,
      points: prev + curr.ecoPoints,
    });
    return acc;
  }, []);

export default function WetlandReportPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] font-sans relative">
      {/* Floating Glass NavBar with Hamburger */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-20">
        <div className="mt-2 mx-2 max-w-6xl w-full rounded-xl bg-white/90 px-4 py-3 shadow-md border border-green-100 backdrop-blur-md flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vleiguard_logo_no_bg.png" alt="VleiGuard" className="w-9 h-9 rounded" />
            <span className="font-bold text-xl text-[#234445]">VleiGuard</span>
          </Link>
          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden flex items-center p-2 ml-2 rounded-lg hover:bg-[#e7f1ec] focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(open => !open)}
          >
            <svg className="w-7 h-7 text-[#234445]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex gap-6 text-[#234445] font-medium text-base">
            <Link to="/explore" className="hover:text-green-700">Explore</Link>
            <Link to="/restoration-hub" className="hover:text-green-700">Restoration Hub</Link>
            <Link to="/reports" className="hover:text-green-700 font-bold">Reports</Link>
            <Link to="/research-hub" className="hover:text-green-700">Research Hub</Link>
            <Link to="/community" className="hover:text-green-700">Community</Link>
            <Link to="/make-report" className="hover:bg-[#5B8FB9] hover:text-white px-4 py-2 rounded-lg bg-[#8BC34A] text-white font-semibold transition">
              Make a Report
            </Link>
          </nav>
          {/* Nav Links - Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-16 left-0 right-0 w-full bg-white/95 rounded-xl shadow-lg px-6 py-4 flex flex-col gap-3 z-50 md:hidden">
              <Link to="/explore" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Explore</Link>
              <Link to="/restoration-hub" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Restoration Hub</Link>
              <Link to="/reports" className="hover:text-green-700 font-bold w-full text-center py-2" onClick={() => setMenuOpen(false)}>Reports</Link>
              <Link to="/research-hub" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Research Hub</Link>
              <Link to="/community" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Community</Link>
              <Link to="/make-report" className="hover:bg-[#5B8FB9] hover:text-white px-4 py-2 rounded-lg bg-[#8BC34A] text-white font-semibold transition w-full text-center" onClick={() => setMenuOpen(false)}>
                Make a Report
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 pt-24">
        {/* Banner */}
        <section className="relative w-full h-40 sm:h-56 md:h-80 flex items-end bg-[#8BC34A]/30 mb-10 sm:mb-12 md:mb-16">
          <img
            src={wetland.image}
            alt={wetland.name}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-b-2xl brightness-90"
          />
          <div className="relative z-10 bg-[#234445]/70 backdrop-blur-md text-white w-full p-4 sm:p-6 rounded-b-2xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <div>
                <h1 className="font-extrabold text-lg sm:text-2xl md:text-4xl mb-1">
                  {wetland.name}
                </h1>
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-[#b5e655] mb-1">
                  <MapPin size={16} /> {wetland.location}
                </div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base">
                  {wetland.description}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                <span className="bg-[#8BC34A]/90 text-white px-3 sm:px-4 py-1 rounded-xl font-bold text-xs sm:text-sm">
                  {wetland.status}
                </span>
                <span className="bg-[#5B8FB9]/80 px-3 sm:px-4 py-1 rounded-xl font-semibold text-xs sm:text-sm">
                  {wetland.progress}% restored
                </span>
                <span className="bg-white/70 text-[#234445] px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm font-medium">
                  Health: {wetland.health}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* At-a-glance Stats */}
        <section className="max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <StatCard
              label="Wetland Area"
              value={wetland.stats.area}
              icon={<MapPin className="text-green-700" />}
            />
            <StatCard
              label="Trees Planted"
              value={wetland.stats.treesPlanted}
              icon={<Activity className="text-[#8BC34A]" />}
            />
            <StatCard
              label="CO₂ Captured"
              value={wetland.stats.co2}
              icon={<TrendingUp className="text-[#5B8FB9]" />}
            />
            <StatCard
              label="Community Engaged"
              value={wetland.stats.community}
              icon={<BookOpenCheck className="text-[#836953]" />}
            />
          </div>
        </section>

        {/* Health Trend Graph */}
        <section className="max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
          <div className="bg-white rounded-xl shadow p-3 sm:p-5 md:p-7 text-center flex flex-col items-center">
            <div className="font-bold mb-2 text-[#234445] text-base sm:text-lg">
              Wetland Health Trend
            </div>
            <div className="w-full h-40 sm:h-48 md:h-56 mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={healthTrendData}
                  margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#c8ec7e" stopOpacity={0.07} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "#836953" }}
                  />
                  <YAxis tick={{ fontSize: 11, fill: "#836953" }} />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.13} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="points"
                    stroke="#8BC34A"
                    fill="url(#colorEco)"
                    strokeWidth={3}
                    dot={{
                      r: 3,
                      stroke: "#617933",
                      strokeWidth: 1,
                      fill: "#fff",
                    }}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <span className="text-xs text-[#836953]">
              Last updated: {wetland.lastReport}
            </span>
          </div>
        </section>

        {/* Reports Table */}
        <section className="max-w-5xl mx-auto mb-12 sm:mb-16 px-1 sm:px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5 gap-3 sm:gap-0">
            <h2 className="font-bold text-base sm:text-xl text-[#234445]">
              Recent Wetland Reports
            </h2>
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-900 text-white px-3 sm:px-4 py-2 rounded-xl shadow font-medium text-xs sm:text-sm">
              <Download size={18} /> Download All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] sm:min-w-full bg-white rounded-xl shadow-md text-xs sm:text-sm">
              <thead>
                <tr className="text-left text-[#234445] uppercase bg-[#ddf8b2]">
                  <th className="py-2 px-2 sm:py-3 sm:px-4">Date</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4">Summary</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4">By</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4">Tags</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4">EcoPoints</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4">Download</th>
                </tr>
              </thead>
              <tbody>
                {wetland.reports.map((r) => (
                  <tr
                    key={r.id}
                    className="border-t border-[#f3f8ee] hover:bg-[#f6f8f5]"
                  >
                    <td className="py-2 px-2 sm:py-3 sm:px-4 font-semibold">
                      {r.date}
                    </td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4">{r.summary}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4">{r.author}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {r.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#e7f1ec] text-[#234445] text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td
                      className={`py-2 px-2 sm:py-3 sm:px-4 font-bold ${
                        r.ecoPoints < 0
                          ? "text-[#e57373]"
                          : "text-[#8BC34A]"
                      }`}
                    >
                      {r.ecoPoints}
                    </td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4">
                      <a
                        href={r.file}
                        className="inline-flex items-center gap-1 text-green-700 hover:underline text-xs"
                        download
                      >
                        <Download size={15} /> PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* Footer always at the bottom */}
      <VleiFooter />
    </div>
  );
}

// Simple stat card
function StatCard({ label, value, icon }) {
  return (
    <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-3 sm:p-5 border border-green-100">
      <div className="mb-2">{icon}</div>
      <div className="text-lg sm:text-2xl font-bold text-[#234445]">{value}</div>
      <div className="text-[11px] sm:text-xs text-[#234445]/60 font-medium mt-1">
        {label}
      </div>
    </div>
  );
}
