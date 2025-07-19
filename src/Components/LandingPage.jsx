import React, { useRef } from "react";
import VleiNavbar from "./LandingPageNavbar";
import CreatorsCard from "./Creators";
// import Lottie from "lottie-react";
// import wetlandAnim from "./anim/Transparent BG Oleg Orin's Animation.json";

export default function LandingPage() {
  // Ref for the next section
  const nextSectionRef = useRef(null);

  // Smooth scroll handler
  const scrollToNextSection = (e) => {
    e.preventDefault();
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden w-full">
      {/* Hero Section with background */}
      <section
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          minHeight: "100vh",
          background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        }}
      >
        {/* Overlay only on hero */}
          <div className="absolute inset-0 bg-[#234445]/60 backdrop-blur-[4px] z-0 pointer-events-none" />

          {/* Fading gradient at the bottom of hero, now much shorter */}
          <div
            className="absolute left-0 right-0 bottom-0 h-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(35,68,69,0) 0%, #ddf8b2 50%)"
            }}
          />


        {/* Navbar */}
        <VleiNavbar />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 pt-25 md:pt-40 pb-16 text-center">
          {/* Headline */}
          <h1 className="font-extrabold text-2xl xs:text-3xl md:text-5xl text-white mb-3 drop-shadow-lg leading-tight">
            PROTECTING WETLANDS.<br />EMPOWERING COMMUNITIES.
          </h1>
          <p className="text-base xs:text-lg md:text-2xl text-white/90 max-w-xl mx-auto mb-8 md:mb-12">
            Join the movement. Together, we can restore and safeguard Zimbabwe’s precious vleis and mapani for generations to come.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mb-10">
            <button
              onClick={scrollToNextSection}
              className="bg-green-700 hover:bg-green-900 text-white font-bold rounded-xl px-8 py-3 shadow-lg transition text-lg"
            >
              Get Involved
            </button>
            <a
              href="/sponsor"
              className="bg-white text-green-900 hover:bg-green-100 font-bold rounded-xl px-8 py-3 shadow-lg transition text-lg"
            >
              Sponsor a Wetland
            </a>
          </div>
          {/* Animated Chevron Arrow */}
          <button
            aria-label="Scroll to next section"
            onClick={scrollToNextSection}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 z-30 flex flex-col items-center group"
          >
            <span className="animate-bounce-slow">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M12 18L21 27L30 18"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sr-only">Scroll down</span>
          </button>
        </div>
      </section>

      {/* NEXT SECTION: App Routes Cards (no overlay here) */}
      <section
        ref={nextSectionRef}
        className="w-full bg-white min-h-[55vh] flex flex-col bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1]
 items-center justify-center py-16 px-4"
      >
        <h2 className="font-bold text-2xl md:text-3xl mb-10 text-[#234445]">
          Explore VleiGuard’s Community Hubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <RouteCard
            title="Restoration Hub"
            description="Adopt zones, fund restoration, and track real impact on the wetlands map."
            link="/restoration"
            color="from-[#8BC34A] via-[#b4d788] to-[#8BC34A]"
            borderColor="border-[#617933]"
            shadow="shadow-[#617933]"
          />
          <RouteCard
            title="Sponsor Dashboard"
            description="Get personalized progress, before/after photos, and impact updates for every wetland you support."
            link="/sponsor"
            color="from-[#8BC34A] via-[#c8ec7e] to-[#8BC34A]"
            borderColor="border-[#617933]"
            shadow="shadow-[#617933]"
          />
          <RouteCard
            title="Community Wall"
            description="See stories, photos, and achievements from local eco-clubs and wetland protectors."
            link="/community"
            color="from-[#8BC34A] via-[#b4d788] to-[#8BC34A]"
            borderColor="border-[#617933]"
            shadow="shadow-[#617933]"
          />
          <RouteCard
            title="Research Hub"
            description="Access maps, sensors, and scientific resources about wetlands and biodiversity."
            link="/research"
            color="from-[#8BC34A] via-[#c8ec7e] to-[#8BC34A]"
            borderColor="border-[#617933]"
            shadow="shadow-[#617933]"
          />
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        className="w-full min-h-[45vh] flex flex-col md:flex-row items-center justify-center px-4 py-16 bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e]"
      >
        {/* Optional illustration or icon */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/vleiguard_logo_no_bg.png" // Change to your mission/hero image if you have one!
            alt="Wetland Protection"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl rounded-2xl bg-white/60 p-2"
          />
        </div>
        {/* Text content */}
        <div className="md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#234445] mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[#234445] max-w-2xl mb-4">
            <b>VleiGuard</b> exists to protect, restore, and celebrate Zimbabwe’s wetlands by putting powerful digital tools in the hands of local champions.
          </p>
          <ul className="list-disc text-left pl-6 space-y-2 text-[#234445]/90 font-medium">
            <li>
              <span className="font-bold text-green-800">Protect Nature:</span> Early warning, rapid response, and long-term monitoring with AI and IoT.
            </li>
            <li>
              <span className="font-bold text-green-800">Empower Communities:</span> Training, eco-jobs, and recognition for youth, women, and rural families.
            </li>
            <li>
              <span className="font-bold text-green-800">Transparency & Impact:</span> Public dashboards, sponsor reports, and science-driven metrics.
            </li>
            <li>
              <span className="font-bold text-green-800">Inspire Action:</span> Stories, gamified participation, and open data for real change—one wetland at a time.
            </li>
          </ul>
        </div>
        
      </section>

      
      <section
  className="w-full min-h-[45vh] flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16 bg-gradient-to-b from-[#c8ec7e] via-[#b5e655] to-[#617933]"
>
  {/* Creators Card (takes half on desktop, full width on mobile) */}
  <div className="flex-1 w-full max-w-2xl">
    <CreatorsCard />
  </div>

  {/* Powered by Card */}
  <div className="flex-1 w-full max-w-md flex flex-col items-center bg-black/20 mb-7 rounded-2xl shadow-lg border border-green-100 p-6">
    <span className="text-xs font-bold text-green-800 mb-2 tracking-wide uppercase">
      Powered by
    </span>
    <img
      src="/cop15.png" // Put your COP15 logo in public/
      alt="COP15 Hackathon Host"
      className="w-28 h-28 rounded-full object-contain shadow mb-2 border-2 border-green-200 bg-white"
    />
    <div className="text-center text-green-900 font-semibold text-lg">
      COP15 Africa Youth Biodiversity Hackathon
    </div>
    <div className="text-white/80 mt-1 text-xs">
      Building tomorrow’s solutions for wetlands & climate
    </div>
  </div>
</section>

      

      {/* Tailwind animation for the arrow */}
      <style>
        {`
          .animate-bounce-slow {
            animation: bounce 1.5s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(15px);}
          }
        `}
      </style>
    </div>
  );
}

// RouteCard component for hub cards
function RouteCard({ title, description, link, color, borderColor, shadow }) {
  return (
    <a
      href={link}
      className={`
        block rounded-2xl
        bg-gradient-to-br ${color}
        border ${borderColor}
        shadow-lg ${shadow}
        hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-green-400
        backdrop-blur-sm
        transition-all p-6 md:p-8
        group
        relative
        overflow-hidden
      `}
      style={{
        minHeight: "220px",
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-white rounded-2xl" />
      <h3 className="font-bold text-xl mb-2 text-[#234445] group-hover:text-green-800 relative z-10">{title}</h3>
      <p className="text-[#234445] mb-4 relative z-10">{description}</p>
      <span className="inline-block text-green-900 font-semibold group-hover:underline relative z-10">
        Explore &rarr;
      </span>
    </a>
  );
}
