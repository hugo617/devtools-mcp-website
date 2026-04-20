import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StartSection from "@/components/sections/StartSection";
import FeaturesChess from "@/components/sections/FeaturesChess";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CtaFooter from "@/components/sections/CtaFooter";

function App() {
  return (
    <div className="bg-black">
      <div className="z-10">
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
      </div>
    </div>
  );
}

export default App;
