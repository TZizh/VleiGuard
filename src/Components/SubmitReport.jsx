import React, { useState } from "react";

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

export default function SubmitReport() {
  const [wetland, setWetland] = useState(wetlands[0]);
  const [threat, setThreat] = useState(threatTypes[0]);
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start"
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
            <a href="/activities" className="hover:underline px-2">Activities</a>
            <a href="#" className="hover:underline px-2">My Points</a>
            <a href="#" className="hover:underline px-2">Explore</a>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen pt-24 sm:pt-32 px-2">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 drop-shadow-lg text-center">
          SUBMIT A REPORT
        </h1>
        <form
          className="bg-white/95 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 w-full max-w-xs sm:max-w-md md:max-w-xl flex flex-col gap-6 border border-green-100 backdrop-blur-lg"
        >
          {/* Wetland Selector */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Select Wetland
            </label>
            <select
              className="w-full px-3 py-2 rounded-lg border border-[#e7f1ec] bg-white text-[#234445] font-medium focus:outline-green-300 text-sm sm:text-base"
              value={wetland}
              onChange={(e) => setWetland(e.target.value)}
            >
              {wetlands.map((w) => (
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
              onChange={(e) => setThreat(e.target.value)}
            >
              {threatTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block font-semibold text-[#234445] mb-2 text-sm sm:text-base">
              Photo
            </label>
            <label
              htmlFor="photo-upload"
              className="w-full border-2 border-dashed border-[#e7f1ec] bg-white/80 rounded-lg flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6 cursor-pointer hover:bg-[#e7f1ec] transition"
            >
              <svg
                className="w-8 h-8 mb-2 text-[#5B8FB9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[#234445] font-medium text-xs sm:text-base">
                {photo ? photo.name : "Upload file"}
              </span>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => setPhoto(e.target.files[0])}
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
            className="bg-[#426a3d] hover:bg-[#234445] text-white text-base sm:text-lg font-bold px-6 py-3 rounded-xl mt-2 shadow transition"
          >
            SUBMIT REPORT
          </button>
        </form>
      </div>
    </div>
  );
}
