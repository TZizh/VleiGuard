// components/VleiFooter.jsx
import React from "react";

export default function VleiFooter() {
  return (
    <footer className="w-full bg-[#617933] text-white py-5 flex justify-center items-center text-center text-xs md:text-sm font-medium rounded-t-2xl shadow-inner mt-10">
      <span>
        © {new Date().getFullYear()} VleiGuard. All rights reserved.
      </span>
    </footer>
  );
}
