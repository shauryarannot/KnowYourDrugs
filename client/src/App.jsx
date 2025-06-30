import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
