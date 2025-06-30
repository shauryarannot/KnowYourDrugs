import Navbar from "@/components/Navbar";
import ChatBox from "@/components/ChatBox";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-24 left-10 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full mix-blend-soft-light blur-3xl animate-pulse" />
        <div className="absolute top-48 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full mix-blend-soft-light blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-16 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 rounded-full mix-blend-soft-light blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Drug Information</span>{" "}
              Resource
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Access verified and up-to-date drug data including usage, side effects,
              and interactions. Built to support learning and healthcare awareness.
            </p>
          </section>

          {/* Chat Section */}
          <section className="flex justify-center mb-20">
            <div className="w-full max-w-3xl">
              <ChatBox />
            </div>
          </section>

          {/* Notice / Disclaimer */}
          <section className="flex justify-center">
            <div className="glass-card max-w-3xl w-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-6 shadow-lg shadow-amber-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">!</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1 text-base sm:text-lg">
                    Important Notice
                  </h3>
                  <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                    This application is for educational purposes only. It is not intended to be a
                    substitute for professional medical advice, diagnosis, or treatment. Always
                    consult your doctor or healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
