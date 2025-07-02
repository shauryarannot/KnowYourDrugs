import { useState, useEffect } from "react";
import { Shield, Heart, Activity, Send } from "lucide-react";

// Simplified ChatBox Component
const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm here to help you learn about medications and their effects. Please ask me anything about drugs, their uses, side effects, or interactions. Remember, this is for educational purposes only and should not replace professional medical advice.",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Could you please be more specific about what you'd like to know?",
        "Let me provide some educational information about that topic.",
        "I'd recommend consulting with a healthcare professional.",
        "Here's some general information that might help."
      ];

      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Messages */}
      <div className="h-[500px] overflow-y-auto px-2 space-y-6 mb-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div className={`group relative ${msg.isUser ? "max-w-[75%]" : "max-w-[85%]"}`}>
              {!msg.isUser && (
                <div className="flex items-center gap-2 mb-2 ml-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Activity className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">MedBot</span>
                </div>
              )}
              <div
                className={`px-6 py-4 text-sm shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                  msg.isUser
                    ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
                }`}
              >
                <p className="leading-relaxed">{msg.content}</p>
                <div className={`text-[10px] text-right mt-2 ${msg.isUser ? "text-blue-100" : "text-gray-400 dark:text-gray-500"}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="group relative max-w-[85%]">
              <div className="flex items-center gap-2 mb-2 ml-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                  <Activity className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">MedBot is typing...</span>
              </div>
              <div className="px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
                <div className="flex space-x-2">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about a medication..."
              className="w-full px-6 py-4 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 py-4 flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition-all duration-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Shield className="w-3 h-3" />
          <span className="font-medium">Educational use only. Always consult a healthcare provider.</span>
          <Heart className="w-3 h-3 text-red-400" />
        </div>
      </div>
    </div>
  );
};

// Main Index Component
const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-all duration-700">
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Drug Information
              </span>{" "}
              Resource
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get reliable, educational information about medications, their uses, side effects, and interactions.
            </p>
          </section>

          {/* Chat Section */}
          <section className="flex justify-center">
            <ChatBox />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;