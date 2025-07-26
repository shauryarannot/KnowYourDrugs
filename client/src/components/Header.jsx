import React, { useEffect, useState } from "react";
import { Moon, Sun, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = ({ isDark, toggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfile && !event.target.closest(".profile-dropdown")) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfile]);

  return (
    <>
      <header
        className={`
          fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl
          transition-all duration-700 ease-out
          ${isScrolled ? "top-0 py-2" : "top-6 py-4"}
        `}
      >
        <div
          className={`
            relative overflow-hidden rounded-3xl 
            border border-white/10 dark:border-white/5
            bg-white/20 backdrop-blur-2xl 
            dark:bg-gray-900/20 dark:backdrop-blur-2xl
            shadow-lg shadow-black/5
            transition-all duration-700 ease-out
          `}
        >
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/10 to-transparent"></div>
          </div>

          <div
            className={`
              relative flex items-center justify-between transition-all duration-700 ease-out
              ${isScrolled ? "px-6 py-3" : "px-8 py-4"}
            `}
          >
            {/* Logo Section */}
            <div className="flex items-center group">
              <img
                src="/icon.png"
                alt="Site Logo"
                className={`
                  transition-all duration-700 ease-out
                  ${isScrolled ? "h-8 w-8" : "h-12 w-12"}
                  group-hover:rotate-12
                `}
                style={{ transformOrigin: "center" }}
              />
              <div
                className={`
                  transition-all duration-700 ease-out
                  ${isScrolled ? "ml-3" : "ml-4"}
                `}
              >
                <h1
                  className={`
                    font-semibold tracking-tight transition-all duration-700 ease-out
                    ${isScrolled ? "text-lg" : "text-xl"}
                    text-gray-900 dark:text-white drop-shadow-sm
                    hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer
                  `}
                >
                  KnowYourDrugs
                </h1>
                <p
                  className={`
                    transition-all duration-700 ease-out
                    ${isScrolled ? "text-xs opacity-80" : "text-sm opacity-90"}
                    text-gray-700 dark:text-gray-200 drop-shadow-sm
                  `}
                >
                  Medication Information Hub
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDark}
                className="h-10 w-10 rounded-2xl bg-white/20 hover:bg-white/30 dark:bg-gray-800/20 dark:hover:bg-gray-700/30 border-0 transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 focus:outline-none backdrop-blur-sm"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-amber-500 transition-transform duration-300 hover:rotate-180 drop-shadow-sm" />
                ) : (
                  <Moon className="h-4 w-4 text-blue-600 transition-transform duration-300 hover:-rotate-12 drop-shadow-sm" />
                )}
              </Button>

              <div className="relative profile-dropdown">
                <button
                  onClick={() => setShowProfile((v) => !v)}
                  className={`
                    flex items-center justify-center
                    rounded-full p-1 bg-white/40 hover:bg-white/60 dark:bg-gray-800/30 dark:hover:bg-gray-800/60
                    border-0 shadow transition-all duration-200
                    focus:outline-none ring-2 ring-white/30
                    ${isScrolled ? "h-11 w-11" : "h-14 w-14"}
                  `}
                  aria-label="Profile menu"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                    alt="Profile"
                    className="h-full w-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown rendered outside header to avoid clipping */}
      {showProfile && (
        <div
          className={`
            fixed z-[60] w-64
            ${isScrolled 
              ? "top-16 right-[5%]" 
              : "top-24 right-[5%]"
            }
            opacity-100 translate-y-0 scale-100 pointer-events-auto
            transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
            rounded-3xl border border-white/20 dark:border-gray-700/30
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl
            profile-dropdown-menu
          `}
          style={{ transformOrigin: "top right" }}
        >
          <div className="p-6 pb-4 border-b border-gray-200/30 dark:border-gray-700/30">
            <div className="flex items-center space-x-4">
              <div className="h-14 w-14 rounded-full ring-4 ring-blue-500/30 bg-gradient-to-br from-blue-200/30 to-transparent overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">john@example.com</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <ProfileMenuItem
              icon={User}
              label="View Profile"
              onClick={() => {
                setShowProfile(false);
                navigate("/profile");
              }}
            />
            <ProfileMenuItem icon={Settings} label="Settings" onClick={() => setShowProfile(false)} />
            <div className="border-t border-gray-200/30 dark:border-gray-700/30 my-2"></div>
            <ProfileMenuItem icon={LogOut} label="Sign Out" onClick={() => setShowProfile(false)} danger />
          </div>
        </div>
      )}
    </>
  );
};

const ProfileMenuItem = ({ icon: Icon, label, onClick, danger = false }) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left
      transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none
      ${danger
        ? "hover:bg-red-50/50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400"
        : "hover:bg-gray-100/30 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-200"}
    `}
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </button>
);
