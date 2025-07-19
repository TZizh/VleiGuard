import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

export default function SponsorDashboard() {
  const [navOpen, setNavOpen] = useState(false);

  // Mock user data
  const user = {
    name: "COP15 Acc",
    recentActivity: 8,
    recentActivityDesc: "reed bundles funded this week",
    myImpact: {
      wetland: "Monavale",
      status: "Improving",
      coords: { lat: -17.793469, lng: 30.972803 },
    },
    ecoPoints: 95,
    activityFeed: [
      {
        id: 1,
        user: { name: "Riverside School", avatar: "/crop-woman-standing-rubber-boots.jpg" },
        text: "earned 10 eco-points",
      },
      {
        id: 2,
        user: { name: "Clean-up", avatar: null },
        text: "A new trash clean-up report submitted for Monavale Wetland",
      },
    ],
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start px-2 pt-10 pb-12"
      style={{
        background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        position: "relative",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Nav Bar */}
        <div className="mb-4 flex items-center justify-between rounded-xl bg-white/90 px-4 py-3 shadow-md border border-green-100 relative">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vleiguard_logo_no_bg.png" alt="VleiGuard" className="w-9 h-9 rounded" />
            <span className="font-bold text-xl text-[#234445]">VleiGuard</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-[#234445] font-medium">
            <Link to="/explore" className="hover:text-green-700">Explore</Link>
            <a href="#" className="hover:text-green-700">#AdoptAWetland</a>
            <Link to="/reports" className="hover:text-green-700">Reports</Link>
            <span className="bg-green-900 text-white/90 px-4 py-1 rounded-lg ml-3 font-semibold">{user.name}</span>
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none text-[#234445] hover:bg-green-50"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Mobile Drawer */}
          {navOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-green-100 flex flex-col z-30 animate-fade-in">
              <Link
                to="/explore"
                className="px-4 py-3 border-b border-green-50 hover:bg-green-50"
                onClick={() => setNavOpen(false)}
              >
                Explore
              </Link>
              <a
                href="#"
                className="px-4 py-3 border-b border-green-50 hover:bg-green-50"
                onClick={() => setNavOpen(false)}
              >
                #AdoptAWetland
              </a>
              <Link
                to="/reports"
                className="px-4 py-3 border-b border-green-50 hover:bg-green-50"
                onClick={() => setNavOpen(false)}
              >
                Reports
              </Link>
              <span className="px-4 py-3 font-semibold text-white bg-green-900 rounded-b-xl">
                {user.name}
              </span>
            </div>
          )}
        </div>

        {/* Headline */}
        <div className="text-center mt-8 mb-8">
          <h1 className="font-extrabold text-3xl md:text-5xl text-white mb-3 tracking-tight drop-shadow-lg">
            WELCOME TO YOUR <br /> SUPPORT DASHBOARD
          </h1>
        </div>

        {/* Responsive Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full mb-9">
          {/* Map Card: spans two rows on the left (md:col-span-2) */}
          <div className="md:col-span-2 row-span-2 rounded-2xl bg-white/95 shadow-xl p-6 flex flex-col items-center justify-center min-h-[320px]">
            <span className="text-xs font-semibold text-[#234445]/70 mb-2">MY IMPACT</span>
            <div className="rounded-xl overflow-hidden w-full h-56 mb-3 flex items-center justify-center bg-green-50 border border-green-100">
              <MapContainer
                center={[user.myImpact.coords.lat, user.myImpact.coords.lng]}
                zoom={15}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", minHeight: "210px" }}
                className="z-0 brightness-105 contrast-105"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={[user.myImpact.coords.lat, user.myImpact.coords.lng]}>
                  <Popup>
                    {user.myImpact.wetland}<br />Status: {user.myImpact.status}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="font-semibold text-[#234445] text-lg">{user.myImpact.wetland}</div>
            <div className="text-xs text-green-700">Status: {user.myImpact.status}</div>
          </div>
          {/* Right column: stacked cards */}
          <div className="rounded-2xl bg-white/95 shadow-lg p-6 flex flex-col items-center mb-4">
            <span className="text-xs font-semibold text-[#234445]/70 mb-2">RECENT ACTIVITY</span>
            <div className="text-4xl font-extrabold text-[#5B8FB9] mb-1">{user.recentActivity}</div>
            <div className="text-base text-[#234445] text-center">{user.recentActivityDesc}</div>
          </div>
          <div className="rounded-2xl bg-white/95 shadow-lg p-6 flex flex-col items-center">
            <span className="text-xs font-semibold text-[#234445]/70 mb-2">#ADOPTAWETLAND</span>
            <div className="text-4xl font-extrabold text-[#8BC34A] mb-1">{user.ecoPoints}</div>
            <div className="text-base text-[#234445] text-center">eco-points</div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white/90 rounded-2xl shadow-md px-6 py-5 flex flex-col md:flex-row gap-4 items-center mb-8 border border-green-50">
          <div className="font-semibold text-base text-[#234445] mb-2 md:mb-0 md:mr-5 w-full md:w-auto">
            ACTIVITY FEED
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            {user.activityFeed.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                {item.user.avatar ? (
                  <img
                    src={item.user.avatar}
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full object-cover border border-green-200 shadow"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-50 border border-green-200 shadow">
                    <User className="text-green-800" size={22} />
                  </div>
                )}
                <div className="text-sm text-[#234445]">{item.user.name}</div>
                <div className="text-xs text-[#234445]/80 ml-2">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white/90 rounded-2xl shadow-md px-6 py-8 my-8 max-w-6xl mx-auto">
          <h2 className="font-bold text-xl text-[#234445] mb-4">Latest Wetland Updates</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Example Update Card */}
            <div className="bg-green-50 rounded-xl p-4 flex-1 shadow">
              <h3 className="font-semibold text-green-900 mb-2">Community Clean-up Success</h3>
              <p className="text-[#234445] text-sm">
                Over 120kg of waste collected at Monavale last weekend. Thanks to sponsor support and local eco-clubs!
              </p>
              <div className="mt-2 text-xs text-green-700">July 2025</div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}
