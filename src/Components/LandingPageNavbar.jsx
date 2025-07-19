import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function VleiNavbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Utility for active nav style
  const navLink = (to, colorOverride = false) =>
    `block px-4 py-2 rounded-lg font-medium transition-all ${
      location.pathname === to
        ? (colorOverride
            ? "bg-green-700 text-white shadow"
            : "bg-green-100 text-[#234445] shadow"
          )
        : (colorOverride
            ? "text-white bg-green-700/70 hover:bg-green-900"
            : "text-[#234445] hover:bg-green-100 hover:text-[#234445] hover:shadow"
          )
    }`;

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white/80 backdrop-blur-lg shadow-lg border border-green-200 rounded-2xl flex items-center justify-between px-4 md:px-8 py-2 md:py-3 max-w-5xl w-[96%] mx-auto">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/vleiguard_logo_no_bg.png"
            alt="VleiGuard Logo"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-contain drop-shadow"
          />
          <span className="font-extrabold text-lg md:text-2xl tracking-tight text-[#234445] group-hover:text-green-700 transition">
            VleiGuard
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2 md:gap-6">
          <Link to="/signup" className={navLink("/signup", true)}>
            Sign-up
          </Link>
          <Link to="/login" className={navLink("/login")}>
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-3 z-50 p-2 rounded-lg text-green-900 hover:bg-green-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg rounded-b-2xl flex flex-col items-center gap-3 py-6 px-6 animate-fadein md:hidden">
            <Link
              to="/signup"
              className={navLink("/signup", true) + " w-full text-center text-lg"}
              onClick={() => setOpen(false)}
            >
              Sign-up
            </Link>
            <Link
              to="/login"
              className={navLink("/login") + " w-full text-center text-lg"}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
      {/* Simple fade-in animation */}
      <style>
        {`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadein { animation: fadein 0.25s;}
        `}
      </style>
    </nav>
  );
}
