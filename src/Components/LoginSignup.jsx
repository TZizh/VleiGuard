import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, LeafyGreen } from "lucide-react";
import Lottie from "lottie-react";
import wetlandAnim from "./anim/animated globe floating.json";

function LucideLeafPatternOverlay({ className = "" }) {
  const pattern = [
    { icon: Leaf, top: "6%", left: "7%", size: 56, rotate: "-15deg", opacity: 0.17 },
    { icon: LeafyGreen, top: "16%", left: "80%", size: 68, rotate: "11deg", opacity: 0.13 },
    { icon: Leaf, top: "37%", left: "13%", size: 54, rotate: "13deg", opacity: 0.19 },
    { icon: LeafyGreen, top: "47%", left: "53%", size: 52, rotate: "-7deg", opacity: 0.18 },
    { icon: Leaf, top: "65%", left: "35%", size: 64, rotate: "-21deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "82%", left: "62%", size: 44, rotate: "22deg", opacity: 0.16 },
    { icon: Leaf, top: "80%", left: "18%", size: 42, rotate: "-19deg", opacity: 0.15 },
    { icon: Leaf, top: "22%", left: "45%", size: 50, rotate: "7deg", opacity: 0.13 },
    { icon: LeafyGreen, top: "75%", left: "80%", size: 48, rotate: "-14deg", opacity: 0.12 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 w-full h-full z-0 select-none ${className}`}>
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

export default function LoginSignup({ apiBase = "/api/accounts" }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ username: "", password: "", full_name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setForm({ username: "", password: "", full_name: "" });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload =
      mode === "signup"
        ? {
            username: form.username,
            password: form.password,
            full_name: form.full_name,
          }
        : {
            username: form.username,
            password: form.password,
          };

    try {
      const url = `${apiBase}/${mode === "login" ? "login" : "register"}/`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || data.message || data.error || "Something went wrong.");
      } else {
        setSuccess(
          mode === "login"
            ? "Login successful! Redirecting..."
            : "Signup successful! You can now log in."
        );
        if (mode === "login" && data.access) {
          localStorage.setItem("token", data.access);
          setTimeout(() => navigate("/dashboard"), 1000);
        }
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-b from-[#ddf8b2] via-[#fffde4] to-[#ebfbd1] relative overflow-hidden px-2">
      <LucideLeafPatternOverlay />

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-20">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <div className="w-40 h-40 xs:w-56 xs:h-56 md:w-72 md:h-72 flex items-center justify-center bg-transparent rounded-2xl">
            <Lottie animationData={wetlandAnim} loop={true} style={{ width: "100%", height: "100%", background: "none" }} />
          </div>
          <div className="text-center mt-3 xs:mt-5">
            <h2 className="font-extrabold text-green-900 text-xl xs:text-2xl md:text-3xl mb-1">
              Wetlands need digital champions.
            </h2>
            <div className="text-green-800 text-base xs:text-lg">
              Join VleiGuard, protect the future.
            </div>
          </div>
        </div>

        <div className="bg-white/95 border border-green-100 rounded-2xl shadow-xl px-4 xs:px-6 md:px-8 py-8 md:py-10 max-w-md w-full flex flex-col items-center order-1 md:order-2">
          <img
            src="/vleiguard_logo_no_bg.png"
            alt="VleiGuard Logo"
            className="w-14 h-14 xs:w-16 xs:h-16 md:w-20 md:h-20 mb-3 xs:mb-4 rounded-xl bg-white/80 shadow border border-green-200"
          />
          <h1 className="text-xl xs:text-2xl font-extrabold text-[#234445] mb-2">
            {mode === "login" ? "Welcome Back" : "Create an Account"}
          </h1>
          <p className="mb-4 text-green-900 text-sm xs:text-base">
            {mode === "login"
              ? "Login to VleiGuard to protect, explore, and connect."
              : "Sign up to join the VleiGuard community!"}
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 xs:gap-4">
            {mode === "signup" && (
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                autoComplete="name"
                required
                className="rounded-lg border border-green-200 p-2 xs:p-3 text-[#234445] bg-white/90"
                value={form.full_name}
                onChange={handleChange}
                disabled={loading}
              />
            )}
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              required
              className="rounded-lg border border-green-200 p-2 xs:p-3 text-[#234445] bg-white/90"
              value={form.username}
              onChange={handleChange}
              disabled={loading}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              required
              className="rounded-lg border border-green-200 p-2 xs:p-3 text-[#234445] bg-white/90"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold rounded-xl px-5 xs:px-8 py-2.5 xs:py-3 shadow-lg transition text-base xs:text-lg mt-2"
              disabled={loading}
            >
              {loading
                ? (mode === "login" ? "Logging in..." : "Signing up...")
                : (mode === "login" ? "Login" : "Sign Up")}
            </button>
            {error && (
              <div className="text-red-600 text-xs xs:text-sm text-center">{error}</div>
            )}
            {success && (
              <div className="text-green-700 text-xs xs:text-sm text-center">{success}</div>
            )}
          </form>
          <div className="mt-4 text-[#234445] text-xs xs:text-sm">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={toggleMode} className="text-green-800 font-bold underline ml-1">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={toggleMode} className="text-green-800 font-bold underline ml-1">
                  Log in
                </button>
              </>
            )}
          </div>
          <div className="mt-6">
            <span className="block text-green-800 font-semibold mb-1 text-xs xs:text-sm">Not quite ready to join?</span>
            <a
              href="/landing-page"
              className="inline-block bg-green-100 hover:bg-green-300 text-green-900 font-bold rounded-xl px-4 xs:px-6 py-2 shadow transition text-xs xs:text-sm"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full text-center py-4 xs:py-6 bg-[#ebfbd1] text-black/840 text-xs xs:text-base">
        &copy; {new Date().getFullYear()} VleiGuard | Protecting Wetlands, Empowering Communities
      </footer>
    </div>
  );
}
