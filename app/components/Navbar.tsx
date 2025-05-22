"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  MessageSquare,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navItems = ["Home", "Community", "Jobs", "Mentors", "Courses", "Events"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#ffff] from-[#f4faff] to-[#dff1ff] py-4 px-4 sm:px-6 mb-3">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex items-center justify-between md:gap-6 gap-3 flex-wrap md:flex-nowrap">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden w-full flex justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-white rounded-full shadow-md"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop Nav Menu */}
          <div className="hidden md:flex gap-1 items-center bg-white rounded-full px-2 py-1 shadow-md flex-wrap">
            {navItems.map((item, idx) => (
              <button
                key={item}
                className={`text-sm font-semibold px-3 py-2 rounded-full transition-all ${
                  idx === 0
                    ? "bg-[#53baff] text-white shadow"
                    : "text-gray-700 hover:text-[#53baff]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-white px-4 py-2 rounded-full shadow-md w-full md:max-w-md">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <Filter className="h-4 w-4 text-gray-400 ml-2" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            {[MessageSquare, Bell, Settings].map((Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <Icon className="h-4 w-4 text-gray-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {/* Nav Items */}
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-md">
              {navItems.map((item, idx) => (
                <button
                  key={item}
                  className={`text-sm font-semibold px-4 py-2 rounded-full text-left ${
                    idx === 0
                      ? "bg-[#53baff] text-white shadow"
                      : "text-gray-600 hover:text-[#53baff]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-full">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <Filter className="h-4 w-4 text-gray-400 ml-2" />
            </div>

            {/* Icons */}
            <div className="flex items-center justify-start gap-3">
              {[MessageSquare, Bell, Settings].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
                >
                  <Icon className="h-4 w-4 text-gray-500" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
