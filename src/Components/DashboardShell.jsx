import React, { useState } from "react";
import {
  Leaf,
  LeafyGreen,
  Home,
  Users,
  BookOpen,
  Map,
  Activity,
  BarChart2,
  FilePlus,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import VleiFooter from "./VleiFooter";

function LeafOverlay() {
  const pattern = [
    { icon: Leaf, top: "12%", left: "8%", size: 48, rotate: "-13deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "33%", left: "82%", size: 58, rotate: "16deg", opacity: 0.15 },
    { icon: Leaf, top: "55%", left: "14%", size: 38, rotate: "7deg", opacity: 0.14 },
    { icon: Leaf, top: "81%", left: "72%", size: 54, rotate: "-21deg", opacity: 0.12 },
    { icon: LeafyGreen, top: "76%", left: "26%", size: 40, rotate: "-3deg", opacity: 0.14 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-0 select-none">
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

function SidebarLink({ to, label, icon, special, onClick, className }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 md:gap-4 justify-center
         md:px-5 px-0 py-3 md:py-2.5
         rounded-xl font-medium
         transition-all duration-150
         w-12 h-12 md:w-full md:h-auto mx-auto md:mx-0
         ${isActive
           ? "bg-[#8BC34A] text-white"
           : "text-white/90 hover:bg-[#3b5d49] hover:text-[#8BC34A]"}
         ${special ? "font-bold border border-[#8BC34A] bg-[#234445] hover:bg-[#3b5d49] text-[#8BC34A]" : ""}
         ${className || ""}`
      }
      end
    >
      <span className="text-2xl md:text-xl">{icon}</span>
      <span className="hidden md:inline whitespace-nowrap">{label}</span>
    </NavLink>
  );
}

export default function DashboardShell({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Logout handler
  function handleLogout() {
    localStorage.removeItem("token");
    // Optionally clear more state here
    navigate("/auth");
  }

  // Define all nav items
  const navItems = [
    { to: "/dashboard", label: "Explore", icon: <Home /> },
    { to: "/community", label: "Community Wall", icon: <Users /> },
    { to: "/restoration", label: "Restoration Hub", icon: <Map /> },
    { to: "/activities", label: "My Activities", icon: <Activity /> },
    { to: "/research-hub", label: "Research Hub", icon: <BarChart2 /> },
    { to: "/sponsor", label: "Sponsor", icon: <BookOpen /> },
  ];

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1] relative overflow-x-hidden">
      <LeafOverlay />

      {/* Desktop Sidebar */}
      <aside
        className="
          z-20 relative hidden md:flex flex-col items-center
          w-64 bg-[#234445] border-r border-green-900 shadow-2xl py-8 px-3
          h-screen min-h-screen
          transition-all
        "
      >
        <img
          src="/vleiguard_logo_no_bg.png"
          alt="VleiGuard"
          className="w-14 h-14 mb-8 rounded-xl mx-auto"
        />
        <nav className="flex flex-col gap-3 w-full items-stretch flex-1">
          {navItems.map(item => (
            <SidebarLink key={item.to} {...item} />
          ))}
          <SidebarLink
            to="/make-report"
            label="Make Report"
            icon={<FilePlus />}
            special
          />
        </nav>
        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="mt-5 mb-2 w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl bg-[#e57373] hover:bg-[#d32f2f] text-white font-bold transition text-base shadow-md"
        >
          <LogOut className="text-xl" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </aside>

      {/* Flat bottom nav for mobile */}
      <nav
        className="
          fixed md:hidden bottom-0 left-0 right-0 z-30
          bg-[#234445] shadow-2xl
          flex items-center justify-between
          px-7 py-2
          border-t border-green-900
          w-full
        "
        style={{ maxWidth: "100vw" }}
      >
        <div className="flex-1 flex justify-center">
          <SidebarLink
            to="/dashboard"
            icon={<Home />}
            label=""
            className="w-12 h-12"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <SidebarLink
            to="/make-report"
            icon={<FilePlus />}
            label=""
            className="w-12 h-12"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full text-white/90 hover:text-[#8BC34A] transition"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Hamburger drawer for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#234445] border-l border-green-800 w-72 max-w-xs h-full flex flex-col justify-between px-0 pt-0 pb-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-5 pt-5 pb-2 flex justify-between items-center border-b border-green-900">
              <img
                src="/vleiguard_logo_no_bg.png"
                alt="VleiGuard"
                className="w-12 h-12 rounded-xl"
              />
              <button
                className="text-white/80 hover:text-green-300"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-1 px-2 mt-4">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-semibold
                    transition-all duration-150
                    ${isActive
                      ? "bg-[#8BC34A] text-white"
                      : "text-white/90 hover:bg-[#3b5d49] hover:text-[#8BC34A]"}`
                  }
                  end
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
            {/* LOGOUT BUTTON MOBILE */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
              className="mx-2 mt-5 mb-2 flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#e57373] hover:bg-[#d32f2f] text-white font-bold transition text-lg shadow-md"
            >
              <LogOut className="text-2xl" />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 h-screen min-h-screen w-full max-w-full rounded-3xl">
        <div
          className="
            w-full max-w-full h-full
            overflow-y-auto
            overflow-x-hidden
            pb-20 md:pb-0
            px-2 py-6 sm:px-4 md:px-8
            scrollbar-thin scrollbar-thumb-[#8BC34A]/50 scrollbar-track-[#fffde4]/20
          "
          style={{ minHeight: "100vh" }}
        >
          {children ? children : <Outlet />}
        </div>
      </main>
      {/* Optionally add <VleiFooter /> here if you want it on all dashboard pages */}
      {/* <VleiFooter /> */}
    </div>
  );
}
