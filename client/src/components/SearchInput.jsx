import React, { useState } from 'react';
import { Search, ImagePlus } from 'lucide-react';

export default function SearchInput({ onSearch }) {
  const [input, setInput] = useState('');

  const submit = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder="Search by drug name or symptom..."
        className="flex-1 rounded-xl px-4 py-3 text-sm shadow-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <div className="flex gap-2">
        <button
          onClick={submit}
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-xl transition"
        >
          <Search size={18} />
        </button>
        <button
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-3 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title="Upload pill image (Coming Soon)"
        >
          <ImagePlus size={18} />
        </button>
      </div>
    </div>
  );
}
