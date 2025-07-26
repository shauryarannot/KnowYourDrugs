import { Moon, Sun, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = ({ isDark, toggleDark }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3 animate-fade-in">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Pill className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">KnowYourDrugs</h1>
            <p className="text-xs text-muted-foreground">Medication Information Hub</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDark}
          className="h-9 w-9 hover-lift"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="h-4 w-4 transition-all" />
          ) : (
            <Moon className="h-4 w-4 transition-all" />
          )}
        </Button>
      </div>
    </header>
  );
};
