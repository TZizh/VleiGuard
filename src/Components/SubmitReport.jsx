import React, { useState } from "react";
import { Leaf, LeafyGreen, Camera } from "lucide-react";

const wetlands = [
  "Mabvuku Wetland",
  "Mukuvisi Wetland",
  "Seke Mapani",
  "Upper Manyame",
  // add more as needed
];

const threatTypes = [
  "Sand poaching",
  "Burning",
  "Littering/Dumping",
  "Illegal farming",
  "Other",
];

// Leafy overlay (dense pattern)
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

export default function SubmitReport() {
  const [wetland, setWetland] = useState(wetlands[0]);
  const [threat, setThreat] = useState(threatTypes[0]);
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState(null);

  // For showing a preview
  const [preview, setPreview] = useState(null);
  function handlePhotoChange(e) {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPreview(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }

  return (
    <div className="min-h-screen rounded-3xl mb-6 relative bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] pb-12 font-sans overflow-x-hidden">
      <LucideLeafPatternOverlay />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
        {/* Header */}
        <header className="w-full rounded-t-3xl bg-[#234445] pt-16 pb-10 px-2 text-center shadow-lg mb-5">
          <img
            src="/vleiguard_logo_no_bg.png"
            alt="VleiGuard"
            className="w-16 h-16 mx-auto rounded-2xl bg-white/80 shadow border mb-4"
          />
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-2 tracking-tight drop-shadow">
            Submit a Wetland Report
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-medium max-w-xl mx-auto">
            Help us protect Zimbabwe’s wetlands: quickly flag any threat or concern you see on the ground. 
            <span className="hidden sm:inline"> Your actions help VleiGuard and the community respond faster!</span>
          </p>
        </header>

        {/* Report Form */}
        <form
          className="relative z-10 bg-white/95 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 w-full max-w-xs sm:max-w-md md:max-w-xl flex flex-col gap-6 border border-green-100 backdrop-blur-lg"
        >
          {/* Wetland Selector */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Select Wetland
            </label>
            <select
              className="w-full px-3 py-2 rounded-lg border border-[#e7f1ec] bg-white text-[#234445] font-medium focus:outline-green-300 text-sm sm:text-base"
              value={wetland}
              onChange={e => setWetland(e.target.value)}
            >
              {wetlands.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          {/* Threat Type Selector */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Threat Type
            </label>
            <select
              className="w-full px-3 py-2 rounded-lg border border-[#e7f1ec] bg-white text-[#234445] font-medium focus:outline-green-300 text-sm sm:text-base"
              value={threat}
              onChange={e => setThreat(e.target.value)}
            >
              {threatTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Photo <span className="text-[#8BC34A]">(optional)</span>
            </label>
            <label
              htmlFor="photo-upload"
              className="w-full border-2 border-dashed border-[#e7f1ec] bg-white/80 rounded-lg flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6 cursor-pointer hover:bg-[#e7f1ec] transition"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="w-28 h-20 object-cover rounded-lg shadow mb-2" />
              ) : (
                <Camera className="w-8 h-8 mb-2 text-[#5B8FB9]" />
              )}
              <span className="text-[#234445] font-medium text-xs sm:text-base">
                {photo ? photo.name : "Upload a photo"}
              </span>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>

          {/* Details */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Details
            </label>
            <textarea
              className="w-full rounded-lg px-3 py-2 border border-[#e7f1ec] bg-white focus:outline-green-300 text-sm sm:text-base"
              rows={3}
              placeholder="Add more details about what you saw..."
              value={details}
              onChange={e => setDetails(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#8BC34A] hover:bg-[#426a3d] text-white text-base sm:text-lg font-bold px-6 py-3 rounded-xl mt-2 shadow transition"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
