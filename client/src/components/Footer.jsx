export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white/20 backdrop-blur-md">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center sm:flex-row sm:justify-between sm:space-y-0 sm:text-left">
          <nav aria-label="Footer navigation" className="flex space-x-8 text-sm font-medium text-muted-foreground">
            <a
              href="/about"
              className="hover:text-foreground transition-colors hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground rounded"
              aria-label="About page"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-foreground transition-colors hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground rounded"
              aria-label="Contact page"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground rounded"
              aria-label="Privacy policy page"
            >
              Privacy
            </a>
          </nav>

          <div className="text-xs text-muted-foreground max-w-md">
            <p>© 2024 KnowYourDrugs. Educational purposes only.</p>
            <p className="mt-1">Not a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
