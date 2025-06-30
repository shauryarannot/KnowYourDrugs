import React from 'react';
import { User, Bot } from 'lucide-react';

export default function ChatBubble({ message, isUser, isLoading }) {
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl ${isUser ? 'bg-blue-50' : 'bg-white dark:bg-gray-800'} shadow`}>
      <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-600 text-white' : 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300'
      }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className="flex-1 text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
        {isLoading ? (
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
          </div>
        ) : (
          message
        )}
      </div>
    </div>
  );
}
