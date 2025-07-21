import React from "react";
import CreatorsCard from "./Creators";
import VleiNavbar from "./LandingPageNavbar";
import { Leaf, Satellite, Group, Globe, Handshake } from "lucide-react";

// Responsive, decorative Lucide leaf overlay pattern
function LeafPatternOverlay({ className = "" }) {
  const pattern = [
    // Top Row
    { top: "3%", left: "6%", size: 54, rotate: "-12deg", opacity: 0.17 },
    { top: "5%", left: "32%", size: 34, rotate: "20deg", opacity: 0.18 },
    { top: "7%", left: "65%", size: 44, rotate: "-9deg", opacity: 0.15 },
    { top: "7%", left: "87%", size: 54, rotate: "-15deg", opacity: 0.18 },

    // Upper-Mid
    { top: "15%", left: "16%", size: 48, rotate: "12deg", opacity: 0.21 },
    { top: "18%", left: "55%", size: 60, rotate: "14deg", opacity: 0.21 },
    { top: "19%", left: "78%", size: 39, rotate: "-22deg", opacity: 0.19 },
    { top: "21%", left: "80%", size: 68, rotate: "14deg", opacity: 0.20 },

    // Middle
    { top: "31%", left: "10%", size: 45, rotate: "3deg", opacity: 0.22 },
    { top: "32%", left: "35%", size: 35, rotate: "18deg", opacity: 0.19 },
    { top: "35%", left: "53%", size: 40, rotate: "6deg", opacity: 0.18 },
    { top: "38%", left: "77%", size: 44, rotate: "-17deg", opacity: 0.17 },

    // Lower-Mid
    { top: "48%", left: "12%", size: 50, rotate: "20deg", opacity: 0.22 },
    { top: "54%", left: "41%", size: 55, rotate: "16deg", opacity: 0.22 },
    { top: "56%", left: "66%", size: 34, rotate: "-15deg", opacity: 0.20 },
    { top: "62%", left: "62%", size: 60, rotate: "-19deg", opacity: 0.24 },
    { top: "67%", left: "80%", size: 42, rotate: "7deg", opacity: 0.20 },

    // Lower
    { top: "70%", left: "20%", size: 36, rotate: "22deg", opacity: 0.21 },
    { top: "70%", left: "70%", size: 48, rotate: "11deg", opacity: 0.22 },
    { top: "75%", left: "33%", size: 60, rotate: "-5deg", opacity: 0.18 },
    { top: "78%", left: "52%", size: 37, rotate: "10deg", opacity: 0.19 },
    { top: "84%", left: "58%", size: 44, rotate: "-9deg", opacity: 0.18 },
    { top: "88%", left: "82%", size: 38, rotate: "6deg", opacity: 0.22 },
    { top: "92%", left: "13%", size: 46, rotate: "25deg", opacity: 0.17 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 w-full h-full z-0 select-none ${className}`}>
      {pattern.map((leaf, i) => (
        <Leaf
          key={i}
          size={leaf.size}
          style={{
            position: "absolute",
            top: leaf.top,
            left: leaf.left,
            opacity: leaf.opacity,
            transform: `rotate(${leaf.rotate})`,
            color: "#7fae59",
          }}
        />
      ))}
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ebfbd1] via-[#fffde4] to-[#c8ec7e] flex flex-col items-center w-full overflow-hidden">
      {/* Leaf overlay: behind all content */}
      <LeafPatternOverlay />

      {/* Navbar always above overlay */}
      {/* <div className="relative z-10 w-full">
        
      </div> */}
      <VleiNavbar />

      {/* Header Section */}
      <section className="relative z-10 w-full max-w-4xl mt-12 mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#234445] drop-shadow">
          About <span className="text-[#8BC34A]">VleiGuard</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#234445]/90 mb-8 max-w-3xl mx-auto">
          Empowering communities, youth, sponsors, and researchers to <b>protect and restore Zimbabwe’s vital wetlands</b> through innovative technology and collective action.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center mb-2">
          <span className="flex items-center gap-2 font-bold text-green-800">
            <Leaf size={24} className="inline-block" /> Nature
          </span>
          <span className="flex items-center gap-2 font-bold text-green-800">
            <Group size={24} className="inline-block" /> Community
          </span>
          <span className="flex items-center gap-2 font-bold text-green-800">
            <Satellite size={24} className="inline-block" /> Technology
          </span>
          <span className="flex items-center gap-2 font-bold text-green-800">
            <Globe size={24} className="inline-block" /> Global Impact
          </span>
        </div>
      </section>

      {/* Platform Vision & Story */}
      <section className="relative z-10 w-full max-w-4xl mx-auto bg-white/70 rounded-3xl shadow-lg p-6 md:p-10 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#234445] mb-4">Our Story</h2>
        <p className="text-[#234445] text-lg md:text-xl mb-3">
          <b>VleiGuard</b> was born from a passion for Zimbabwe’s unique vleis and mapani, recognizing the urgent threats of climate change, urban expansion, and pollution.
          Wetlands are the lifeblood of local communities, yet they are disappearing fast.
        </p>
        <p className="text-[#234445]/90 text-base md:text-lg">
          Our team wanted to create a platform that makes it possible for <b>anyone</b>—from local youth and farmers, to scientists and sponsors around the world—to contribute to wetland protection, restoration, and transparent monitoring.
        </p>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 w-full max-w-4xl mx-auto bg-gradient-to-r from-[#ddf8b2]/60 to-[#b4d788]/60 rounded-3xl shadow-md p-6 md:p-10 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#234445] mb-4">Our Mission</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#234445]/90 font-medium text-lg text-left">
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
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 w-full max-w-4xl mx-auto bg-white/70 rounded-3xl shadow-lg p-6 md:p-10 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#234445] mb-4">How VleiGuard Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Satellite size={32} className="text-green-700 flex-shrink-0 mt-1" />
            <div>
              <b>Satellite & IoT Monitoring</b>
              <div className="text-[#234445]/90">
                We combine satellite imagery, smart sensors, and community observations to detect changes and threats—making data accessible to all.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Group size={32} className="text-green-700 flex-shrink-0 mt-1" />
            <div>
              <b>Community Engagement</b>
              <div className="text-[#234445]/90">
                Local eco-clubs, schools, and families can record sightings, report problems, and celebrate restoration wins in a safe, collaborative space.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Handshake size={32} className="text-green-700 flex-shrink-0 mt-1" />
            <div>
              <b>Global Sponsors & Open Data</b>
              <div className="text-[#234445]/90">
                Sponsors see transparent progress with before/after photos, public dashboards, and real-time restoration tracking. Open data drives science and policy.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Globe size={32} className="text-green-700 flex-shrink-0 mt-1" />
            <div>
              <b>Inspiring Action</b>
              <div className="text-[#234445]/90">
                We use storytelling, gamified challenges, and recognition to inspire youth, empower women, and build a movement for wetlands and climate resilience.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators / Team Section */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-5 px-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#234445] mb-5 text-center">
          Meet the Team
        </h2>
        <p className="text-[#234445]/90 text-base md:text-lg mb-4 text-center">
          Our collective group brings together passionate engineers, advocates, data scientists, 
          and outreach leaders, each dedicated to safeguarding Zimbabwe’s wetlands and empowering 
          communities. With a shared vision of combining technology, research, and community engagement, 
          we work side by side to build practical solutions and spark lasting change. We believe in harnessing 
          the strengths of every team member to drive innovation, celebrate nature, and inspire a new generation 
          of wetland champions.
        </p>
        <CreatorsCard />
      </section>

      {/* Powered by Card */}
        <div className="flex-1 w-full max-w-md flex flex-row items-center bg-black/20 mb-7 rounded-2xl shadow-lg border border-green-100 p-6">
        {/* Logo image */}
        <img
            src="/cop15.png"
            alt="COP15 Hackathon Host"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-contain shadow border-2 border-green-200 bg-white mr-4"
        />
        {/* Text content */}
        <div className="flex flex-col justify-center">
            <div className="text-green-900 font-semibold text-lg md:text-xl text-left">
            COP15 Africa Youth Biodiversity Hackathon
            </div>
            <div className="text-white/80 mt-1 text-xs md:text-sm text-left">
            Building tomorrow’s solutions for wetlands &amp; climate
            </div>
        </div>
        </div>

        <section
            className="w-full flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1] mt-10"
            >
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-8 text-center">
                Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-green-900/90 max-w-2xl mb-10 text-center">
                Join VleiGuard—protect wetlands, empower communities, and drive real impact.
                <br />
                You can create an account, return to the homepage, or reach out to our team anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
                <a
                href="/landing-page"
                className="bg-[#8BC34A] text-green-900 font-bold rounded-xl px-8 py-3 shadow-lg hover:bg-green-100 text-lg transition"
                >
                Go to Homepage
                </a>
                <a
                href="/auth"
                className="bg-white text-green-900 border-2 border-[#8BC34A] font-bold rounded-xl px-8 py-3 shadow-lg hover:bg-[#8BC34A] hover:text-white text-lg transition"
                >
                Login / Sign Up
                </a>
            </div>
            </section>



    {/* Optional Footer */}
      <footer className="w-full text-center py-6 bg-[#ebfbd1] text-black/840">
        &copy; {new Date().getFullYear()} VleiGuard | Protecting Wetlands, Empowering Communities
      </footer>
    </div>
  );
}
