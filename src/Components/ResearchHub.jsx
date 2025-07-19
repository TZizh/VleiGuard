import React, { useState } from "react";
import { Link } from "react-router-dom";

const sensorStats = [
  { label: "Active Sensors", value: "12" },
  { label: "Data Points Collected", value: "52,100+" },
  { label: "Real-time Alerts Issued", value: "17" },
  { label: "Open Datasets", value: "4" },
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-serif min-h-screen bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#617933] text-[#234445]">
      {/* Floating Glass NavBar with Hamburger */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-20">
        <div className="mt-2 mx-2 max-w-6xl w-full rounded-xl bg-white/90 px-4 py-3 shadow-md border border-green-100 backdrop-blur-md flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vleiguard_logo_no_bg.png" alt="VleiGuard" className="w-9 h-9 rounded" />
            <span className="font-bold text-xl text-[#234445]">VleiGuard</span>
          </Link>
          {/* Hamburger Button (Mobile Only) */}
          <button
            className="sm:hidden flex items-center p-2 ml-2 rounded-lg hover:bg-[#e7f1ec] focus:outline-none"
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
          <nav className="hidden sm:flex gap-6 text-[#234445] font-medium text-base">
            <Link to="/explore" className="hover:text-green-700">Explore</Link>
            <Link to="/restoration" className="hover:text-green-700">Restoration Hub</Link>
            <Link to="/research-hub" className="hover:text-green-700 font-bold">Research Hub</Link>
            <Link to="/reports" className="hover:text-green-700">Reports</Link>
            <Link to="/community" className="hover:text-green-700">Community Wall</Link>
            <Link to="/make-report" className="hover:bg-[#5B8FB9] hover:text-white px-4 py-1 rounded-lg bg-[#8BC34A] text-white font-semibold transition">Make a Report</Link>
          </nav>
          {/* Nav Links - Mobile Drawer */}
          {menuOpen && (
            <div className="absolute top-16 left-0 right-0 w-full bg-white/95 rounded-xl shadow-lg px-6 py-4 flex flex-col gap-3 z-50 sm:hidden">
              <Link to="/explore" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Explore</Link>
              <Link to="/restoration" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Restoration Hub</Link>
              <Link to="/research-hub" className="hover:text-green-700 font-bold w-full text-center py-2" onClick={() => setMenuOpen(false)}>Research Hub</Link>
              <Link to="/reports" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Reports</Link>
              <Link to="/community" className="hover:text-green-700 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Community Wall</Link>
              <Link to="/make-report" className="hover:bg-[#5B8FB9] hover:text-white px-4 py-2 rounded-lg bg-[#8BC34A] text-white font-semibold transition w-full text-center" onClick={() => setMenuOpen(false)}>
                Make a Report
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full relative pt-28 pb-10 md:pt-32 md:pb-16 mb-8"
        style={{
          background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-b-3xl z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center px-2">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">Research & Data Hub</h1>
            <p className="text-base md:text-lg text-white/90 mb-4 font-medium drop-shadow-sm">
              Explore VleiGuard’s open science mission: download real-world wetland datasets, see live stats from our IoT sensors, and help drive impact with data.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-[#e7ffe7] hover:underline text-sm font-semibold"
              >
                ← Back to VleiGuard Home
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/vleiguard_logo.jpg"
              alt="Wetland Analytics"
              className="rounded-2xl shadow-xl w-56 h-56 object-contain bg-white/80 p-4"
            />
          </div>
        </div>
      </section>

      {/* Live Sensor Stats */}
      <section className="max-w-6xl mx-auto py-10 ">
        <h2 className="text-2xl font-bold mb-8 text-[#5B8FB9]">Live Sensor Network</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {sensorStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-[#6AA77B]">{stat.value}</div>
              <div className="text-xs text-[#234445]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Datasets */}
      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-8 text-[#6AA77B]">Download Open Datasets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {datasets.map((d, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
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
                Download CSV
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Data/API info */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="bg-[#e7f1ec] rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold mb-3 text-[#836953]">APIs & Research Collaboration</h3>
          <p className="mb-4 text-base">
            Want live access or want to publish a study? Our REST API (coming soon) and data sharing program supports citizen science and academic research. 
            <br />
            <span className="text-xs text-[#5B8FB9]">
              (Contact us for beta access or custom data requests)
            </span>
          </p>
          <button className="bg-[#836953] text-white px-6 py-2 rounded-xl shadow hover:bg-[#6AA77B] transition text-sm font-semibold">
            Request API Access
          </button>
        </div>
      </section>
    </div>
  );
}
