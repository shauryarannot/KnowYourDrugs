import React, { useState } from 'react';
import { LogIn, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful:', formData);
      // Handle successful login here
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google Login clicked');
    // Handle Google OAuth here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden px-4">
      {/* Enhanced Floating Elements */}
      <div className="absolute top-10 left-6 w-20 h-10 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-md opacity-60 animate-pulse" />
      <div className="absolute bottom-16 right-12 w-24 h-12 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full blur-lg opacity-50 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/3 left-1/4 w-16 h-8 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-md opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-24 left-1/3 w-18 h-9 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-md opacity-60 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
      
      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-75" />
        
        <div className="relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          <div className="space-y-5">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className={`w-full px-4 py-3.5 rounded-xl border ${
                  errors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
                } bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full px-4 py-3.5 pr-12 rounded-xl border ${
                  errors.password ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
                } bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300/50" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
              <path fill="#34A853" d="M5.453 14.025l-.653 2.504L2.37 16.7A8.888 8.888 0 0 0 11.956 21c2.231 0 4.266-.681 5.943-1.875l-2.788-2.237c-.988.69-2.27 1.137-3.155 1.137a5.27 5.27 0 0 1-4.963-3.472z"/>
              <path fill="#FBBC05" d="M5.453 9.975A5.282 5.282 0 0 1 5.453 14.025L2.37 7.3A8.891 8.891 0 0 0 2.37 16.7l3.083-2.675z"/>
              <path fill="#EA4335" d="M11.956 3.023c1.692 0 3.203.58 4.396 1.532l3.336-3.336C17.463.465 14.618-.377 11.956-.377A8.89 8.89 0 0 0 2.37 7.3l3.083 2.675a5.27 5.27 0 0 1 4.503-6.952z"/>
            </svg>
            Continue with Google
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}