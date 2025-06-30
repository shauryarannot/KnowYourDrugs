import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Settings, LogOut, HelpCircle, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Left spacer */}
          <div className="w-16"></div>

          {/* Centered logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer drop-shadow-sm">
                KnowYourDrugs
              </h1>
            </Link>
          </div>

          {/* Avatar & Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="relative group cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg flex items-center justify-center ring-2 ring-white/50 hover:ring-indigo-300/50 transition-all duration-300 hover:scale-110 shadow-lg">
                U
              </div>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-xl rounded-xl py-2 z-50">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm gap-2 hover:bg-gray-100 transition cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center px-4 py-2 text-sm gap-2 hover:bg-gray-100 transition cursor-pointer"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <Link
                  to="/help"
                  className="flex items-center px-4 py-2 text-sm gap-2 hover:bg-gray-100 transition cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  Help & Support
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <button
                  className="flex items-center px-4 py-2 text-sm gap-2 text-red-600 hover:bg-red-50 transition w-full text-left"
                  onClick={() => {
                    // Sign out logic here
                    alert("Signed out");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
