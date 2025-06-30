import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Moon, Sun, Pill, Heart, Shield } from "lucide-react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Hello! I'm here to help you learn about medications and their effects. Please ask me anything about drugs, their uses, side effects, or interactions. Remember, this is for educational purposes only and should not replace professional medical advice.",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    const prefersDark =
      storedMode === "dark" ||
      (!storedMode && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

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
    <div className="min-h-screen bg-white dark:bg-black p-4 transition-all duration-700">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative border border-white/20 dark:border-gray-700/50 rounded-3xl bg-white dark:bg-gray-900 shadow-xl backdrop-blur-2xl">
          <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Medical Chat Session
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-110 group"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          <div className="h-[460px] sm:h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`group relative ${msg.isUser ? "max-w-[75%]" : "max-w-[85%]"}`}>
                  {!msg.isUser && (
                    <div className="flex items-center gap-2 mb-2 ml-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">MedBot</span>
                    </div>
                  )}
                  <div
                    className={`px-6 py-4 text-sm shadow-xl rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                      msg.isUser
                        ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white"
                        : "bg-white dark:bg-gray-800 border border-white/50 dark:border-gray-700/50 text-gray-800 dark:text-gray-100"
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
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">MedBot is typing...</span>
                  </div>
                  <div className="px-6 py-4 bg-white dark:bg-gray-800 border border-white/50 dark:border-gray-700/50 rounded-2xl shadow-xl backdrop-blur-sm">
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
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 border-t border-white/20 dark:border-gray-700/50">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about a medication..."
                  className="w-full px-6 py-4 text-sm bg-white dark:bg-gray-800 border border-white/50 dark:border-gray-700/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Pill className="w-4 h-4" />
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-4 flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50"
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
      </div>
    </div>
  );
};

export default ChatBox;
