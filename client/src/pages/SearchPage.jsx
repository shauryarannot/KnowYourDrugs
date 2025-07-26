import { useState, useRef } from "react";
import { SearchSidebar } from "@/components/SearchSidebar";
import { DrugInfoCard } from "@/components/DrugInfoCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Search, Upload, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [drugInfo, setDrugInfo] = useState(null);
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchHistory, setSearchHistory] = useState([
    "Aspirin",
    "Ibuprofen",
    "Paracetamol",
    "Amoxicillin"
  ]);

  const fileInputRef = useRef(null);

  const mockDrugData = {
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    category: "Pain Reliever / Anti-inflammatory",
    uses: [
      "Relief of mild to moderate pain including headache, toothache, and muscle pain",
      "Reduction of fever",
      "Anti-inflammatory effects for conditions like arthritis",
      "Low-dose prevention of heart attack and stroke (when prescribed by doctor)"
    ],
    sideEffects: [
      "Stomach irritation or upset",
      "Heartburn",
      "Nausea",
      "Dizziness",
      "Ringing in ears (tinnitus)",
      "Easy bruising or bleeding"
    ],
    dosage: "Adults: 325-650mg every 4 hours as needed. Do not exceed 4g in 24 hours.",
    warnings: [
      "Do not give to children under 16 years due to risk of Reye's syndrome",
      "Avoid if allergic to NSAIDs or have active stomach ulcers",
      "Consult doctor if taking blood thinners"
    ]
  };

  const handleSearch = (searchQuery, type = "text") => {
    setIsLoading(true);
    setDrugInfo(null);

    if (type === "text" && !searchHistory.includes(searchQuery)) {
      setSearchHistory([searchQuery, ...searchHistory.slice(0, 4)]);
    }

    setTimeout(() => {
      setDrugInfo(mockDrugData);
      setIsLoading(false);
    }, 1500);
  };

  const handleTextSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query.trim(), "text");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleSearch(file.name, "image");
    }
  };

  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      handleSearch(transcript, "voice");
    };

    recognition.onend = () => setIsListening(false);

    recognition.onerror = () => {
      setIsListening(false);
      alert("Speech recognition error occurred");
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SearchSidebar
        onSearch={handleSearch}
        isLoading={isLoading}
        searchHistory={searchHistory}
        onToggle={setSidebarCollapsed}
      />

      <main
        className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
          sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <div className="w-full max-w-4xl px-8">
          {!drugInfo && !isLoading && (
            <div className="text-center animate-fade-in">
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  What Drug would you like to know about?
                </h1>
              </div>

              <form onSubmit={handleTextSearch} className="mb-12">
                <div className="relative max-w-3xl mx-auto">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />

                  <Input
                    type="text"
                    placeholder="Search for any medication, supplement, or drug name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-16 pl-16 pr-32 text-lg bg-white backdrop-blur-xl border border-white rounded-3xl shadow-2xl focus:border-primary/50 focus:bg-white transition-all duration-300 dark:bg-black/20 dark:border-white/10 dark:focus:bg-black/30"
                    disabled={isLoading}
                  />

                  <div className="absolute inset-y-0 right-4 flex items-center space-x-2">
                    <button
                      type="submit"
                      disabled={!query.trim() || isLoading}
                      className="h-10 px-4 rounded-xl bg-primary/90 text-black hover:bg-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                    >
                      Search
                    </button>

                    <button
                      type="button"
                      onClick={startVoiceSearch}
                      disabled={isLoading || isListening}
                      className={`h-10 w-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:bg-white/30 transition-all duration-200 dark:bg-black/20 dark:hover:bg-black/30 ${
                        isListening ? "text-red-500 animate-pulse bg-red-500/10" : ""
                      }`}
                      title={isListening ? "Listening..." : "Voice Search"}
                    >
                      <Mic className="h-5 w-5" />
                    </button>

                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isLoading}
                        className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:bg-white/30 transition-all duration-200 dark:bg-black/20 dark:hover:bg-black/30"
                        title="Upload Image"
                      >
                        <Upload className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="animate-fade-in delay-300"></div>
            </div>
          )}

          {isLoading && (
            <div className="text-center py-16">
              <LoadingSpinner text="Analyzing medication information..." />
            </div>
          )}

          {drugInfo && !isLoading && (
            <div className="animate-scale-in">
              <DrugInfoCard drugInfo={drugInfo} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
