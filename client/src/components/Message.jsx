const Message = ({ content, isUser, timestamp }) => {
  const containerClass = isUser ? "justify-end" : "justify-start";

  const bubbleClass = isUser
    ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white ml-4 shadow-indigo-500/25"
    : "bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100/50 dark:border-gray-700 backdrop-blur-sm shadow-gray-500/10 mr-4";

  const timestampClass = isUser
    ? "text-indigo-100"
    : "text-gray-500 dark:text-gray-400";

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
