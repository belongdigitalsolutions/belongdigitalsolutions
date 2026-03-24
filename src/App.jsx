import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AppRoutes from "./routes/AppRoutes";
import { scrollToTop } from "./utils/format";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default App;
