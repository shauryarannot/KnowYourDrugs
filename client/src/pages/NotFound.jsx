import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl font-bold text-destructive">404</h1>
        <p className="text-lg text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 text-sm font-medium text-primary hover:underline transition-colors"
        >
          ← Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
