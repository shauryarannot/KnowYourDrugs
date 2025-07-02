import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
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

  const handleNavigation = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          <div className="w-16"></div>

          <div className="flex-1 flex justify-center">
            <button onClick={() => handleNavigation('/')} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              <h1 className="relative text-2xl font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-300 dark:to-gray-100 bg-clip-text text-transparent hover:from-blue-600 hover:via-violet-600 hover:to-purple-600 transition-all duration-500 tracking-tight">
                KnowYourDrugs
              </h1>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="relative group p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className="relative w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isDark ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen((prev) => !prev)} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300 group-hover:blur-md"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 text-white font-medium text-sm flex items-center justify-center ring-2 ring-white/50 dark:ring-gray-800/50 hover:ring-white/80 dark:hover:ring-gray-600/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                  U
                </div>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-2xl shadow-black/10 z-50 opacity-100 scale-100 transition-all duration-200 origin-top-right">
                  <div className="p-2">
                    <button
                      onClick={() => handleNavigation("/profile")}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200 group flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>Profile</span>
                    </button>
                    <button
                      onClick={() => handleNavigation("/settings")}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200 group flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={() => handleNavigation("/help")}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200 group flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>Help</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;