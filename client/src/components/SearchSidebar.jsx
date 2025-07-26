import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Plus, MessageSquare, Settings, LogOut, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const SearchSidebar = ({ onSearch, isLoading, searchHistory = [] }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Determine if sidebar should show expanded content
  const showExpandedContent = !isCollapsed || isHovered;

  const handleNewChat = () => {
    onSearch("", "new");
  };

  const handleHistoryClick = (historyQuery) => {
    onSearch(historyQuery, "text");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMouseEnter = () => {
    if (isCollapsed) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      
      const timeout = setTimeout(() => {
        setIsHovered(true);
      }, 100);
      setHoverTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    if (isCollapsed) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-white/40 backdrop-blur-xl border-r border-white/30 dark:bg-black/20 dark:border-white/10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${
        showExpandedContent ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="p-4 border-b border-white/20 dark:border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center space-x-3 transition-all duration-300 ${
            showExpandedContent ? 'opacity-100' : 'opacity-100'
          }`}>
            {/* Logo - PNG Image */}
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary/80 to-primary text-primary-foreground shadow-lg flex-shrink-0 overflow-hidden">
              <img 
                src="/icon.png" 
                alt="KnowYourDrugs Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            
            {/* App name - Only when expanded */}
            <div className={`transition-all duration-300 ${
              showExpandedContent ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
            }`}>
              <h1 className="text-lg font-bold whitespace-nowrap">KnowYourDrugs</h1>
            </div>
          </div>
          
          {/* Toggle Button - Only visible when expanded */}
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 hover:bg-white/20 dark:hover:bg-black/20 flex-shrink-0 transition-all duration-300 ${
              showExpandedContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {/* New Drug Button */}
        <Button
          onClick={handleNewChat}
          variant="liquid-glass-outline"
          size="liquid-default"
          className={`w-full justify-start h-10 transition-all duration-300 ${
            !showExpandedContent ? 'px-0 justify-center' : ''
          }`}
          disabled={isLoading}
          title={!showExpandedContent ? "New Drug" : ""}
        >
          <Plus className={`h-4 w-4 ${!showExpandedContent ? '' : 'mr-2'}`} />
          <span className={`transition-all duration-300 ${
            showExpandedContent ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
          }`}>
            New Drug
          </span>
        </Button>
      </div>

      {/* Rest of the component remains the same... */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {searchHistory.length > 0 ? (
            searchHistory.slice(0, 20).map((item, index) => (
              <button
                key={index}
                onClick={() => handleHistoryClick(item)}
                className={`w-full text-left p-3 text-sm rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 text-muted-foreground hover:text-foreground group ${
                  !showExpandedContent ? 'justify-center' : ''
                }`}
                title={!showExpandedContent ? item : ""}
              >
                <div className={`flex items-center ${!showExpandedContent ? 'justify-center' : 'space-x-2'}`}>
                  <MessageSquare className="h-4 w-4 flex-shrink-0" />
                  <span className={`truncate transition-all duration-300 ${
                    showExpandedContent ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                  }`}>
                    {item}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className={`text-center py-8 px-4 transition-all duration-300 ${
              showExpandedContent ? 'opacity-100' : 'opacity-0'
            }`}>
              <MessageSquare className="h-8 w-8 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No searches yet</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Start by searching for a medication</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t border-white/20 dark:border-white/10 space-y-1">
        <Button 
          variant="ghost" 
          size="sm"
          className={`w-full justify-start h-9 text-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 ${
            !showExpandedContent ? 'px-0 justify-center' : ''
          }`}
          title={!showExpandedContent ? "Settings" : ""}
        >
          <Settings className={`h-4 w-4 ${!showExpandedContent ? '' : 'mr-2'}`} />
          <span className={`transition-all duration-300 ${
            showExpandedContent ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
          }`}>
            Settings
          </span>
        </Button>

        <div className="pt-2">
          <div className={`flex items-center p-2 rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors cursor-pointer ${
            !showExpandedContent ? 'justify-center' : 'space-x-2'
          }`}>
            <Avatar className="h-7 w-7 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 flex-shrink-0">
              <AvatarFallback className="bg-transparent text-xs">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            
            <div className={`flex-1 min-w-0 transition-all duration-300 ${
              showExpandedContent ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
            }`}>
              <p className="text-sm font-medium truncate">Guest User</p>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className={`h-6 w-6 p-0 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 ${
                showExpandedContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              title="Sign Out"
            >
              <LogOut className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

SearchSidebar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchHistory: PropTypes.arrayOf(PropTypes.string),
};
