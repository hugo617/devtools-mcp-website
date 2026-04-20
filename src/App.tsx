import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StartSection from "@/components/sections/StartSection";
import FeaturesChess from "@/components/sections/FeaturesChess";
import Marquee from "@/components/ui/Marquee";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CtaFooter from "@/components/sections/CtaFooter";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CursorGlow from "@/components/ui/CursorGlow";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black">
      <ScrollProgress />
      <BackToTop />
      <CursorGlow />
      <LoadingScreen isLoading={isLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <Navbar />
        <Hero />
        <main role="main" className="bg-black">
          <StartSection />
          <FeaturesChess />
          <Marquee items={["Design", "Develop", "Deploy", "Iterate", "Optimize"]} speed={25} className="py-8" />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </main>
      </motion.div>
    </div>
  );
}

export default App;
