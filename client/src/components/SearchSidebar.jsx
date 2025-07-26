import { useState } from "react";
import PropTypes from "prop-types";
import { Search, Upload, X, History, Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const SearchSidebar = ({ onSearch, isLoading, searchHistory = [] }) => {
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchType, setSearchType] = useState("text");

  const handleTextSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), "text");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setSearchType("image");
      onSearch(file.name, "image");
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setSearchType("text");
  };

  const handleHistoryClick = (historyQuery) => {
    setQuery(historyQuery);
    onSearch(historyQuery, "text");
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-background border-r border-border overflow-y-auto">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Search className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">KnowYourDrugs</h1>
            <p className="text-xs text-muted-foreground">Search Hub</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Guest User</p>
            <p className="text-xs text-muted-foreground">guest@example.com</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-sm font-medium mb-3">Search Medications</h2>
          <form onSubmit={handleTextSearch} className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter drug name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
                disabled={isLoading || searchType === "image"}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!query.trim() || isLoading || searchType === "image"}
              size="sm"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
                  <span>Searching...</span>
                </div>
              ) : (
                <>
                  <Search className="mr-2 h-3 w-3" />
                  Search
                </>
              )}
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {selectedFile ? (
            <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/30">
              <div className="flex items-center space-x-2">
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium truncate">{selectedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFile}
                className="h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors">
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-5 h-5 mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground text-center">
                  Upload image
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
            </label>
          )}
        </div>
      </div>

      <Separator />

      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <History className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">Recent Searches</h3>
        </div>

        {searchHistory.length > 0 ? (
          <div className="space-y-1">
            {searchHistory.slice(0, 5).map((item, index) => (
              <button
                key={index}
                onClick={() => handleHistoryClick(item)}
                className="w-full text-left p-2 text-xs rounded hover:bg-accent/50 transition-colors text-muted-foreground hover:text-foreground"
              >
                {item}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">No recent searches</p>
        )}
      </div>

      <Separator />

      <div className="p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
};

SearchSidebar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchHistory: PropTypes.arrayOf(PropTypes.string),
};
