import Navbar from "@/components/Navbar";
import ChatBox from "@/components/ChatBox";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-24 left-10 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/10 dark:to-purple-800/10 rounded-full mix-blend-soft-light blur-3xl animate-pulse" />
        <div className="absolute top-48 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-500/20 dark:from-pink-600/10 dark:to-purple-700/10 rounded-full mix-blend-soft-light blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-16 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 dark:from-indigo-700/10 dark:to-cyan-700/10 rounded-full mix-blend-soft-light blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Drug Information</span>{" "}
              Resource
            </h1>
          </section>

          {/* Chat Section */}
          <section className="flex justify-center">
            <div className="w-full max-w-3xl">
              <ChatBox />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
