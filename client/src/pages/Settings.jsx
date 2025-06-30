
import Navbar from "@/components/Navbar";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />
      
      <main className="pt-24 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings</h1>
            <p className="text-lg text-gray-600">Manage your account and preferences</p>
          </div>

          <div className="grid gap-6">
            {/* Account Settings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Dark Mode</span>
                  <input type="checkbox" className="toggle" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Email Notifications</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Download My Data
                </button>
                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
