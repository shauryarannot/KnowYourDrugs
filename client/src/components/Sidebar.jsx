import React, { useState, useCallback } from 'react';
import { FiSettings, FiMenu, FiMessageSquare, FiPlus, FiTrash2, FiEdit3, FiHome, FiInfo, FiHelpCircle, FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, setIsOpen, activePage, setActivePage }) => {
  const [chats, setChats] = useState([
    { id: '1', title: 'Welcome to KnowYourDrugs', timestamp: new Date().toISOString() },
    { id: '2', title: 'Drug Interactions Query', timestamp: new Date(Date.now() - 86400000).toISOString() },
    { id: '3', title: 'Side Effects Discussion', timestamp: new Date(Date.now() - 172800000).toISOString() }
  ]);
  const [currentChatId, setCurrentChatId] = useState('1');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'about', label: 'About', icon: FiInfo },
    { id: 'how', label: 'How it Works', icon: FiHelpCircle },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  const addNewChat = useCallback(() => {
    const newChat = {
      id: Date.now().toString(),
      title: `New Chat ${chats.length + 1}`,
      timestamp: new Date().toISOString()
    };
    setChats(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    setActivePage('home'); // Switch to home when creating new chat
  }, [chats.length, setActivePage]);

  const deleteChat = useCallback((chatId, e) => {
    e.stopPropagation();
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId && chats.length > 1) {
      const remainingChats = chats.filter(chat => chat.id !== chatId);
      setCurrentChatId(remainingChats[0]?.id);
    }
  }, [currentChatId, chats]);

  const selectChat = useCallback((chatId) => {
    setCurrentChatId(chatId);
    setActivePage('home'); // Switch to home when selecting a chat
  }, [setActivePage]);

  const startEditing = useCallback((chat, e) => {
    e.stopPropagation();
    setEditingId(chat.id);
    setEditTitle(chat.title);
  }, []);

  const saveEdit = useCallback((chatId) => {
    if (editTitle.trim()) {
      setChats(prev => prev.map(chat => 
        chat.id === chatId ? { ...chat, title: editTitle.trim() } : chat
      ));
    }
    setEditingId(null);
    setEditTitle('');
  }, [editTitle]);

  const cancelEdit = useCallback(() => {
    setEditingId(null);
    setEditTitle('');
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return 'Today';
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative w-80`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700/50">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              KnowYourDrugs
            </h1>
            <p className="text-xs text-gray-400 mt-1">AI Drug Information Assistant</p>
          </div>
          <button 
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-4 py-4 border-b border-gray-700/50">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Navigation</h3>
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false); // Close sidebar on mobile when navigating
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activePage === item.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'hover:bg-gray-700/50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-4 py-4 border-b border-gray-700/50">
          <button
            onClick={addNewChat}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FiPlus size={18} />
            <span className="font-medium">New Chat</span>
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <div className="px-2 mb-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Chat History</h3>
          </div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`group relative flex items-center space-x-3 px-3 py-3 rounded-xl hover:bg-gray-700/50 transition-all duration-200 cursor-pointer ${
                  currentChatId === chat.id && activePage === 'home' ? 'bg-gray-700/70 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => selectChat(chat.id)}
              >
                <div className="flex-shrink-0">
                  <FiMessageSquare size={18} className="text-gray-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  {editingId === chat.id ? (
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onBlur={() => saveEdit(chat.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit(chat.id);
                        if (e.key === 'Escape') cancelEdit();
                      }}
                      className="w-full bg-gray-600 text-white px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <div>
                      <p className="text-sm font-medium truncate">{chat.title}</p>
                      <p className="text-xs text-gray-400">{formatTimestamp(chat.timestamp)}</p>
                    </div>
                  )}
                </div>

                {editingId !== chat.id && (
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => startEditing(chat, e)}
                      className="p-1 hover:bg-gray-600 rounded transition-colors mr-1"
                      title="Edit chat name"
                    >
                      <FiEdit3 size={14} />
                    </button>
                    <button
                      onClick={(e) => deleteChat(chat.id, e)}
                      className="p-1 hover:bg-red-600 rounded transition-colors"
                      title="Delete chat"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Profile & Settings */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/40?seed=shaurya"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-600"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <div>
                <p className="text-sm font-medium">Shaurya</p>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 p-3 bg-gray-900 text-white rounded-xl shadow-lg lg:hidden hover:bg-gray-800 transition-colors"
      >
        <FiMenu size={20} />
      </button>
    </>
  );
};

export default Sidebar;