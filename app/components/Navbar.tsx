import { Search, Filter, MessageSquare, Bell, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-[#f7fafd] mt-0 mb-5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navigation */}
        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-md">
          {["Home", "Groups", "Mentors", "Courses", "Events"].map((item, idx) => (
            <button
              key={item}
              className={`text-sm font-semibold px-4 py-1.5 rounded-full transition ${
                idx === 0
                  ? "bg-[#6cc5f9] text-white shadow"
                  : "text-gray-600 hover:text-[#6cc5f9]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-80">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          <Filter className="h-4 w-4 text-gray-400 ml-2" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
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
    </div>
  );
}
