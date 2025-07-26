import { useState } from "react";
import { SearchSidebar } from "@/components/SearchSidebar";
import { DrugInfoCard } from "@/components/DrugInfoCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [drugInfo, setDrugInfo] = useState(null);
  const [searchHistory, setSearchHistory] = useState([
    "Aspirin",
    "Ibuprofen",
    "Paracetamol",
    "Amoxicillin"
  ]);

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

  const handleSearch = (query, type) => {
    setIsLoading(true);
    setDrugInfo(null);

    if (type === "text" && !searchHistory.includes(query)) {
      setSearchHistory([query, ...searchHistory.slice(0, 4)]);
    }

    setTimeout(() => {
      setDrugInfo(mockDrugData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <SearchSidebar
        onSearch={handleSearch}
        isLoading={isLoading}
        searchHistory={searchHistory}
      />

      <main className="ml-80 min-h-screen">
        <div className="p-8">
          {!drugInfo && !isLoading && (
            <div className="max-w-4xl mx-auto text-center py-16 animate-fade-in">
              <div className="text-6xl mb-6 opacity-20">💊</div>
              <h1 className="text-3xl font-bold mb-4">
                Welcome to KnowYourDrugs
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Search for comprehensive medication information using the sidebar. 
                Enter a drug name or upload an image to get started.
              </p>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Aspirin", "Ibuprofen", "Paracetamol", "Amoxicillin", "Metformin"].map((drug) => (
                    <button
                      key={drug}
                      onClick={() => handleSearch(drug, "text")}
                      className="px-3 py-1 text-xs bg-muted hover:bg-accent rounded-full transition-colors"
                    >
                      {drug}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="max-w-4xl mx-auto py-16">
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
