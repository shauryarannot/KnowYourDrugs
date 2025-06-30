import Navbar from "@/components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />

      <main className="pt-24 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25"></div>
              <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-3xl font-bold ring-4 ring-white shadow-xl">
                U
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">User Profile</h1>
            <p className="text-lg text-gray-600">Manage your personal information</p>
          </div>

          <div className="grid gap-6">
            {/* Personal Info Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
                  Update Profile
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Activity Overview</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">24</div>
                  <div className="text-sm text-gray-600">Questions Asked</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-sm text-gray-600">Searches Made</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">12</div>
                  <div className="text-sm text-gray-600">Days Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
