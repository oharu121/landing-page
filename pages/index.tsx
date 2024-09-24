// pages/index.tsx
import HeroSection from "@/components/HeroSection";
import Mission from "@/components/Mission";
import TechStack from "@/components/TechStack";
import Youtube from "@/components/Youtube";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Mission />
      <TechStack />
      <Youtube />
      <Footer />
    </div>
  );
};

export default Home;
