import React from "react";
import { Link } from "react-router-dom";
import { Leaf, LeafyGreen, BarChart2, Database, AlertTriangle, Wifi, FileDown, Users } from "lucide-react";

// --- Leaf Overlay ---
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

const sensorStats = [
  { label: "Active Sensors", value: "12", icon: <Wifi /> },
  { label: "Data Points Collected", value: "52,100+", icon: <Database /> },
  { label: "Real-time Alerts Issued", value: "17", icon: <AlertTriangle /> },
  { label: "Open Datasets", value: "4", icon: <BarChart2 /> },
  { label: "Unique Volunteers", value: "72", icon: <Users /> },
];

const datasets = [
  {
    name: "Wetland Water Quality – Mukuvisi",
    desc: "Monthly water pH, turbidity, and nitrate data (2024–2025)",
    download: "#",
    updated: "2025-07-14",
  },
  {
    name: "Biodiversity Counts – Upper Manyame",
    desc: "Quarterly counts of birds, amphibians, and insects",
    download: "#",
    updated: "2025-06-30",
  },
  {
    name: "Restoration Activity Log – All Sites",
    desc: "All reported activities, including replanting and cleanups",
    download: "#",
    updated: "2025-07-11",
  },
  {
    name: "Sensor Alert Log",
    desc: "All alerts issued by IoT sensors, with location & response",
    download: "#",
    updated: "2025-07-12",
  },
];

export default function ResearchHub() {
  return (
    <div className="min-h-screen rounded-3xl mb-5 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-20 font-sans overflow-x-hidden">
      <LucideLeafPatternOverlay />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-3 pt-10 pb-16">

        {/* Hero Section */}
        <section className="w-full rounded-3xl bg-[#234445] px-6 py-10 mb-12 text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
            Research & Data Hub
          </h1>
          <p className="text-base md:text-lg mb-2 text-[#e7ffe7] font-medium drop-shadow-sm">
            Open science, real-time data, and a collaborative platform for Zimbabwe's wetlands.
            Download datasets, view live stats, and contribute to real-world environmental impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-7">
            <Link to="/make-report"
              className="bg-[#8BC34A] hover:bg-green-900 text-white font-bold rounded-xl px-7 py-3 shadow-lg transition text-lg"
            >
              Share Your Data / Report
            </Link>
            <Link to="/"
              className="text-[#e7ffe7] hover:underline text-base font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        {/* Live Sensor & Analytics Cards */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-bold mb-7 text-[#5B8FB9]">Live Sensor & Community Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sensorStats.map((stat, idx) => (
              <div key={idx} className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center gap-2">
                <div className="text-3xl mb-2 text-[#8BC34A]">{stat.icon}</div>
                <div className="text-2xl font-extrabold text-[#234445]">{stat.value}</div>
                <div className="text-xs text-[#426a3d] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Highlights Section */}
        <section className="w-full mb-12">
          <h2 className="text-xl font-bold mb-5 text-[#234445]">Recent Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-[#8BC34A] mb-2">Sensor Alert Trends</h3>
              <div className="mb-2 text-[#234445]">14% more alerts issued this month (mostly water level rise).</div>
              <div className="text-xs text-[#836953]">Trend: Increasing community response time.</div>
            </div>
            <div className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-[#5B8FB9] mb-2">Top Data Contributors</h3>
              <div className="mb-2 text-[#234445]">Eco-Club Harare, Upper Manyame Youth, and 3 solo guardians uploaded new observations this week.</div>
              <div className="text-xs text-[#836953]">Keep your sensors connected for live points!</div>
            </div>
          </div>
        </section>

        {/* Downloadable Datasets */}
        <section className="w-full mb-14">
          <h2 className="text-2xl font-bold mb-8 text-[#6AA77B]">Download Open Datasets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {datasets.map((d, idx) => (
              <div key={idx} className="bg-white/95 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-[#5B8FB9] mb-1">{d.name}</div>
                  <div className="text-sm mb-2">{d.desc}</div>
                  <div className="text-xs text-[#836953] mb-4">
                    Last updated: {d.updated}
                  </div>
                </div>
                <a
                  href={d.download}
                  className="inline-block bg-[#6AA77B] text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-[#5B8FB9] transition text-sm text-center"
                  download
                >
                  <FileDown className="inline mr-2 mb-1" size={18} />
                  Download CSV
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Data/API info */}
        <section className="w-full mb-10">
          <div className="bg-[#e7f1ec] rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-3 text-[#836953]">APIs & Research Collaboration</h3>
            <p className="mb-4 text-base">
              Want to build your own dashboard or run data science experiments? Our REST API (coming soon) and data sharing program support citizen science and academic research.
              <br />
              <span className="text-xs text-[#5B8FB9]">
                (Contact us for beta access or custom data requests)
              </span>
            </p>
            <button className="bg-[#836953] text-white px-6 py-2 rounded-xl shadow hover:bg-[#8BC34A] transition text-sm font-semibold">
              Request API Access
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
