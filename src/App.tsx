import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StartSection from "@/components/sections/StartSection";
import FeaturesChess from "@/components/sections/FeaturesChess";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CtaFooter from "@/components/sections/CtaFooter";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black">
      <ScrollProgress />
      <LoadingScreen isLoading={isLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <Navbar />
        <Hero />
        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
