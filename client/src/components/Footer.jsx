export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors hover-lift">
              About
            </button>
            <span className="text-border">•</span>
            <button className="hover:text-foreground transition-colors hover-lift">
              Contact
            </button>
            <span className="text-border">•</span>
            <button className="hover:text-foreground transition-colors hover-lift">
              Privacy
            </button>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>© 2024 KnowYourDrugs. Educational purposes only.</p>
            <p className="mt-1">Not a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
