import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    const prefersDark =
      storedMode === "dark" ||
      (!storedMode && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          <div className="w-16"></div>

          <div className="flex-1 flex justify-center">
            <Link to="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer drop-shadow-sm">
                KnowYourDrugs
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Slide Toggle Dark Mode */}
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isDark}
                  onChange={toggleDarkMode}
                />
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-300" />
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 peer-checked:translate-x-5" />
              </label>
            </div>

            {/* Avatar & Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="relative group cursor-pointer focus:outline-none"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg flex items-center justify-center ring-2 ring-white/50 hover:ring-indigo-300/50 transition-all duration-300 hover:scale-110 shadow-lg">
                  U
                </div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg z-50"
                  >
                    <div className="flex flex-col p-2 text-sm text-gray-700 dark:text-gray-200">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          navigate("/settings");
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Settings
                      </button>
                      <button
                        onClick={() => {
                          navigate("/help");
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Help
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
