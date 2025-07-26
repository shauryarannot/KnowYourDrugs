import { useState } from "react";
import PropTypes from "prop-types";
import { Search, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const SearchInterface = ({ onSearch, isLoading }) => {
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

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 glass-card animate-slide-up">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Search for Drug Information</h2>
          <p className="text-muted-foreground">
            Enter a medication name or upload an image of the drug packaging
          </p>
        </div>

        <form onSubmit={handleTextSearch} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter drug name (e.g., Aspirin, Ibuprofen...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base"
              disabled={isLoading || searchType === "image"}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 hover-lift"
            disabled={!query.trim() || isLoading || searchType === "image"}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span>Searching...</span>
              </div>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Search by Name
              </>
            )}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <div className="space-y-4">
          {selectedFile ? (
            <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
              <div className="flex items-center space-x-3">
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{selectedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFile}
                className="hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 10MB)</p>
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
    </Card>
  );
};

SearchInterface.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
