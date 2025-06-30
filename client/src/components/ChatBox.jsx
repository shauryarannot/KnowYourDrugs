import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";

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
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Could you please be more specific about what you'd like to know?",
        "Let me provide some educational information about that topic.",
        "I’d recommend consulting with a healthcare professional.",
        "Here’s some general information that might help."
      ];

      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-6 animate-fade-in">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-purple-100 blur-2xl opacity-30 rounded-3xl" />

      <div className="rounded-3xl shadow-2xl border border-white/20 bg-white/80 backdrop-blur-xl overflow-hidden">
        <div className="p-6 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-t-3xl text-center">
          <div className="flex items-center justify-center space-x-3">
            <Sparkles className="h-6 w-6 text-white/90" />
            <div>
              <h2 className="text-xl font-bold">Drug Info Assistant</h2>
              <p className="text-xs sm:text-sm text-white/80">Ask about any medicine, side effects, or interactions</p>
            </div>
            <Sparkles className="h-6 w-6 text-white/90" />
          </div>
        </div>

        <div className="h-[460px] sm:h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-100/60 to-white/40 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div
                className={`px-5 py-4 max-w-[75%] text-sm shadow-lg rounded-2xl ${
                  msg.isUser
                    ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                    : "bg-white/90 border border-gray-100/40 backdrop-blur-md"
                }`}
              >
                <p>{msg.content}</p>
                <div className="text-[10px] text-right text-gray-400 mt-1">{msg.timestamp}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="px-5 py-4 mr-4 border rounded-2xl shadow-lg bg-white/90 border-gray-100/50 backdrop-blur-sm">
                <div className="flex space-x-2">
                  {[0, 0.1, 0.2].map((d, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white/80 backdrop-blur-md">
          <div className="flex gap-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about a medication..."
              className="flex-1 px-5 py-3 text-sm bg-white/80 border border-gray-300/50 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="px-5 py-3 flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-lg hover:scale-105 transition active:scale-100 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-3 text-xs text-center text-gray-500 font-medium">
            Educational use only. Always consult a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
