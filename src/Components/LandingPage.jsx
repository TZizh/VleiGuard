import React, { useRef, useState } from "react";
import VleiNavbar from "./LandingPageNavbar";
import CreatorsCard from "./Creators";
import { Pointer, Leaf, LeafyGreen } from "lucide-react";

// Pattern overlay component using Lucide icons
function LucideLeafPatternOverlay({ className = "" }) {
  // Expanded & denser pattern (mix of Leaf and LeafyGreen)
  const pattern = [
    // Top row
    { icon: Leaf, top: "3%", left: "7%", size: 42, rotate: "-14deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "7%", left: "22%", size: 54, rotate: "19deg", opacity: 0.14 },
    { icon: Leaf, top: "5%", left: "36%", size: 38, rotate: "-9deg", opacity: 0.12 },
    { icon: LeafyGreen, top: "9%", left: "61%", size: 51, rotate: "7deg", opacity: 0.13 },
    { icon: Leaf, top: "8%", left: "83%", size: 47, rotate: "-18deg", opacity: 0.14 },

    // Upper mid
    { icon: LeafyGreen, top: "16%", left: "15%", size: 42, rotate: "11deg", opacity: 0.13 },
    { icon: Leaf, top: "19%", left: "32%", size: 60, rotate: "18deg", opacity: 0.15 },
    { icon: LeafyGreen, top: "22%", left: "60%", size: 56, rotate: "14deg", opacity: 0.13 },
    { icon: Leaf, top: "24%", left: "82%", size: 36, rotate: "7deg", opacity: 0.13 },

    // Middle
    { icon: Leaf, top: "32%", left: "10%", size: 54, rotate: "-5deg", opacity: 0.14 },
    { icon: LeafyGreen, top: "37%", left: "26%", size: 38, rotate: "11deg", opacity: 0.13 },
    { icon: Leaf, top: "48%", left: "30%", size: 64, rotate: "8deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "43%", left: "50%", size: 46, rotate: "-10deg", opacity: 0.12 },
    { icon: Leaf, top: "38%", left: "76%", size: 48, rotate: "-15deg", opacity: 0.13 },

    // Lower mid
    { icon: LeafyGreen, top: "60%", left: "55%", size: 52, rotate: "22deg", opacity: 0.11 },
    { icon: Leaf, top: "56%", left: "69%", size: 45, rotate: "-12deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "65%", left: "25%", size: 38, rotate: "18deg", opacity: 0.14 },
    { icon: Leaf, top: "63%", left: "80%", size: 54, rotate: "-17deg", opacity: 0.12 },

    // Bottom
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

// ---

export default function LandingPage() {
  // Refs for scrolling
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const joinRef = useRef(null);

  // Carousel state for Wetlands section
  const wetlandImages = [
    {
      src: "/Borrowdale-vlei-wetlands-1024x581.webp",
      caption: "Vibrant Borrowdale vlei surrounded by evergrowing urban development.",
    },
    {
      src: "/water-table-wetlands.png",
      caption: "Wetlands store large amounts of water, replenishing the water table and providing clean water to communities.",
      source: "https://wholeeartheducation.com/wetlands-human-wellbeing-part-1/",
    },
    {
      src: "/wetlands_in_danger.png",
      caption: "Derryrush bog left out to dry after being harvested from the blanket bog, in Derryrush, Ireland, April 22, 2024.",
      source: "https://www.reuters.com/sustainability/climate-energy/world-risks-up-39-trillion-economic-losses-vanishing-wetlands-report-says-2025-07-15/",
    },
    {
      src: "/LQFPFj0HuQ6p4VWVmUW7k2jJUyuiPRhr2orT9rjI.gif",
      caption: "A wetland in Umzingwane’s Ward 9 in Matabeleland South",
      source: "https://www.thestandard.co.zw/news/article/200044096/zimbabwes-wetlands-threatened-by-twin-evils-of-climate-change-and-pollution",
    },
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const prevImg = () =>
    setCarouselIndex((i) => (i === 0 ? wetlandImages.length - 1 : i - 1));
  const nextImg = () =>
    setCarouselIndex((i) => (i === wetlandImages.length - 1 ? 0 : i + 1));

  // Smooth scroll helpers
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden w-full">

      {/* HERO SECTION */}
      <section
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          minHeight: "100vh",
          background: "url('/Vlei_guarg_hero_bg.png') center center/cover no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#234445]/60 backdrop-blur-[4px] z-0 pointer-events-none" />
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
          <h1 className="font-extrabold text-2xl xs:text-3xl md:text-5xl text-white mb-3 drop-shadow-lg leading-tight">
            PROTECTING WETLANDS.<br />EMPOWERING COMMUNITIES.
          </h1>
          <p className="text-base xs:text-lg md:text-2xl text-white/90 max-w-xl mx-auto mb-8 md:mb-12">
            Join the movement. Together, we can restore and safeguard Zimbabwe’s precious vleis and mapani for generations to come.
          </p>
          {/* Scroll button */}
          <button
            onClick={() => scrollTo(aboutRef)}
            className="bg-green-700 hover:bg-green-900 text-white font-bold rounded-xl px-8 py-3 shadow-lg transition text-lg"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* WHAT ARE WETLANDS? - with lucide pattern overlay */}
      <section
        ref={aboutRef}
        className="relative w-full min-h-[70vh] flex flex-col md:flex-row bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1] items-center justify-center px-8 py-20 overflow-hidden"
      >
        {/* Add the Lucide leaf pattern overlay */}
        <LucideLeafPatternOverlay />
        {/* Carousel & fun icon */}
        <div className="relative z-10 md:w-2/3 flex flex-col items-center justify-center mb-12 md:mb-0">
          <div className="relative flex flex-col items-center w-full max-w-2xl">
            {/* Carousel Card */}
            <div
              className="group relative rounded-3xl shadow-2xl overflow-hidden bg-[#e9f7db] w-[340px] h-[250px] md:w-[480px] md:h-[350px] flex items-center justify-center cursor-pointer transition-all"
              onClick={nextImg}
              tabIndex={0}
              aria-label="Next Image"
              style={{ minWidth: 0 }}
            >
              <img
                src={wetlandImages[carouselIndex].src}
                alt={wetlandImages[carouselIndex].caption}
                className="object-cover w-full h-full transition-transform duration-300 group-active:scale-95"
              />
              {/* “Click me!” Icon */}
              <div className="absolute top-4 right-4 bg-white/80 rounded-full px-3 py-1 flex items-center shadow animate-bounce z-10">
                <Pointer className="text-green-700 mr-1" size={20} />
                <span className="font-semibold text-green-700 text-sm">Click me!</span>
              </div>
              {/* Stacked shadow effect */}
              <div className="absolute -z-10 left-4 top-4 w-[93%] h-[90%] rounded-3xl bg-[#c8ec7e] blur-[2px]" />
            </div>
            {/* Caption with "See source" link if available */}
            <div className="mt-4 text-center text-[#234445] font-medium bg-white/90 rounded-xl p-3 shadow max-w-[420px] text-base md:text-lg">
              {wetlandImages[carouselIndex].caption}
              {wetlandImages[carouselIndex].source && (
                <span>
                  {" "}
                  <a
                    href={wetlandImages[carouselIndex].source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline ml-2 hover:text-green-900 text-sm"
                  >
                    See source
                  </a>
                </span>
              )}
            </div>
            {/* Dot indicators */}
            <div className="flex gap-2 mt-3">
              {wetlandImages.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === carouselIndex ? "bg-green-700" : "bg-green-300"} inline-block`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Explanatory text */}
        <div className="relative z-10 md:w-1/3 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#234445] mb-4">
            What Are Wetlands?
          </h2>
          <p className="text-lg md:text-xl text-[#234445] max-w-lg mb-4">
            Zimbabwe’s vleis and mapani are more than just swamps—they’re vibrant ecosystems vital for clean water, wildlife, and local communities.
          </p>
          <p className="text-md md:text-lg text-[#234445]/80">
            Explore some of the unique and threatened wetlands we’re working to protect.
          </p>
        </div>
      </section>

      {/* ...rest of your page remains unchanged... */}
      <LucideLeafPatternOverlay />
      {/* MISSION SECTION */}
      <section
        ref={missionRef}
        className="w-full min-h-[55vh] flex flex-col md:flex-row items-center justify-center px-4 py-16 bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e]"
      >
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/vleiguard_logo_no_bg.png"
            alt="Wetland Protection"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl rounded-2xl bg-white/60 p-2"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#234445] mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[#234445] max-w-2xl mb-4">
            Our mission at <b>VleiGuard</b> is to empower communities, youth, sponsors, and researchers to collaboratively protect and restore Zimbabwe’s vital wetlands.
            Through innovative use of satellite imagery, IoT technology, and community engagement, we foster transparency, early threat detection, and sustainable stewardship.
            By building accessible, data-driven tools and inspiring collective action, VleiGuard seeks to ensure the long-term health of wetlands, contributing to global biodiversity, climate resilience, and local livelihoods.
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
          <button
            className="mt-6 bg-green-700 hover:bg-green-900 text-white font-bold rounded-xl px-8 py-3 shadow-lg transition text-lg"
            onClick={() => scrollTo(joinRef)}
          >
            How You Can Help
          </button>
        </div>
      </section>

      
      {/* IMPACT / HIGHLIGHTS */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#234445] mb-10">Our Impact So Far</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ImpactStat number="15+" label="Wetlands Restored" />
          <ImpactStat number="1200+" label="Community Members Engaged" />
          <ImpactStat number="30+" label="Sponsors & Partners" />
          <ImpactStat number="50+" label="Threats Detected" />
        </div>
      </section>

      {/* HOW TO JOIN / CALL TO ACTION */}
      <section
        ref={joinRef}
        className="w-full flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1]"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-8">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg md:text-xl text-black/40 max-w-2xl mb-10">
          Join VleiGuard—create an account, meet the team, or learn more about our mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/auth"
            className="bg-[#8BC34A] text-green-900 font-bold rounded-xl px-8 py-3 shadow-lg hover:bg-green-100 text-lg"
          >
            Login / Sign Up
          </a>
          <a
            href="/about"
            className="bg-[#8BC34A] border-2 border-white text-white font-bold rounded-xl px-8 py-3 shadow-lg hover:bg-white hover:text-green-900 text-lg transition"
          >
            About Us
          </a>
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="w-full text-center py-6 bg-[#ebfbd1] text-black/840">
        &copy; {new Date().getFullYear()} VleiGuard | Protecting Wetlands, Empowering Communities
      </footer>

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

// Impact stats component
function ImpactStat({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-extrabold text-[#8BC34A]">{number}</span>
      <span className="text-[#234445] text-lg font-semibold">{label}</span>
    </div>
  );
}
