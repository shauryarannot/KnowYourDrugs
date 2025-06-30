import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Message from "./Message";

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
        "I understand you're looking for information about that medication. Could you please be more specific about what you'd like to know?",
        "That's a great question! Let me provide you with some educational information about that topic.",
        "For safety reasons, I'd recommend consulting with a healthcare professional for personalized advice about medications.",
        "Here's some general information that might be helpful. Remember, this is for educational purposes only."
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
    <div className="relative w-full max-w-4xl mx-auto animate-fade-in">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-purple-100 opacity-30 blur-2xl" />

      <div className="relative rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/30">
        {/* Chat Header */}
        <div className="p-6 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-t-3xl">
          <div className="flex items-center justify-center space-x-3">
            <Sparkles className="h-6 w-6 text-white/90" />
            <div className="text-center">
              <h2 className="text-xl font-bold">Drug Info Assistant</h2>
              <p className="text-xs sm:text-sm text-white/80">Ask about any medicine, side effects, or interactions</p>
            </div>
            <Sparkles className="h-6 w-6 text-white/90" />
          </div>
        </div>

        {/* Messages */}
        <div className="h-[460px] sm:h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50 scrollbar-thin">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
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

        {/* Input */}
        <div className="p-6 border-t border-gray-100/50 bg-white/90 backdrop-blur-sm">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about a medication..."
                className="w-full px-6 py-4 text-sm bg-white/80 backdrop-blur-sm border-gray-200/50 rounded-2xl shadow-sm focus:border-indigo-400 focus:ring-indigo-300/50 transition duration-300"
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="rounded-2xl px-8 py-4 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-indigo-500/25 hover:scale-105 transition disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </Button>
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
