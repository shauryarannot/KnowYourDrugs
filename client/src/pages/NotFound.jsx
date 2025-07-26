import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex flex-col items-center justify-center px-4">
      {/* Animated gradient 404 */}
      <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        404
      </h1>

      {/* Simple back button */}
      <Button 
        asChild 
        variant="liquid-glass-primary" 
        size="liquid-default"
        className="px-6"
      >
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
