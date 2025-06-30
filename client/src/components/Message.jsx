const Message = ({ content, isUser, timestamp }) => {
  const containerClass = isUser ? "justify-end" : "justify-start";
  const bubbleClass = isUser
    ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white ml-4 shadow-indigo-500/25"
    : "bg-white/80 backdrop-blur-sm text-gray-800 mr-4 border border-gray-100/50 shadow-gray-500/10";
  const timestampClass = isUser ? "text-indigo-100" : "text-gray-500";

  return (
    <div className={`flex w-full animate-fade-in ${containerClass}`}>
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${bubbleClass}`}
      >
        <p className="text-sm leading-relaxed font-medium">{content}</p>
        {timestamp && (
          <p className={`text-xs mt-2 opacity-75 font-normal ${timestampClass}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};

export default Message;
