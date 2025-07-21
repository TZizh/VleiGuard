import React, { useState } from "react";
import { User, AlertTriangle, Video, Map as MapIcon, Leaf, LeafyGreen } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fix marker icons for Vite/CRA
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// --- MAPBOX HELPER: Get static satellite image for coords ---
function getSatelliteImageUrl({ lat, lng }, width = 600, height = 250, zoom = 16) {
  const MAPBOX_TOKEN = "pk.eyJ1IjoidHppemhvdSIsImEiOiJjbWRjdHlsNjkwMTUwMmtzY3JxNHBqOGEyIn0.H152g1JV6dD2awbG43mClw"; // <-- PASTE YOUR TOKEN HERE!
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom}/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

// --- Leafy overlay: Dense pattern
function LucideLeafPatternOverlay({ className = "" }) {
  const pattern = [
    { icon: Leaf, top: "3%", left: "7%", size: 38, rotate: "-14deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "7%", left: "20%", size: 46, rotate: "19deg", opacity: 0.14 },
    { icon: Leaf, top: "8%", left: "80%", size: 41, rotate: "-12deg", opacity: 0.11 },
    { icon: LeafyGreen, top: "12%", left: "64%", size: 42, rotate: "11deg", opacity: 0.14 },
    { icon: Leaf, top: "15%", left: "40%", size: 39, rotate: "8deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "38%", left: "25%", size: 36, rotate: "-9deg", opacity: 0.12 },
    { icon: Leaf, top: "55%", left: "73%", size: 46, rotate: "-19deg", opacity: 0.14 },
    { icon: LeafyGreen, top: "66%", left: "48%", size: 51, rotate: "14deg", opacity: 0.13 },
    { icon: Leaf, top: "86%", left: "83%", size: 32, rotate: "4deg", opacity: 0.11 },
    { icon: LeafyGreen, top: "93%", left: "6%", size: 38, rotate: "17deg", opacity: 0.13 },
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
              color: "#8BC34A",
            }}
          />
        );
      })}
    </div>
  );
}

export default function SponsorDashboard() {
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

  // For satellite image
  const [satLoaded, setSatLoaded] = useState(false);

  return (
    <div className="min-h-screen rounded-3xl mb-6 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-10 font-sans overflow-x-hidden">
      <LucideLeafPatternOverlay />
      {/* --- Hero Section with logo and title --- */}
      <header className="w-full rounded-t-3xl bg-[#234445] pt-14 pb-10 px-2 text-center shadow-lg mb-8">
        <img
          src="/vleiguard_logo_no_bg.png"
          alt="VleiGuard"
          className="w-16 h-16 mx-auto rounded-2xl bg-white/80 shadow border mb-4"
        />
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-2 tracking-tight drop-shadow">
          Sponsor Dashboard
        </h1>
        <p className="text-white/80 text-base sm:text-lg font-medium max-w-xl mx-auto">
          See your real-world impact. Wetlands, IoT, and smart detection—all at a glance.
        </p>
      </header>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-2 sm:px-6">
        {/* Responsive Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full mb-10">
          {/* Map Card */}
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
                    <span className="font-bold">{user.myImpact.wetland}</span>
                    <br />
                    Status: <span className="font-semibold">{user.myImpact.status}</span>
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

        {/* IoT Video Feed & Satellite Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {/* IoT Video Feed Card */}
          <div className="rounded-2xl bg-white/90 shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <Video className="text-[#8BC34A]" />
              <span className="font-bold text-[#234445] text-lg">Wetland IoT Video Feed</span>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow border border-green-100 bg-black/70 mb-2">
              <video
                src="/sample_iot_feed.mp4"
                controls
                muted
                loop
                autoPlay
                className="w-full h-48 object-cover"
                poster="/monavale-storm-water.webp"
              />
            </div>
            <div className="text-xs text-[#234445]/70">
              Last event: <span className="text-green-700">No unauthorized activity detected</span>
            </div>
          </div>

          {/* Satellite Images & Detection Card - LIVE! */}
          <div className="rounded-2xl bg-white/90 shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <MapIcon className="text-[#5B8FB9]" />
              <span className="font-bold text-[#234445] text-lg">Satellite Overview & Smart Detection</span>
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow border border-green-100 bg-gray-200 mb-2 flex items-center justify-center">
              {!satLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200/80 z-10">
                  <span className="text-[#5B8FB9] font-semibold">Loading satellite...</span>
                </div>
              )}
              <img
                src={getSatelliteImageUrl(user.myImpact.coords)}
                alt="Satellite Monavale"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onLoad={() => setSatLoaded(true)}
                onError={() => setSatLoaded(true)}
                style={{ display: satLoaded ? "block" : "none" }}
              />
              <div className="absolute right-10 bottom-6 bg-[#f7ce5b] text-[#836953] px-3 py-1 rounded-full shadow flex items-center gap-1 z-20">
                <AlertTriangle size={16} /> Sand poaching detected
              </div>
            </div>
            <div className="text-xs text-[#234445]/70">
              Detection: <span className="text-[#e57373] font-bold">1 negative event</span> this week
            </div>
          </div>
        </section>

        {/* Latest Wetland Updates */}
        <section className="bg-white/90 rounded-2xl shadow-md px-6 py-8 my-8 max-w-6xl mx-auto">
          <h2 className="font-bold text-xl text-[#234445] mb-4">Latest Wetland Updates</h2>
          <div className="flex flex-col md:flex-row gap-6">
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
