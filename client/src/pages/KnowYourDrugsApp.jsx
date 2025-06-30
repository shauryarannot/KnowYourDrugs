import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import SearchInput from '../components/SearchInput';
import ChatBubble from '../components/ChatBubble';

export default function KnowYourDrugsApp() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const endRef = useRef(null);

  const handleSearch = (query) => {
    if (!query) return;
    const userMsg = { text: query, isUser: true, id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setTimeout(() => {
      const botMsg = {
        text: `Here is some information about "${query}".\n\n${query} is commonly used for pain relief and fever reduction. Please consult a doctor before using.`,
        isUser: false,
        id: Date.now() + 1
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderContent = () => {
    if (activePage === 'home') {
      return (
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KnowYourDrugs
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Get accurate information about medications instantly
            </p>
          </div>
          <SearchInput onSearch={handleSearch} />
          <div className="mt-10 space-y-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
            ))}
            {isLoading && <ChatBubble isUser={false} message="Searching..." isLoading />}
            <div ref={endRef} />
          </div>
        </div>
      );
    } else if (activePage === 'about') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About KnowYourDrugs
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              KnowYourDrugs is a smart assistant that helps you understand medicines by name or photo.
              Designed to simplify medical drug lookup in an AI-powered chat format.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Advanced algorithms provide accurate drug information
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">User-Friendly</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Simple chat interface makes drug lookup intuitive
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activePage === 'how') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How it Works
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Search by Name</h3>
                  <p className="text-gray-600 dark:text-gray-300">Enter a drug name in the search box to get detailed information</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Image Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-300">Upload an image of a pill for identification (Coming Soon)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get Results</h3>
                  <p className="text-gray-600 dark:text-gray-300">Receive detailed descriptions, use-cases, and important warnings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI-Generated</h3>
                  <p className="text-gray-600 dark:text-gray-300">All responses are powered by AI with up-to-date medical databases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activePage === 'settings') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Settings
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Toggle between light and dark themes</p>
                </div>
                <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Receive alerts for drug interactions</p>
                </div>
                <button className="w-12 h-6 bg-blue-600 rounded-full relative transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Language</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Choose your preferred language</p>
                </div>
                <select className="bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-3 py-2 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <Sidebar 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className="flex-1 flex flex-col items-center px-4 py-8 lg:pl-80 transition-all duration-300">
        {renderContent()}
      </main>
    </div>
  );
}