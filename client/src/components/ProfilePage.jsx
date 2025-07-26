import React from "react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-900 transition-colors">
      <section className="
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-xl
        mt-8 px-8 py-10 w-full max-w-md flex flex-col items-center
        transition-all duration-700
      ">
        <div className="h-28 w-28 rounded-full ring-4 ring-blue-500/30 bg-gradient-to-br from-blue-200/30 to-transparent overflow-hidden shadow-lg mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">John Doe</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">john@example.com</p>
        <div className="w-full flex flex-col gap-4">
          <div className="px-4 py-3 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/10 dark:border-gray-700/20">
            <span className="text-gray-800 dark:text-gray-200 font-medium">Member since:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">April 2022</span>
          </div>
          <div className="px-4 py-3 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/10 dark:border-gray-700/20">
            <span className="text-gray-800 dark:text-gray-200 font-medium">Role:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">User</span>
          </div>
        </div>
      </section>
    </main>
  );
}
