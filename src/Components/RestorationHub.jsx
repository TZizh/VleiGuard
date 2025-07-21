import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Leaf, LeafyGreen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import VleiFooter from "./VleiFooter";

// Fix for marker icons (Vite/CRA)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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

// --- Demo Data ---
const wetlandsDemo = [
  {
    id: 1,
    name: "Mukuvisi Wetland",
    location: "Harare",
    status: "Restoring",
    adopted: true,
    hectares: 5,
    lat: -17.824858,
    lng: 31.053028,
    image: "/img_4302.webp",
    progress: 80,
    activities: [
      { date: "2025-07-05", action: "Tree planting (1,000 trees)", by: "Harare Eco-Club" },
      { date: "2025-06-21", action: "Water quality sensors installed", by: "VleiGuard Team" },
      { date: "2025-06-10", action: "Cleanup day", by: "Local community" },
    ],
  },
  {
    id: 2,
    name: "Seke Mapani",
    location: "Chitungwiza",
    status: "Adoptable",
    adopted: false,
    hectares: 2,
    lat: -17.995145,
    lng: 31.059573,
    image: "/IMG_20210408_103030.jpg",
    progress: 30,
    activities: [
      { date: "2025-07-09", action: "Community survey started", by: "Youth volunteers" },
    ],
  },
  {
    id: 3,
    name: "Upper Manyame",
    location: "Domboshava",
    status: "Threatened",
    adopted: false,
    hectares: 4,
    lat: -17.6830,
    lng: 31.2000,
    image: "/monavale-storm-water.webp",
    progress: 10,
    activities: [],
  },
];

const communityComments = [
  {
    id: 1,
    user: "Rufaro G.",
    time: "1 hour ago",
    text: "Today our team removed 5 sacks of litter from Seke Mapani. Proud of our youth volunteers!",
    wetland: "Seke Mapani",
  },
  {
    id: 2,
    user: "GreenFuture Club",
    time: "Yesterday",
    text: "Planning a birdwatching walk at Upper Manyame next Saturday. Join us!",
    wetland: "Upper Manyame",
  },
  {
    id: 3,
    user: "Farai N.",
    time: "2 days ago",
    text: "Saw new reeds sprouting in Mukuvisi Wetland! Restoration is working.",
    wetland: "Mukuvisi Wetland",
  },
];

export default function RestorationHub() {
  const [selected, setSelected] = useState(wetlandsDemo[0]);
  const [activeComment, setActiveComment] = useState(0);
  const navigate = useNavigate();

  // Simple auto-rotate for community card (change every 7s)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComment((i) => (i + 1) % communityComments.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen rounded-3xl mb-5 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-20 font-sans overflow-x-hidden">
      {/* Leaf overlay */}
      <LucideLeafPatternOverlay />

      <div className="relative z-10">
        {/* Hero/Heading + Map */}
        <section className="w-full bg-[#234445] rounded-t-3xl px-4 py-12 md:py-14 mb-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Restoration Hub
            </h1>
            <p className="text-base md:text-lg mb-2 text-[#e7ffe7] font-medium drop-shadow-sm">
              Track progress, adopt a wetland, and join Zimbabwe’s restoration movement.<br />
              Each zone below is a story in progress—click to explore or get involved!
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="text-[#e7ffe7] hover:underline text-sm font-semibold"
              >
                ← Back to VleiGuard Home
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full max-w-xs md:max-w-md h-52 md:h-60 rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white/40">
              <MapContainer
                center={[-17.85, 31.05]}
                zoom={9}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap contributors'
                />
                {wetlandsDemo.map(w => (
                  <Marker key={w.id} position={[w.lat, w.lng]}>
                    <Popup>
                      <span className="font-bold">{w.name}</span>
                      <br />
                      {w.location}
                      <br />
                      Status: <span className="font-semibold">{w.status}</span>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </section>

        {/* Wetlands List Section */}
        <section className="max-w-6xl mx-auto w-full px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {wetlandsDemo.map((w) => (
            <div
              key={w.id}
              className={`bg-white/95 rounded-2xl shadow-lg p-4 cursor-pointer border-2 transition-all flex flex-col hover:scale-[1.025] min-h-[310px]
                ${selected.id === w.id
                  ? "border-[#5B8FB9] ring-2 ring-[#5B8FB9] shadow-xl"
                  : "border-transparent hover:border-[#8BC34A]"}
              `}
              onClick={() => setSelected(w)}
            >
              <img
                src={w.image}
                alt={w.name}
                className="w-full h-36 md:h-40 object-cover rounded-lg mb-3 border border-[#e7f1ec] shadow-sm"
              />
              <h2 className="text-base md:text-xl font-bold mb-1">{w.name}</h2>
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-1">
                <span className="bg-[#e7f1ec] rounded px-2 py-1">{w.location}</span>
                <span
                  className={`rounded px-2 py-1
                    ${w.status === "Restoring"
                      ? "bg-[#8BC34A]/90 text-white"
                      : w.status === "Adoptable"
                      ? "bg-[#F9C784]/80 text-[#836953]"
                      : "bg-[#e57373] text-white"
                    }
                  `}
                >
                  {w.status}
                </span>
              </div>
              <div className="mb-2 text-xs text-[#234445]/60">Size: {w.hectares} ha</div>
              <div className="h-2 w-full rounded bg-[#e7f1ec] mb-3 overflow-hidden">
                <div
                  className={`h-2 rounded transition-all
                    ${w.progress > 70
                      ? "bg-gradient-to-r from-[#5B8FB9] via-[#8BC34A] to-[#d6ffd6]"
                      : "bg-[#8BC34A]"}
                  `}
                  style={{ width: `${w.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                {w.adopted ? (
                  <span className="text-[#5B8FB9] text-xs font-bold">Adopted ✓</span>
                ) : (
                  <a
                    href="#"
                    className="bg-[#8BC34A] hover:bg-[#5B8FB9] text-white text-xs font-semibold px-3 py-1 rounded-xl transition"
                  >
                    Adopt this Wetland
                  </a>
                )}
                <button
                  className="text-xs underline text-[#5B8FB9] hover:text-[#234445] ml-2"
                  onClick={() => setSelected(w)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Community Wall / Reports Section */}
        <section className="w-full max-w-4xl mx-auto mb-12">
          <div className="rounded-3xl bg-white/90 shadow-xl border border-green-50 px-6 py-7 flex flex-col md:flex-row gap-7 items-center relative">
            <div className="absolute left-6 top-4 text-green-200 text-4xl select-none hidden md:block">“</div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="text-[#234445] font-semibold text-lg md:text-xl mb-2">Community Wall</div>
              <div className="text-base md:text-lg text-[#234445]/90 font-medium mb-2 italic">
                "{communityComments[activeComment].text}"
              </div>
              <div className="text-xs text-[#5B8FB9] mb-2">
                — {communityComments[activeComment].user} <span className="text-[#234445]/60">({communityComments[activeComment].time}, {communityComments[activeComment].wetland})</span>
              </div>
              <button
                onClick={() => navigate("/community")}
                className="mt-2 bg-[#5B8FB9] hover:bg-[#8BC34A] text-white px-5 py-2 rounded-lg shadow font-semibold text-sm transition"
              >
                Visit Community Wall
              </button>
            </div>
          </div>
        </section>

        {/* Selected Wetland Details */}
        <section className="max-w-4xl mx-auto w-full px-2 md:px-0 mb-10">
          <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-7 items-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full md:w-56 rounded-xl object-cover border-4 border-[#e7f1ec] shadow mb-4 md:mb-0"
              />
              <div className="flex-1 w-full">
                <h2 className="text-lg md:text-3xl font-extrabold mb-2">{selected.name}</h2>
                <div className="mb-2 text-[#5B8FB9] font-semibold">{selected.location}</div>
                <div className="mb-4">
                  <span
                    className={`rounded px-2 py-1 text-xs mr-2
                      ${selected.status === "Restoring"
                        ? "bg-[#8BC34A]/90 text-white"
                        : selected.status === "Adoptable"
                        ? "bg-[#F9C784]/80 text-[#836953]"
                        : "bg-[#e57373] text-white"
                      }
                    `}
                  >
                    {selected.status}
                  </span>
                  <span className="ml-1 text-xs text-[#234445]/80">Hectares: {selected.hectares}</span>
                </div>
                <h3 className="font-semibold mb-2">Recent Activities</h3>
                {selected.activities.length === 0 ? (
                  <div className="text-xs text-gray-400">No activities reported yet.</div>
                ) : (
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {selected.activities.map((a, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{a.date}:</span> {a.action}
                        <span className="ml-1 text-[#5B8FB9] font-medium">({a.by})</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5">
                  <button
                    className={`
                      bg-[#8BC34A] hover:bg-[#5B8FB9] text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition
                      ${selected.adopted ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                    disabled={selected.adopted}
                  >
                    {selected.adopted ? "Already Adopted" : "Adopt This Wetland"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      
    </div>
  );
}
